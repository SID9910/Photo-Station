import { Link ,useNavigate } from "react-router-dom";
import { Label,Button, TextInput, Alert, Spinner } from "flowbite-react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { signInStart,signInSuccess ,signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
export default function SignIn() {
  
   const [formData , setformData] = useState({});

   const {loading ,error:errorMessage}= useSelector(state => state.user);
     const dispatch =useDispatch();
const navigate =useNavigate();
    // trip is used to remove space before input
  const handleChange =(e)=>{
    setformData({...formData , [e.target.id]: e.target.value.trim()});
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !formData.email || !formData.password){
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
         dispatch(signInStart());
      // Check if formData is correctly populated

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
   
      
      const data = await res.json();
      if(data.success ===false){
        dispatch(signInFailure(data.message));
      }
     
     
     if(res.ok){
      dispatch(signInSuccess(data));
      navigate('/');

     }
      
    } catch (error) {
        dispatch(signInFailure(error.message));
    }
  };
  
  return (
    <div className="min-h-screen mt-20">
     <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5" >
   {/* left */}

    <div  className=" flex-1">

    <Link to="/" className=' font-bold dark:text-white text-4xl'>

<span className='px-2 py-1 bg-gradient-to-r from-red-600 via-indigo-500 rounded '>Photo</span>Station
</Link>

<p className="text-sm mt-5">
 You can Sign In with your Email and Password Or with Google here ...

</p>
    </div>
     {/* right */}

     <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
           
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div><Button type="submit" gradientDuoTone='purpleToBlue' disabled={loading}>

{
  loading ?(
    <>
    <Spinner size='sm' />
    <span className="pl-3">Loading...</span>
    </>
  ):'Sign In'
}

            </Button>
            <OAuth />
  </form>

  <div className="flex gap-2 text-sm mt-5">
    <span> Dont Have an account?</span>
    <Link to='/sign-up' className="text-blue-500" >Sign Up</Link>
  </div>

{
  errorMessage && (
    <Alert className="mt-5" color='failure'>{errorMessage}</Alert>
    )
}
    </div>
     </div>


    </div>
  )
}
