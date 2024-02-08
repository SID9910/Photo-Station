import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-grey-500' style={{ backgroundColor: 'rgb(0 0 0 / 49%)' }}>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-red-600 via-indigo-500 rounded'>Post</span>Station
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://siddharthguptaportfolio.netlify.app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className="text-white"
                >
                  Siddharth Gupta
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                  className="text-white"
                >
                  Post Station
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/SID9910'
                  target='_blank'
                  rel='noopener noreferrer'
                  className="text-white"
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://discord.com/channels/sid12348291' target='_blank' rel='noopener noreferrer' className="text-white">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href='#' className="text-white">Privacy Policy</Footer.Link>
                <Footer.Link href='#' className="text-white">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Post Station"
            year={new Date().getFullYear()}
            className="text-white"
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/profile.php?id=100008190249374' icon={BsFacebook} className="text-white"/>
            <Footer.Icon href='https://www.instagram.com/hiiiisiddharth/?next=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Fsearch%2F%3F__coig_login%3D1' icon={BsInstagram} className="text-white"/>
            <Footer.Icon href='https://x.com/Siddhar51040861?t=DfrJsB9WQnW-cMQ2zHMcpQ&s=09' icon={BsTwitter} className="text-white"/>
            <Footer.Icon href='https://github.com/SID9910' icon={BsGithub} className="text-white"/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
