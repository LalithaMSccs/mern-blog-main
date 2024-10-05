import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin, BsInfo, BsMailbox2Flag, BsMagnetFill, BsMailbox, BsMailbox2 } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
                  <img src='./blo.png' className='h-16'/>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/'
                >
                   Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/ArathiMScCs'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://www.linkedin.com/in/arathi-shanmughan-22aa26289'>LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='/privay'>Privacy Policy</Footer.Link>
                <Footer.Link href='/terms'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Lalitha & Arathi"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='https://github.com/LalithaMSccs ' icon={BsGithub}/>
            <Footer.Icon href='http://www.linkedin.com/in/lalitha-palanisamy-1616l' icon={BsLinkedin}/>
            <Footer.Icon href='/about' icon={BsInfo}/>
            <Footer.Icon href='mailto:pgcs.lalitha@gmail.com' icon={BsMailbox2}/>
            <Footer.Icon href='mailto:pgcs.arathi@gmail.com' icon={BsMailbox2}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
