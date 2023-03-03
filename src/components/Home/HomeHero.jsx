import React from 'react'
import './home_hero.css'

const HomeHero = () => {
  return (
    <section className='section-module--hero overflow-hidden h-screen max-h-screen'>
      <div className='relative z-20 flex flex-col gap-y-5 lg:flex-row items-center justify-center max-w-7xl'>
        <div className='home-hero-module--content flex flex-col items-center lg:items-start'>
          <div className='home-hero-module--info w-3/4 lg:w-full lg:max-w-[450px] font-Lato'>
            <h1 className='hero-title-module--title hero-title-module--light !font-bold text-5xl !text-center lg:text-start'>
              Use your NFTs to get a crypto loan
            </h1>
            <p className='hero-text-module--text hero-text-module--light !text-center lg:text-start'>
              Use your NFT as collateral to borrow wETH, DAI, or USDC from lenders. Repay your loan,
              and you get your NFT back. No auto-liquidations! 0% borrower fees!
            </p>
          </div>
          <div className='hero-buttons-module--buttons flex items-center justify-start gap-x-5 mb-14 relative'>
            <a
              className='link-button-module--button bg-primary hover:bg-primary !text-white  border'
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
          <div
            style={{ color: 'white' }}
            className='flex items-center justify-center gap-x-5 !text-white'
          >
            <div className='text-3xl font-semibold'>
              <span className='text-white'>$</span>
              <span className='hero-counter-module--count--72757'>350</span>
              <span className='hero-counter-module--suffix--ebad0'>M+</span>
              <p className='text-sm font-normal'>Total loan volume (USD)</p>
            </div>
            <div className='text-3xl font-semibold'>
              <span className='text-white'></span>
              <span className='hero-counter-module--count--72757'>30</span>
              <span className='hero-counter-module--suffix--ebad0'>K+</span>
              <p className='text-sm font-normal'>Total number of loans</p>
            </div>
            <div className='text-3xl font-semibold'>
              <span className='text-white'>$</span>
              <span className='hero-counter-module--count--72757'>10</span>
              <span className='hero-counter-module--suffix--ebad0'>K</span>
              <p className='text-sm font-normal'>Average loan size</p>
            </div>
          </div>
        </div>
        <div className='home-hero-module--image'>
          <div className=''>
            <div className='w-full max-w-[700px] lg:max-w-[800px]'>
              <img
                alt=''
                className='object-contain w-full h-full'
                role='presentation'
                aria-hidden='true'
                src='/images/nftfi-hero-image.webp'
                style={{
                  maxWidth: '100%',
                  display: 'block',
                  position: 'static',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '1660px',
          backgroundSize: '1285px',
          maxWidth: '100%',
          backgroundPosition: '100% 0',
          backgroundImage: "url('/images/bg.svg')",
        }}
        className='absolute inset-0 h-[1000px] z-10 overflow-hidden max-w-full bg-no-repeat pointer-events-none background-module--background background-module--hero'
      >
        <div></div>
      </div>
    </section>
  )
}

export default HomeHero
