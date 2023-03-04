import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './faqs.css'
import clsx from 'clsx'

const FaqItem = (faqItem) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='accordion-module--item'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setIsOpen(false)}
        className={clsx(
          'accordion-module--button !transition-all duration-500 ease-in-out !font-Lato !text-navy',
          isOpen && 'accordion-module--open',
        )}
      >
        <svg
          width='20'
          height='4'
          viewBox='0 0 20 4'
          fill='currentColor'
          className={clsx(
            '!transition-opacity !duration-500 !ease-in-out',
            isOpen ? 'flex' : 'hidden',
          )}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 4V0H20V4H0Z'></path>
        </svg>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='currentColor'
          className={clsx(
            '!transition-opacity !duration-500 !ease-in-out',
            !isOpen ? 'flex' : 'hidden',
          )}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 0H8V8H0V12H8V20H12V12H20V8H12V0Z'
          ></path>
        </svg>
        Why do collectors and artists love NFTfi?
      </button>
      <div
        className={clsx(
          'accordion-module--content px-14 !transition-all !duration-500 !ease-in-out',
          isOpen && '!h-auto px-10 py-5 inline-flex overflow-hidden border',
        )}
      >
        <div className='accordion-module--inner !px-10'>
          <div className='contentful-rich-text-module--richtext !font-Roboto'>
            <p>
              The ability to access liquidity against their NFTs without selling the asset gives
              unprecedented financial flexibility to NFT holders, especially if they have a large
              percentage of their portfolio locked up in these illiquid assets.&nbsp;
            </p>
            <p>
              A few examples of what the liquidity obtained via NFTfi can be used for include:&nbsp;
            </p>
            <ul className='list-disc px-10 py-1'>
              <li>Serving immediate liquidity needs (e.g. covering margin positions)</li>
              <li>
                Taking advantage of short-term investment opportunities (e.g. high-yield liquidity
                mining or NFT flips)
              </li>
              <li>
                Taking advantage of long-term investment opportunities (e.g. buying real estate;
                long-term loans is now supported in NFTfi V2)
              </li>
              <li>Delaying a planned sale of an NFT for more opportune market conditions</li>
              <li>Delaying a planned sale of an NFT to defer potential capital gains tax</li>
              <li>Financing ‘real life’ needs without having to sell valuable assets</li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}
const Faqs = () => {
  return (
    <section className='py-24 flex z-20 justify-center items-center bg-[#f2f8ff]  section-module--section--27a22 questions-module--section--d270f section-module--lightblue--baa20'>
      <div className='relative w-11/12 md:w-10/12 lg:w-3/4 flex flex-col items-center container-module--container--3a7e6 container-module--constrained--28f48'>
        <h2 className='text-6xl font-Lato text-navy my-5 font-bold title-module--title--73b11 title-module--center--3ded2'>
          Got questions?
        </h2>
        <p className='text-lg max-w-[850px] py-2 text-navy_light font-Roboto text-center intro-module--intro--5e21f questions-module--intro--d24dc intro-module--center--87e61'>
          Peer-to-peer NFT lending is a pretty simple concept, and you can quickly learn the basics
          by scrolling through our FAQ section.
        </p>
        <div className='py-10 accordion-module--accordion questions-module--questions max-w-[700px]'>
          {[1, 2, 3, 4, 5, 6].map((item, i) => {
            return <FaqItem key={item} />
          })}
        </div>
        <div className='my-14'>
          <Link
            className='px-10 py-5 border-primary border-2 hover:bg-primary text-primary font-bold hover:text-white '
            href='/faq/'
          >
            Go to FAQ section
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Faqs
