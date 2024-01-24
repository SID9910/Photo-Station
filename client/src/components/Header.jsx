import { Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>

            <span className='px-2 py-1 bg-gradient-to-r from-red-600 via-indigo-500 rounded '>Photo</span>Station
        </Link>

        <form>
          <TextInput  />
        </form>
    </Navbar>
  )
}
