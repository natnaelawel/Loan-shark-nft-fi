import React from 'react'
import './testmonials.css'

const Testimonials = () => {
  return (
    <section className='relative flex justify-center items-center my-12 min-h-[750px]'>
      <div className='relative z-20  container-module--container--3a7e6 container-module--constrained--28f48 testimonials-module--container--90057'>
        <div className='testimonials-module--wrapper flex  gap-x-2 items-center'>
          <button
            className='h-8 w-8 hover:bg-primary border-primary border-2 hover:text-white group'
            aria-label='Previous button'
          >
            <svg
              className='w-full h-full group-hover:text-white'
              viewBox='0 0 15 22'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
            >
              <path d='M10 6L5 11L10 16' stroke='currentColor' strokeWidth='1.5'></path>
            </svg>
          </button>
          <div className='!bg-gray-50 shadow-2xl p-10 !z-20 h-[400px] items-stretch'>
            <div className='swiper-wrapper transition transform-[translate3d(-1376px, 0px, 0px)] h-full px-10 flex'>
              {[1].map((item, indx) => {
                return (
                  <div
                    key={item}
                    style={{
                      width: '600px',
                    }}
                    className='flex flex-col gap-y-10 text-center flex-1 text-2xl  justify-center'
                  >
                    <div className='flex flex-col gap-y-10'>
                      <p className='testimonials-module--text--c7ee9'>
                        My experience with NFTfi has been amazing. Once you realize that you can get
                        money from your &quot;illiquid&quot; NFT and still keep it, it&apos;s a
                        no-brainer. Being able to fix the terms directly with the other party is the
                        best part.
                      </p>
                      <h4 className='text-base'>Ezequiel / @crypto_rgd</h4>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            className='h-8 w-8 hover:bg-primary border-primary border-2 hover:text-white group'
            aria-label='Previous button'
          >
            <svg
              className='w-full h-full group-hover:text-white'
              viewBox='0 0 15 22'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
            >
              <path d='M5 6L10 11L5 16' stroke='currentColor' strokeWidth='1.5'></path>
            </svg>
          </button>
          <div className='swiper-pagination testimonials-module--pagination--0a548 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal'>
            <span className='swiper-pagination-bullet'></span>
            <span className='swiper-pagination-bullet'></span>
            <span className='swiper-pagination-bullet swiper-pagination-bullet-active'></span>
            <span className='swiper-pagination-bullet'></span>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '800px',
          backgroundSize: '1285px',
          maxWidth: '100%',
          backgroundPosition: '10% 25%',
          backgroundImage: "url('/images/testimonials_bg.svg')",
        }}
        className='absolute inset-0 -z-10 top-auto overflow-hidden max-w-full bg-no-repeat pointer-events-none background-module--background background-module--testimonials'
      >
        <div></div>
      </div>
    </section>
  )
}

export default Testimonials
