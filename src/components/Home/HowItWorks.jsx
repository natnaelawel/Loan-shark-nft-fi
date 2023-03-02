import React from 'react'
import { Link } from 'react-router-dom'
import './home_hero.css'
import clsx from 'clsx'

const HowItWorks = () => {
  const borrowersList = [
    {
      id: 1,
      title: 'List your NFT & start getting loan offers',
      description:
        'First, you need to list your NFT and set the desired terms of the loan. After you list your NFT, other users will give you loan offers.',
      img: '/images/how-it-works-1-borrowing-2x.webp',
    },
    {
      id: 2,
      title: 'Receive loan offers & accept the best one',
      description:
        'When you accept a loan offer, your NFT goes into a secure escrow smart contract, and you receive the wETH, DAI, or USDC from the lender directly to your wallet!',
      img: '/images/how-it-works-2-borrowing-2x.webp',
    },
    {
      id: 3,
      title: 'Repay the loan & get your NFT back',
      description:
        'If you repay your loan in time, you will automatically receive your NFT back in your wallet!',
      img: '/images/how-it-works-3-borrowing-2x.webp',
    },
  ]

  return (
    <section className=' py-48 flex justify-center'>
      <div className=' max-w-[1140px] w-full relative z-20 text-center flex flex-col items-center'>
        <h2 className='font-semibold text-4xl text-navy leading-[53px] font-Lato'>How it works</h2>
        <p className=' max-w-3xl text-center text-navy_light font-normal'>
          NFTfi is the leading liquidity protocol for NFTs. NFTfi allows NFT holders to borrow
          cryptocurrency from lenders by using their NFTs as collateral.
        </p>
        <div className='my-14'>
          <Link
            style={{
              '&:hover': {
                color: 'blue !important',
              },
            }}
            className='text-primary border-primary border py-4 px-8 bg-primary/10 font-medium hover:bg-primary !hover:text-gray-50'
            href='/how-it-works/'
          >
            Learn more
          </Link>
        </div>
        <div className='font-Lato w-full' data-rttabs='true'>
          <ul className='flex items-center justify-center gap-x-5' role='tablist'>
            <li
              className={clsx(
                'cursor-pointer uppercase inline-flex leading-6 whitespace-nowrap p-4 relative hover:text-primary react-tabs__tab text-base tracking-widest font-Lato',
                'after:absolute after:h-5 after:bg-primary',
              )}
              role='tab'
              id='tab:R229:0'
              aria-selected='true'
              aria-disabled='false'
              aria-controls='panel:R229:0'
              data-rttab='true'
            >
              Borrowers
            </li>
            <li
              className={clsx(
                'cursor-pointer uppercase inline-flex leading-6 whitespace-nowrap p-4 relative hover:text-primary react-tabs__tab text-base tracking-widest font-Lato',
                'after:absolute after:h-5 after:bg-primary',
              )}
              role='tab'
              id='tab:R229:1'
              aria-selected='false'
              aria-disabled='false'
              aria-controls='panel:R229:1'
              data-rttab='true'
            >
              Lenders
            </li>
            <li
              className={clsx(
                'cursor-pointer uppercase inline-flex leading-6 whitespace-nowrap p-4 relative hover:text-primary react-tabs__tab text-base tracking-widest font-Lato',
                'after:absolute after:h-5 after:bg-primary',
              )}
              role='tab'
              id='tab:R229:2'
              aria-selected='false'
              aria-disabled='false'
              aria-controls='panel:R229:2'
              data-rttab='true'
            >
              Institutions
            </li>
          </ul>
          <div
            className='w-full my-10'
            role='tabpanel'
            id='panel:R229:0'
            aria-labelledby='tab:R229:0'
          >
            <div className='w-full overflow-hidden '>
              <ol className='font-Lato gap-y-10 my-10  flex flex-col relative overflow-hidden '>
                {borrowersList.map((item, i) => {
                  return (
                    <li
                      key={item}
                      className={clsx(
                        'cursor-pointer  list-none list flex items-start justify-between gap-x-10 group relative ',
                      )}
                    >
                      <div className='w-1/2 text-left py-10 peer flex relative'>
                        <div className=' mx-5  relative'>
                          <h1 className='relative text-6xl text-navy_light/50 group-hover:text-primary font-bold font-Lato px-5'>
                            {i + 1}
                          </h1>
                          <div className='hidden group-hover:flex w-full h-full max-h-[30px] max-w-[30px] absolute top-10 right-2 bg-primary blur-lg'></div>
                        </div>
                        <div>
                          <h3 className='text-navy font-Lato font-bold leading-8 mb-4 text-2xl'>
                            {item.title}
                          </h3>
                          <p className='text-navy_light font-Roboto'>{item.description}</p>
                        </div>
                      </div>
                      <div
                        style={{
                          zIndex: 10 - i,
                        }}
                        className={clsx(
                          'w-1/2 h-full absolute right-0 top-0 group-hover:z-30 peer-hover:z-30 peer-hover:block  group-hover:block ',
                          '',
                        )}
                      >
                        <div className='p-10 !bg-blue-900  h-full'>
                          <div
                            style={{
                              maxWidth: '563px',
                              display: 'block',
                            }}
                            className='max-w-[500px] bg-white'
                          >
                            <img
                              alt=''
                              role='presentation'
                              aria-hidden='true'
                              src={item.img}
                              style={{
                                maxWidth: '100%',
                                display: 'block',
                                position: 'static',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ol>
              <div className='buttons-module--buttons--f56b0 w-1/2 how-it-works-module--buttons--76540'>
                <a
                  className='link-button-module--button--1a818 link-button-module--primary--ad20b link-button-module--lg--9bc62 link-button-module--border--f10fc'
                  href='/how-it-works/'
                >
                  More about borrowing
                </a>
              </div>
            </div>
          </div>
          <div
            className='react-tabs__tab-panel'
            role='tabpanel'
            id='panel:R229:1'
            aria-labelledby='tab:R229:1'
          ></div>
          <div
            className='react-tabs__tab-panel'
            role='tabpanel'
            id='panel:R229:2'
            aria-labelledby='tab:R229:2'
          ></div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
