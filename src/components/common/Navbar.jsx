import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
// import './navbar.css'
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'flex w-full items-center h-24 justify-center top-0 left-0 right-0 !fixed !z-50',
      )}
      style={{
        backgroundColor: `rgba(22, 21, 45, ${0.005 * scrollPosition})`,
      }}
    >
      <div className='w-11/12 sm:w-10/12 xl:w-3/4 flex justify-between items-center'>
        <a className='text-inherit flex-[1]' href='/' aria-current='page'>
          <img
            // className='plain-image-module--image'
            src='/images/nftfi-logo.svg'
            alt='NFTfi'
            width='91'
            height='35'
            loading='lazy'
          />
        </a>
        <nav className='hidden font-Lato flex-[3] xl:flex-[2] lg:flex'>
          <ul className='flex list-none justify-between items-center py-6 text-white gap-x-5 w-full'>
            <li>
              <Link
                href='/'
                aria-current='page'
                className='text-white decoration-transparent py-4 px-2 font-medium text-sm'
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href='/how-it-works/'>
                <span>How it works</span>
              </Link>
            </li>
            <li>
              <a href='https://app.nftfi.com/lend/assets' rel='noreferrer' target='_blank'>
                <span>Lend</span>
              </a>
            </li>
            <li>
              <a href='https://app.nftfi.com/borrow/assets' rel='noreferrer' target='_blank'>
                <span>Borrow</span>
              </a>
            </li>
            <li>
              <a href='https://discord.gg/nftfi' rel='noreferrer' target='_blank'>
                <span>Community</span>
              </a>
            </li>
            <li>
              <Link href='/blog/'>
                <span>Blog</span>
              </Link>
            </li>
            <li
              className={clsx(
                'self-end xl:ml-20',
                // 'after:content-[""] after:bg-[linear-gradient(90deg,#7e5bd6,rgba(126,91,214,0))] after:absolute after:bottom-0 after:h-1.25 after:w-0 after:transition=["width .2s ease-in-out"] after:hoverw-full',
              )}
            >
              <Link
                // href='https://app.nftfi.com/borrow/assets'
                to='/app/borrow/assets'
                className='bg-[#7e5bd6] inline-flex px-5 py-3 h-full w-full text-white leading-6 font-Lato  cursor-pointer font-bold gap-x-3 justify-center text-base decoration-transparent'
              >
                Open dApp
              </Link>
            </li>
          </ul>
        </nav>
        <button className='lg:hidden text-primary' aria-label='Menu button'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect x='2' y='4' width='14' height='2'></rect>
            <rect x='2' y='11' width='20' height='2'></rect>
            <rect x='8' y='18' width='14' height='2'></rect>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar
