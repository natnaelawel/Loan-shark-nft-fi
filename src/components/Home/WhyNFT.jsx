import React from 'react'
import './whynft.css'

const WhyNFT = () => {
  return (
    <section className='section-module--section why-nftfi-module--section- section-module--dark flex justify-center py-40 text-white'>
      <div className='flex flex-col lg:flex-row items-center why-nftfi-module--container w-11/12 lg:w-9/12 gap-5 '>
        <div className='w-full md:w-2/3 lg:w-1/3 why-nftfi-module--intro flex flex-1 flex-col gap-8'>
          <h2 className='text-5xl font-bold font-Lato text-white '>Why NFTfi?</h2>
          <p className='text-gray-400 font-Roboto'>
            Our mission is to give NFT owners the financial flexibility they deserve. NFTfi was
            designed to provide the most secure, fair, and transparent way to unlock opportunities
            from your valuable NFTs.
          </p>
        </div>
        <div className='w-2/3 why-nftfi-module--items grid grid-cols-1 md:grid-cols-2 flex-2 gap-5 md:gap-y-10'>
          <div className='why-nftfi-module--item flex flex-col gap-y-5 h-full'>
            <img
              className='plain-image-module--image--2e318 why-nftfi-module--image--2718e'
              src='//images.ctfassets.net/21yktilggb3f/3GLZEhTPfE0x8SxpE2v3Rt/2c73130b455334c66789eb840b8f051b/transparent-icon.svg'
              alt='Transparent &amp; open'
              width='64'
              height='65'
              loading='lazy'
            />
            <h3 className='subtitle-module--subtitle--065e9 subtitle-module--light--9a807'>
              Transparent &amp; open
            </h3>
            <p className='text-gray-400 font-Roboto'>
              The NFTfi dApp runs on Ethereum and is non-custodial, decentralized, and
              permissionless. All you need is a digital wallet to interact.
            </p>
          </div>
          <div className='why-nftfi-module--item flex flex-col gap-y-5 h-full'>
            <img
              className='plain-image-module--image--2e318 why-nftfi-module--image--2718e'
              src='//images.ctfassets.net/21yktilggb3f/18dNFDYG6zjoyFdvCkAPZ3/e325ed5030cd0a8e9787ddc1d993f024/secure-icon.svg'
              alt='Secure &amp; double-audited'
              width='64'
              height='65'
              loading='lazy'
            />
            <h3 className='subtitle-module--subtitle--065e9 subtitle-module--light--9a807'>
              Secure &amp; double-audited
            </h3>
            <p className='text-gray-400 font-Roboto'>
              All core and periphery smart contracts have been double-audited by ChainSecurity &amp;
              Halborn.
            </p>
          </div>
          <div className='why-nftfi-module--item flex flex-col gap-y-5 h-full'>
            <img
              className='plain-image-module--image--2e318 why-nftfi-module--image--2718e'
              src='//images.ctfassets.net/21yktilggb3f/7JjNoofNKDwEv0s9XmvrvQ/61f0f244682c2edd7e9a82a996d03abe/noliquidations-icon.svg'
              alt='No auto-liquidations'
              width='58'
              height='61'
              loading='lazy'
            />
            <h3 className='subtitle-module--subtitle--065e9 subtitle-module--light--9a807'>
              No auto-liquidations
            </h3>
            <p className='text-gray-400 font-Roboto'>
              Every loan is facilitated in a peer-to-peer manner under fixed terms. This means no
              risk of liquidation should floor prices go down.
            </p>
          </div>
          <div className='why-nftfi-module--item flex flex-col gap-y-5 h-full'>
            <img
              className='plain-image-module--image why-nftfi-module--image'
              src='//images.ctfassets.net/21yktilggb3f/1yDqQsfYfq4wMnRnT4UJ9G/2eb983060dcdee0b925fbce3ac9e2eda/terms-icon.svg'
              alt='Fixed loan terms'
              width='55'
              height='65'
              loading='lazy'
            />
            <h3 className='subtitle-module--subtitle--065e9 subtitle-module--light--9a807'>
              0% borrower fees
            </h3>
            <p className='text-gray-400 font-Roboto'>
              NFTfi is a peer-to-peer protocol, and all loan terms are fixed between a lender and a
              borrower. Borrowers pay a 0% fee.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '800px',
          backgroundSize: 'contain',
          maxWidth: '100%',
          backgroundPosition: '0% 0%',
          backgroundImage: "url('/images/whynftfi.svg')",
        }}
        className='absolute inset-0 -z-10 top-auto overflow-hidden max-w-full bg-no-repeat pointer-events-none background-module--background background-module--testimonials background-module--background background-module--whynftfi'
      >
        <div></div>
      </div>
    </section>
  )
}

export default WhyNFT
