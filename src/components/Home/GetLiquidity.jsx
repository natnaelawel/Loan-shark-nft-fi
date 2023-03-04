import React from 'react'
import './getLiquidity.css'

const GetLiquidity = () => {
  return (
    <section className='relative section-module--section why-nftfi-module--section- section-module--dark flex justify-center py-40 text-white'>
      <div className='w-11/12 relative z-20 flex flex-col items-center  gap-y-10 md:w-10/12 lg:w-4/5 xl:w-3/4 container-module--container--3a7e6 container-module--constrained--28f48'>
        <h2 className='text-6xl text-center font-bold font-Lato title-module--title--73b11 get-liquidity-module--title--6e683 title-module--center--3ded2 title-module--light--14a8d'>
          Put your NFTs to work and get the liquidity you need.
        </h2>

        <div className='hero-buttons-module--buttons flex items-center justify-start gap-x-5 mb-14 relative'>
          <a
            className='link-button-module--button bg-primary/90 hover:bg-primary !text-white'
            href='https://app.nftfi.com/borrow/assets'
            rel='noreferrer'
            target='_blank'
          >
            Get a loan now
          </a>
          <a
            className='link-button-module--button text-secondary hover:bg-secondary hover:text-white'
            href='https://app.nftfi.com/lend/assets'
            target='_blank'
            rel='noreferrer'
          >
            I want to lend
          </a>
        </div>
      </div>
      <div
        style={{
          maxHeight: '600px',
          backgroundSize: 'contain',
          maxWidth: '100%',
          backgroundPosition: '90% -290px',
          backgroundImage: "url('/images/liquidity.svg')",
        }}
        className='absolute overflow-hidden background-module--bottom inset-0 -z-10 top-0 left-0 max-w-full bg-no-repeat pointer-events-none background-module--background background-module--testimonials background-module--background background-module--whynftfi'
      >
        <div></div>
      </div>
    </section>
  )
}

export default GetLiquidity
