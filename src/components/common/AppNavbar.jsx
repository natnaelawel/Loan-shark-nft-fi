import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import './app_navbar.css'
const AppNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true })

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <header
      className={clsx(
        'flex w-full items-center h-28 justify-center left-0 right-0 !sticky top-0 !z-50',
      )}
      style={{
        backgroundColor: `rgba(22, 21, 45, ${0.005 * scrollPosition})`,
      }}
    >
      <nav className='bar borrow flex items-center justify-between w-10/12'>
        <div className='logo'>
          <Link to='/'>
            <svg width='103' height='81' viewBox='0 0 310 246' xmlns='http://www.w3.org/2000/svg'>
              <title>NFTfi</title>
              <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g id='logo'>
                  <path
                    d='M213.84,191.55 C217.246667,193.196667 220.73,194.77 224.29,196.27 C228.03,207.776667 231.773333,219.293333 235.52,230.82 C179.489567,249.035075 119.302409,250.142173 62.64,234 C59.9333333,230.4 57.3333333,226.76 54.84,223.08 C58.52,211.746667 62.1866667,200.413333 65.84,189.08 C113.818971,204.669018 165.367558,205.529322 213.84,191.55 L213.84,191.55 Z'
                    id='Path'
                    fill='#16152D'
                    fillRule='nonzero'
                  ></path>
                  <polygon
                    id='Path'
                    fill='#16152D'
                    fillRule='nonzero'
                    points='272.42 138.89 280.71 146.45 280.71 182.79 245.9 182.79 236.92 174.62 236.92 138.89'
                  ></polygon>
                  <polygon
                    id='Path'
                    fill='#16152D'
                    fillRule='nonzero'
                    points='40.38 138.89 48.67 146.45 48.67 182.79 13.87 182.79 4.89 174.62 4.89 138.89'
                  ></polygon>
                  <path
                    d='M161.28,115.84 C160.98,115.65 160.68,115.45 160.39,115.24 C156.83,112.67 155.17,108.32 155.46,102.3 C155.573009,100.072168 155.891019,97.8594847 156.41,95.69 C158.89,85.91 161.373333,76.1333333 163.86,66.36 L163.21,66.36 L155.54,61.45 L161.27,40.07 L170.66,40.07 C173.473333,29.21 176.28,18.3566667 179.08,7.51 L205.91,7.51 L213.57,12.41 C211.19,21.63 208.806667,30.85 206.42,40.07 L212.77,40.07 L220.44,44.97 L214.85,66.36 L199.59,66.36 L193,92.58 C193,92.75 192.92,92.92 192.88,93.08 L193.75,92.83 C195.75,92.23 197.59,91.57 199.33,90.83 L201.13,90.08 L208.8,94.98 C208.426667,102.48 208.06,109.98 207.7,117.48 L206.92,117.83 C202.92386,119.586716 198.789903,121.011526 194.56,122.09 C190.230359,123.223271 185.775444,123.807853 181.3,123.83 C176.924152,123.989977 172.594857,122.885954 168.83,120.65 L161.17,115.75'
                    id='Path'
                    fill='#16152D'
                    fillRule='nonzero'
                  ></path>
                  <line
                    x1='134.75'
                    y1='42.62'
                    x2='152.17'
                    y2='42.62'
                    id='Path'
                    stroke='#000000'
                    strokeWidth='2.73'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></line>
                  <polyline
                    id='Path'
                    stroke='#000000'
                    strokeWidth='2.73'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    points='293.49 42.62 251.25 42.62 293.49 42.62'
                  ></polyline>
                  <path
                    d='M250.07,117.34 L263.07,66.34 L256.91,66.34 C252.163333,85.0066667 247.42,103.656667 242.68,122.29 L215.81,122.29 L208.15,117.39 C212.47,100.37 216.803333,83.37 221.15,66.39 L220.52,66.39 L212.86,61.49 L212.86,61.49 L218.36,40 L227.88,40 C228.35,38.12 228.88,36.25 229.3,34.37 C231.800864,24.7308149 237.26859,16.1216825 244.93,9.76 C248.693668,6.66376625 252.953692,4.22608561 257.53,2.55 C262.223922,0.852639205 267.178624,-0.0103723537 272.17,3.3527868e-15 C277.440102,-0.064465735 282.665388,0.974460165 287.51,3.05 C290.10382,4.21203893 292.607421,5.56578875 295,7.1 L302.66,12 C304.738202,13.3245503 306.741282,14.76343 308.66,16.31 L309.66,17.09 L293.78,38.21 L286.12,33.31 L285.12,32.13 C284.416406,31.3066701 283.665116,30.5253278 282.87,29.79 C280.685113,28.9148453 278.353639,28.4634827 276,28.46 C273.139654,28.3638088 270.357332,29.4026859 268.26,31.35 C266.111337,33.3986274 264.591852,36.0178318 263.88,38.9 L263.58,40 L296.81,40 L304.48,44.9 L284.59,122.24 L257.73,122.24 L250.07,117.34 Z'
                    id='Path'
                    fill='#16152D'
                    fillRule='nonzero'
                  ></path>
                  <path
                    d='M99.19,122.24 L91.53,117.34 L104.61,66.34 L104,66.34 L96.33,61.43 C98.1766667,54.2766667 100.016667,47.1333333 101.85,40 L111.38,40 C111.85,38.12 112.32,36.25 112.8,34.37 C113.997836,29.4366935 115.847433,24.6849114 118.3,20.24 C120.524697,16.1951536 123.365357,12.5211874 126.72,9.35 C129.826994,6.42903229 133.430086,4.08566773 137.36,2.43 C141.193365,0.817719901 145.311388,-0.00860512086 149.47,-6.65225423e-05 C156.22544,0.114202644 162.861167,1.8022383 168.85,4.93 L169.96,5.49 L177.62,10.39 L167.18,31.45 L166,30.78 C164.64119,30.0425564 163.192425,29.4845638 161.69,29.12 C160.171249,28.700507 158.605416,28.4753765 157.03,28.45 C152.24,28.45 149.03,31.86 147.35,38.87 C147.25,39.24 147.14,39.62 147.04,40 L155.45,40 L163.11,44.9 C161.27,52.0333333 159.433333,59.1633333 157.6,66.29 L140.35,66.29 C135.583333,84.9566667 130.81,103.606667 126.03,122.24 L99.19,122.24 Z'
                    id='Path'
                    fill='#16152D'
                    fillRule='nonzero'
                  ></path>
                  <path
                    d='M85,34.81 L92.66,39.72 C94.0671993,40.6015991 95.3009124,41.7336325 96.3,43.06 C97.7184126,44.9786778 98.6826523,47.1943773 99.12,49.54 C99.5939443,51.9966195 99.7752073,54.5007342 99.66,57 C99.5580665,59.1092129 99.3242766,61.2099827 98.96,63.29 C98.61,65.34 98.17,67.38 97.67,69.36 C93.1633333,87.0666667 88.65,104.776667 84.13,122.49 L57.29,122.49 L49.63,117.59 L61.8,70.27 C62.2669567,68.3267518 62.5581305,66.3454316 62.67,64.35 C62.714307,63.4528484 62.6909073,62.553633 62.6,61.66 C60.0091157,62.3637491 57.5804165,63.56621 55.45,65.2 C51.8532814,67.7979726 48.8586435,71.140507 46.67,75 L34.49,122.49 L7.66,122.49 L0,117.59 C6.62,91.8033333 13.2433333,66.02 19.87,40.24 L44.27,40.24 L46.15,41.45 C48.8060239,39.3252862 51.7066204,37.525842 54.79,36.09 C60.7532502,33.3726538 67.236948,31.98719 73.79,32.03 C76.9453668,31.9038569 80.0898062,32.4740213 83,33.7 C83.7493544,34.0370389 84.4715094,34.4315494 85.16,34.88'
                    id='Path'
                    fill='#16152D'
                    fillRule='nonzero'
                  ></path>
                  <path
                    d='M214.5,193.86 C166.391495,207.726037 115.264774,207.117386 67.5,192.11 L57.5,223.91 C111.505246,240.881422 169.312016,241.577009 223.71,225.91 C220.656667,215.23 217.586667,204.546667 214.5,193.86 Z'
                    id='Path'
                    fill='#FFFFFF'
                    fillRule='nonzero'
                  ></path>
                  <path
                    d='M158.48,23 L166.48,6.81 C161.131605,4.18303665 155.267994,2.77262814 149.31,2.67989735 C145.494493,2.66974386 141.716013,3.42816066 138.2,4.91 C134.568044,6.44034449 131.238989,8.60778632 128.37,11.31 C125.220541,14.2744456 122.557886,17.7166613 120.48,21.51 C118.142753,25.7391458 116.383716,30.2628644 115.25,34.96 L113.25,42.67 L103.8,42.67 L99.63,58.75 L109.16,58.75 L94.82,114.75 L116.42,114.75 C121.2,96.0833333 125.976667,77.4166667 130.75,58.75 L148,58.75 L152.17,42.62 L134.75,42.62 L137.21,33.42 C139.21,25.14 143.39,20.92 149.51,20.92 C151.295011,20.9408403 153.069793,21.19294 154.79,21.67 C156.054567,22.0108325 157.288775,22.4556825 158.48,23 Z'
                    id='Path'
                    fill='#D82790'
                    fillRule='nonzero'
                  ></path>
                  <path
                    d='M88.77,58.06 C89.1115817,56.0752504 89.3319896,54.0715425 89.43,52.06 C89.5535356,49.7909551 89.4092067,47.5152574 89,45.28 C88.6382123,43.3074443 87.8310557,41.4434598 86.64,39.83 C85.3809847,38.2026133 83.7341357,36.9167646 81.85,36.09 C79.2778122,35.0336139 76.5085877,34.5425199 73.73,34.65 C67.5223853,34.5976937 61.3785739,35.9049602 55.73,38.48 C50.3000692,40.9913354 45.5126048,44.7050399 41.73,49.34 C40.51,50.83 39.3,52.34 38.08,53.8 C39.06,50.16 40.0333333,46.5166667 41,42.87 L21.82,42.87 C15.64,66.9033333 9.46333333,90.9466667 3.29,115 L24.88,115 C28.7866667,99.74 32.7,84.4766667 36.62,69.21 C39.0348158,64.8742277 42.369544,61.1196719 46.39,58.21 C50.39,55.37 54.01,53.93 57.19,53.93 C59.511919,53.8223858 61.7579226,54.7707801 63.3,56.51 C64.75,58.21 65.4,60.85 65.22,64.39 C65.1121975,66.5643339 64.8008358,68.7237779 64.29,70.84 C60.5033333,85.5333333 56.7166667,100.253333 52.93,115 L74.52,115 C78.86,97.9933333 83.1933333,80.9933333 87.52,64 C88,62 88.43,60 88.77,58.06 Z'
                    id='Path'
                    fill='#DB1F26'
                    fillRule='nonzero'
                  ></path>
                  <rect
                    id='Rectangle'
                    fill='#FFFFFF'
                    fillRule='nonzero'
                    x='239.33'
                    y='141.29'
                    width='33.09'
                    height='33.33'
                  ></rect>
                  <rect
                    id='Rectangle'
                    fill='#FFFFFF'
                    fillRule='nonzero'
                    x='7.29'
                    y='141.29'
                    width='33.09'
                    height='33.33'
                  ></rect>
                  <path
                    d='M286.39,5.47 C290.671854,7.39833519 294.701776,9.84315414 298.39,12.75 L286,29.2 C283.854785,26.9292371 281.355718,25.0211662 278.6,23.55 C275.467235,21.8406932 271.958706,20.936929 268.39,20.92 C264.860361,20.8342636 261.438164,22.1377868 258.86,24.55 C256.31531,26.9519057 254.513916,30.0340608 253.67,33.43 L251.21,42.62 L293.45,42.62 L275,114.71 L253.4,114.71 L267.62,58.71 L247.25,58.71 L233.03,114.71 L211.44,114.71 L225.66,58.71 L216.13,58.71 L220.3,42.58 L229.84,42.58 C230.48,40.02 231.13,37.45 231.78,34.89 C234.143429,25.8252937 239.283489,17.7270767 246.48,11.73 C253.664443,5.81215802 262.69217,2.59302355 272,2.63 C276.942847,2.55600926 281.845882,3.52366867 286.39,5.47 Z'
                    id='Path'
                    fill='#00A3D0'
                    fillRule='nonzero'
                  ></path>
                  <path
                    d='M188.73,96.32 C187.058884,96.4146014 185.409185,95.9072746 184.08,94.89 C182.772436,93.645637 182.143494,91.8481266 182.39,90.06 C182.406099,89.5836971 182.456227,89.1091543 182.54,88.64 C182.61,88.22 182.72,87.73 182.86,87.16 L190,58.82 L205.28,58.82 C206.693333,53.44 208.096667,48.0633333 209.49,42.69 L194.19,42.69 C197.003333,31.8433333 199.81,20.9933333 202.61,10.14 L181,10.14 C178.186667,20.9866667 175.38,31.8366667 172.58,42.69 L163.19,42.69 C161.736667,48.07 160.293333,53.4466667 158.86,58.82 L168.36,58.82 L158.88,96.22 C158.397677,98.214784 158.103059,100.250322 158,102.3 C157.75,107.46 159,110.99 161.92,113.07 C164.84,115.15 168.92,116.34 173.75,116.34 C178.010247,116.31757 182.250555,115.756452 186.37,114.67 C190.187513,113.700816 193.925126,112.440458 197.55,110.9 C197.823333,105.266667 198.096667,99.63 198.37,93.99 C197.08,94.48 195.73,94.93 194.37,95.34 C192.547363,95.9380088 190.647532,96.2681213 188.73,96.32 Z'
                    id='Path'
                    fill='#7d5fd7'
                    fillRule='nonzero'
                  ></path>
                </g>
              </g>
            </svg>
          </Link>
        </div>
        <nav className='menu hidden md:flex items-center gap-x-10 w-fit'>
          <div className='lend w-32 text-center relative'>
            <Link
              className='link lend peer h-full inline-flex py-4 w-full text-center justify-center border-b-4 text-secondary border-secondary'
              to='/app/lend/assets'
            >
              Lend
            </Link>
            <div className='sub-links shadow-xl flex flex-col absolute top-16 w-full gap-y-1 transition-all duration-1000 ease-in-out bg-secondary left-0 h-0 peer-hover:h-auto hover:h-auto  overflow-hidden'>
              <Link
                className=' py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/lend/assets'
              >
                Collateral
              </Link>
              <Link
                className=' py-2 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out'
                to='/app/lend/loans'
              >
                Loans
              </Link>
              <Link
                className=' py-2 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out'
                to='/app/lend/offers'
              >
                Offers
              </Link>
              <Link
                className=' py-2 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out'
                to='/app/collections'
              >
                Collection offers
              </Link>
              <Link
                className=' py-2 pb-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out'
                to='/app/assets/private-offer'
              >
                Private offers
              </Link>
            </div>
          </div>
          <div className='borrow w-32 text-center relative'>
            <Link
              className='link borrow peer h-full inline-flex py-4 w-full text-center justify-center border-b-4 border-primary  !text-primary font-bold text-shadow-md'
              to='/app/borrow/assets'
            >
              Borrow
            </Link>
            <div className='sub-links shadow-xl flex flex-col absolute top-16 w-full gap-y-1 transition-all duration-1000 ease-in-out bg-primary left-0 h-0 peer-hover:h-auto hover:h-auto  overflow-hidden '>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/borrow/assets'
              >
                Assets
              </Link>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/borrow/loans'
              >
                Loans
              </Link>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/borrow/offers'
              >
                Offers
              </Link>
              <Link
                className='selected py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold pb-4'
                to='/app/borrow/bundles'
              >
                Bundles
              </Link>
            </div>
          </div>
          <div className='borrow w-32 text-center relative'>
            <Link
              className='link stats peer h-full inline-flex py-4 w-full text-center justify-center border-b-4 border-tealy  !text-tealy font-bold text-shadow-md'
              to='/app/stats'
            >
              Stats
            </Link>
            <div className='sub-links shadow-xl flex flex-col absolute top-16 w-full gap-y-1 transition-all duration-1000 ease-in-out bg-tealy left-0 h-0 peer-hover:h-auto hover:h-auto  overflow-hidden '>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/blog'
              >
                Blog
              </Link>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/faq'
              >
                FAQ
              </Link>
              <Link
                className='py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold '
                to='/app/stats'
              >
                Stats
              </Link>
              <Link
                className='selected py-2 pt-4 hover:scale-y-125 font-normal font-Roboto transition duration-200 ease-in-out hover:font-bold pb-4'
                to='/app/ambassadors'
              >
                Ambassadors
              </Link>
            </div>
          </div>

          <div className='help hidden'>
            <a className='link help' target='_blank' rel='noreferrer' to='https://discord.gg/nftfi'>
              Help
            </a>
          </div>
          <div className='wallet-not-connected px-14 py-2 rounded-full border-2 hover:bg-black hover:font-bold'>
            <button className='btn uppercase'>Connect</button>
          </div>
        </nav>
        <div className='hamburger flex md:hidden '>
          <svg width='27px' height='27px' viewBox='0 0 27 27' xmlns='http://www.w3.org/2000/svg'>
            <title>Group 15</title>
            <g id='Mobile' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g transform='translate(-277.000000, -16.000000)' fill='#FFFFFF' id='Group'>
                <g transform='translate(16.000000, 16.000000)'>
                  <g id='Group-15' transform='translate(261.000000, 0.000000)'>
                    <rect id='Rectangle' x='15' y='0' width='12' height='12' rx='3'></rect>
                    <rect id='Rectangle-Copy-2' x='15' y='15' width='12' height='12' rx='3'></rect>
                    <rect id='Rectangle-Copy' x='0' y='0' width='12' height='12' rx='3'></rect>
                    <rect id='Rectangle-Copy-3' x='0' y='15' width='12' height='12' rx='3'></rect>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* <div className='close-hamburger '>
          <svg width='25px' height='25px' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'>
            <title>Fill 1</title>
            <g id='Mobile' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='Menu-open' transform='translate(-279.000000, -16.000000)' fill='#FFFFFF'>
                <polygon
                  id='Fill-1'
                  points='303.991995 20.0684592 299.926169 16.002 291.492994 24.4354153 283.057819 16 278.991995 20.0664592 287.427168 28.5018745 278.991995 36.9335399 283.057819 41 291.492994 32.5665837 299.926169 40.99825 303.991995 36.9337899 295.558819 28.5021245'
                ></polygon>
              </g>
            </g>
          </svg>
        </div> */}
      </nav>
    </header>
  )
}

export default AppNavbar
