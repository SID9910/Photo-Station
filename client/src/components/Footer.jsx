import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-grey-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>

<span className='px-2 py-1 bg-gradient-to-r from-red-600 via-indigo-500 rounded '>Photo</span>Station
</Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://siddharth-gupta-portfolio.pages.dev/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
              Siddharth Gupta
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Photo Station
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/SID9910'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://discord.com/channels/sid12348291'     target='_blank'
                  rel='noopener noreferrer'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Photo Station"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/profile.php?id=100008190249374' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/hiiiisiddharth/?next=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Fsearch%2F%3F__coig_login%3D1' icon={BsInstagram}/>
            <Footer.Icon href='https://x.com/Siddhar51040861?t=DfrJsB9WQnW-cMQ2zHMcpQ&s=09' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/SID9910' icon={BsGithub}/>
            

          </div>
        </div>
      </div>
    </Footer>
  );
}