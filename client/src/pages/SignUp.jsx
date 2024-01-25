import { Link  } from "react-router-dom";
import { Label,Button, TextInput } from "flowbite-react";
import { useState } from "react";

export default function SignUp() {
  
   const [formData , setformData] = useState({});


  const handleChange =(e)=>{
    setformData({...formData , [e.target.id]: e.target.value});
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try{

  //     const res = await fetch('/api/auth/signup', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await res.json();

  //   }catch(error){
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data:', formData); // Check if formData is correctly populated
      
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      console.log('Response:', res); // Check the response object
      
      const data = await res.json();
      console.log('Data:', data); // Check the parsed data
      
    } catch (error) {
      console.error('Error:', error); // Log any errors
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
 You can Sign up with your Email and Password Or with Google here ...

</p>
    </div>
     {/* right */}

     <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
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
            </div><Button type="submit" gradientDuoTone='purpleToBlue'>Sign Up</Button>
  </form>

  <div className="flex gap-2 text-sm mt-5">
    <span>Have an account?</span>
    <Link to='/sign-in' className="text-blue-500" >Sign In</Link>
  </div>
</div>
     </div>


    </div>
  )
}
