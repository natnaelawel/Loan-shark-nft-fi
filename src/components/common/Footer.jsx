import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer-module--footer min-h-[750px] lg:min-h-[400px] relative z-20 flex justify-center items-center'>
      <div className='footer-module--wrapper absolute p-10 h-full -top-12 left-5 right-5 -lg:top-12 lg:left-12 lg:right-12 bg-white '>
        <div className='flex flex-col lg:flex-row w-full gap-8 container-module--container--3a7e6 container-module--constrained--28f48 footer-module--container--c231e'>
          <div className='footer-module--info w-11/12 lg:w-1/4 flex flex-col gap-y-5'>
            <a aria-current='page' className='' href='/'>
              <img
                className='plain-image-module--image--2e318'
                src='/images/nftfi-logo-black.svg'
                alt='NFTfi'
                width='91'
                height='35'
                loading='lazy'
              />
            </a>
            <p className='text-navy_light text-sm'>
              NFTfi.com is a peer-to-peer platform that lets NFT holders and liquidity providers
              connect via permissionless smart contract infrastructure.
            </p>
          </div>
          <nav className='w-11/12 gap-5 lg:w-3/4 footer-module--menu grid grid-cols-2 lg:grid-cols-5 items-start'>
            <ul className='!text-navy_light flex flex-col gap-y-1'>
              <li className='font-bold font-Lato text-lg tracking-wider text-navy mb-5'>
                <h3>NFTfi</h3>
              </li>
              <li>
                <a href='/privacy-policy/'>Privacy</a>
              </li>
              <li>
                <a href='/terms-of-use/'>Terms of Use</a>
              </li>
              <li>
                <a href='/terms-and-conditions/'>Terms of Service</a>
              </li>
              <li>
                <a href='https://github.com/NFTfi-Genesis' target='_blank' rel='noreferrer'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='mailto:marketing@nftfi.com'>Contact us</a>
              </li>
              <li>
                <a href='https://immunefi.com/bounty/nftfi/' target='_blank' rel='noreferrer'>
                  Bug Bounty Program
                </a>
              </li>
            </ul>
            <ul className='!text-navy_light flex flex-col gap-y-1'>
              <li className='font-bold font-Lato text-lg tracking-wider text-navy mb-5'>
                <h3>Lend</h3>
              </li>
              <li>
                <a href='https://app.nftfi.com/lend/assets' target='_blank' rel='noreferrer'>
                  Collateral
                </a>
              </li>
              <li>
                <a href='https://app.nftfi.com/lend/loans' target='_blank' rel='noreferrer'>
                  Loans
                </a>
              </li>
              <li>
                <a href='https://app.nftfi.com/lend/offers' target='_blank' rel='noreferrer'>
                  Offers
                </a>
              </li>
              <li>
                <a href='https://app.nftfi.com/collections' target='_blank' rel='noreferrer'>
                  Collection offers
                </a>
              </li>
              <li>
                <a
                  href='https://app.nftfi.com/assets/private-offer'
                  target='_blank'
                  rel='noreferrer'
                >
                  Private offers
                </a>
              </li>
            </ul>
            <ul className='!text-navy_light flex flex-col gap-y-1'>
              <li className='font-bold font-Lato text-lg tracking-wider text-navy mb-5'>
                <h3>Borrow</h3>
              </li>
              <li>
                <a href='https://app.nftfi.com/borrow/assets' target='_blank' rel='noreferrer'>
                  Assets
                </a>
              </li>
              <li>
                <a href='https://app.nftfi.com/borrow/loans' target='_blank' rel='noreferrer'>
                  Loans
                </a>
              </li>
              <li>
                <a href='https://app.nftfi.com/borrow/offers' target='_blank' rel='noreferrer'>
                  Offers
                </a>
              </li>
              <li>
                <a href='https://app.nftfi.com/borrow/bundles' target='_blank' rel='noreferrer'>
                  Bundles
                </a>
              </li>
            </ul>
            <ul className='!text-navy_light flex flex-col gap-y-1'>
              <li className='font-bold font-Lato text-lg tracking-wider text-navy mb-5'>
                <h3>Community &amp; Help</h3>
              </li>
              <li>
                <a href='/blog/'>Blog</a>
              </li>
              <li>
                <a href='https://discord.gg/nftfi' target='_blank' rel='noreferrer'>
                  Discord
                </a>
              </li>
              <li>
                <a href='/ambassadors/'>Ambassador Program</a>
              </li>
              <li>
                <a href='/faq/'>FAQ</a>
              </li>
              <li>
                <a href='https://dune.com/rchen8/NFTfi' target='_blank' rel='noreferrer'>
                  Dune
                </a>
              </li>
              <li>
                <a href='https://app.uniswap.org/#/swap' target='_blank' rel='noreferrer'>
                  Swap ETH/wETH
                </a>
              </li>
            </ul>
            <ul className='!text-navy_light flex  lg:flex-col gap-5 items-center justify-center gap-y-1'>
              <li className='h-14 hidden lg:flex'></li>
              <li>
                <a
                  className='flex lg:flex-col gap-x-3'
                  href='https://twitter.com/nftfi'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    className='plain-image-module--image--2e318'
                    src='/icons/twitter.svg'
                    alt='Twitter'
                    width='16'
                    height='16'
                    loading='lazy'
                  />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className='flex lg:flex-col gap-x-3'
                  href='https://discord.gg/nftfi'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    className='plain-image-module--image--2e318'
                    src='/icons/discord.svg'
                    alt='Discord'
                    width='16'
                    height='16'
                    loading='lazy'
                  />
                  Discord
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
