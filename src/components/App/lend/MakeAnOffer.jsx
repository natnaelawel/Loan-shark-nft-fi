import clsx from 'clsx'
import React, { useState } from 'react'
import './makeanoffer.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Select from 'react-select'
import PropTypes from 'prop-types'

const LoanCurrencyOption = (props) => {
  return (
    <div className='bg-[#76154e] border-navy_medium border py-0.5 text-sm px-2 flex justify-center flex-col gap-y-2'>
      <div
        onClick={() => {
          props.setSelectedIndex((prev) => (prev === 0 ? null : 0))
        }}
        className='flex justify-between items-center cursor-pointer transition duration-300 ease-in-out'
      >
        <span>
          The loan must be in <b>wETH</b>
        </span>
        <MdOutlineKeyboardArrowDown
          size={24}
          className={clsx(
            'transition duration-300 ease-in-out',
            props.selectedIndex === 0 ? 'rotate-180' : 'rotate-0',
          )}
        />
      </div>
      <div
        className={clsx(
          'h-0 overflow-hidden transition duration-300 ease-in-out',
          props.selectedIndex === 0 && 'h-auto',
        )}
      >
        <div className='collapse-content bg-[#2a2841] p-2 text-xs'>
          <div className='content'>
            <div className='form flex flex-col gap-y-1 '>
              <div className='question'>In which currency are you willing to accept loans?</div>
              <div className='radio-buttons flex items-center px-2 gap-x-5'>
                <label className='accent-color radio-button flex items-center gap-x-1'>
                  <input
                    type='radio'
                    className='accent-[#76154e] bg-[#2a2841] text-navy_medium'
                    name='currency'
                    data-currency='wETH'
                  />
                  <span>wETH</span>
                </label>
                <label className='accent-color radio-button flex items-center gap-x-1'>
                  <input
                    type='radio'
                    className='accent-[#76154e]'
                    name='currency'
                    data-currency='DAI'
                  />
                  <span>DAI</span>
                </label>
                <label className='accent-color radio-button flex items-center gap-x-1'>
                  <input
                    type='radio'
                    className='accent-[#76154e]'
                    name='currency'
                    data-currency='USDC'
                  />
                  <span>USDC</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
LoanCurrencyOption.propTypes = {
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
}

const LoanAmountOption = (props) => {
  const [amount, setAmount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-[#76154e] border-navy_medium border py-0.5 text-sm px-2 flex justify-center flex-col gap-y-2'>
      <div
        onClick={() => {
          props.setSelectedIndex((prev) => (prev === 1 ? null : 1))
        }}
        className='flex justify-between items-center cursor-pointer transition duration-300 ease-in-out'
      >
        <div>
          <span>Amount: 0.00 USDC</span>
        </div>
        <MdOutlineKeyboardArrowDown
          size={24}
          className={clsx(
            'transition duration-300 ease-in-out',
            props.selectedIndex === 1 ? 'rotate-180' : 'rotate-0',
          )}
        />
      </div>
      <div
        className={clsx(
          'h-0 overflow-hidden transition duration-300 ease-in-out',
          props.selectedIndex === 1 && 'h-auto',
        )}
      >
        <div className='collapse-content bg-[#2a2841] p-2 text-xs'>
          <div className='content'>
            <div className='form'>
              <div className='question'>What loan amount you are willing to accept?</div>
              <div className='accent-color  amount-field relative h-8'>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='currency-icon absolute top-1/2 -translate-y-1/2 left-1'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.33337 1.625C13.683 1.625 17.2084 5.15107 17.2084 9.5C17.2084 13.8496 13.683 17.375 9.33337 17.375C4.98444 17.375 1.45837 13.8493 1.45837 9.5C1.45837 5.15107 4.98444 1.625 9.33337 1.625ZM4.7704 12.5L3.33337 7.25H4.25372L5.36782 11.4546H5.40819L6.62724 7.25H7.57988L8.81507 11.4546H8.86351L9.9211 7.25H10.8334L9.39634 12.5H8.28224L7.10356 8.52435H7.07126L5.8845 12.5H4.7704ZM14.5834 7.25H11.5834V8H14.5834V7.25ZM12.3334 9.5H13.8334V10.25H12.3334V9.5ZM14.5834 11.75H11.5834V12.5H14.5834V11.75Z'
                    fill='#CBC9E4'
                  ></path>
                </svg>
                <input
                  className='w-full h-full bg-black border border-yellow-500 px-5 pl-8 placeholder-white text-white'
                  aria-label='wETH'
                  type='text'
                  inputMode='decimal'
                  maxLength='8'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <svg
                  width='18px'
                  height='18px'
                  viewBox='0 0 18 18'
                  xmlns='http://www.w3.org/2000/svg'
                  className='cancel-icon link-color absolute top-1/2 -translate-y-1/2 right-3 text-secondary'
                  onClick={() => setAmount(0)}
                >
                  <path
                    fill='currentColor'
                    d='M9,0 C4.03647429,0 0,4.03713 0,9 C0,13.9628571 4.03713,18 9,18 C13.9628571,18 18,13.9628571 18,9 C18,4.03713 13.9628571,0 9,0 Z M9,16.1994857 C5.03026714,16.1994857 1.80051429,12.9697714 1.80051429,9 C1.80051429,5.03026714 5.03026714,1.80051429 9,1.80051429 C12.9697714,1.80051429 16.1994857,5.03026714 16.1994857,9 C16.1994857,12.9697714 12.9697714,16.1994857 9,16.1994857 Z M13.2363,6.03592714 L10.2722014,9 L13.2363,11.9640857 L11.9639571,13.2364286 L8.99987143,10.27233 L6.03579857,13.2364286 L4.76346857,11.9640857 L7.72668,9 L4.76260714,6.03592714 L6.03493714,4.76359714 L8.99987143,7.72767 L11.9639571,4.76359714 L13.2363,6.03592714 Z'
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LoanAmountOption.propTypes = {
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
}

const LoanDurationOption = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const options = [
    { value: '7Days', label: '7Days', color: '#000', backgroundColor: 'black' },
    { value: '14Days', label: '14Days', color: '#000', backgroundColor: 'black' },
    { value: '30Days', label: '30Days', color: '#000', backgroundColor: 'black' },
    { value: '60Days', label: '60Days', color: '#000', backgroundColor: 'black' },
    { value: '90Days', label: '90Days', color: '#000', backgroundColor: 'black' },
  ]

  return (
    <div className='bg-[#76154e] border-navy_medium border py-0.5 text-sm px-2 flex justify-center flex-col gap-y-2'>
      <div
        onClick={() => {
          props.setSelectedIndex((prev) => (prev === 2 ? null : 2))
        }}
        className='flex justify-between items-center cursor-pointer transition duration-300 ease-in-out'
      >
        <div>
          <span>Loan duration: 0.00 USDC</span>
        </div>
        <MdOutlineKeyboardArrowDown
          size={24}
          className={clsx(
            'transition duration-300 ease-in-out',
            props.selectedIndex === 2 ? 'rotate-180' : 'rotate-0',
          )}
        />
      </div>
      <div
        className={clsx(
          'transition duration-300 ease-in-out h-full',
          props.selectedIndex !== 2 ? 'hidden' : 'w-full h-max flex',
        )}
      >
        <div className='collapse-content bg-[#2a2841] p-2 text-xs w-full h-max py-5'>
          <div className='content'>
            <div className='form flex flex-col gap-y-2'>
              <div className='question'>Would you like to specify a duration for the loan?</div>
              <div className='inline '>
                <Select
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'hotpink',
                      primary: 'black',
                    },
                  })}
                  // classNames={{
                  //   control: (state) =>
                  //     state.isFocused
                  //       ? '!appearance-none bg-navy_medium h-5 text-secondary'
                  //       : '!bg-navy_medium !text-secondary',
                  // }}
                  // className=''
                  // styles={{
                  //   control: (baseStyles, state) => ({
                  //     ...baseStyles,
                  //     borderColor: state.isFocused ? 'grey' : 'red',
                  //   }),
                  // }}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LoanDurationOption.propTypes = {
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
}

const SetAPROption = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState()
  const [finalRepayment, setFinalRepayment] = useState()
  const [aprAmount, setAprAmount] = useState()
  return (
    <div className='bg-[#76154e] border-navy_medium border py-0.5 text-sm px-2 flex justify-center flex-col gap-y-2'>
      <div
        onClick={() => {
          props.setSelectedIndex((prev) => (prev === 3 ? null : 3))
        }}
        className='flex justify-between items-center cursor-pointer transition duration-300 ease-in-out'
      >
        <div>
          <span>Loan duration: 0.00 USDC</span>
        </div>
        <MdOutlineKeyboardArrowDown
          size={24}
          className={clsx(
            'transition duration-300 ease-in-out',
            props.selectedIndex === 3 ? 'rotate-180' : 'rotate-0',
          )}
        />
      </div>
      <div
        className={clsx(
          'h-0 overflow-hidden transition duration-300 ease-in-out',
          props.selectedIndex === 3 && 'h-auto',
        )}
      >
        <div className='collapse-content bg-[#2a2841] p-2 text-xs'>
          <div className='content'>
            <div className='form'>
              <div className='question'>Would you like to specify an APR for the loan?</div>
              <div className='inline-flex items-center gap-x-3'>
                <div className='flex items-center accent-color  amount-field relative h-8'>
                  <svg
                    width='19'
                    height='19'
                    viewBox='0 0 19 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='currency-icon absolute top-1/2 -translate-y-1/2 left-1'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9.33337 1.625C13.683 1.625 17.2084 5.15107 17.2084 9.5C17.2084 13.8496 13.683 17.375 9.33337 17.375C4.98444 17.375 1.45837 13.8493 1.45837 9.5C1.45837 5.15107 4.98444 1.625 9.33337 1.625ZM4.7704 12.5L3.33337 7.25H4.25372L5.36782 11.4546H5.40819L6.62724 7.25H7.57988L8.81507 11.4546H8.86351L9.9211 7.25H10.8334L9.39634 12.5H8.28224L7.10356 8.52435H7.07126L5.8845 12.5H4.7704ZM14.5834 7.25H11.5834V8H14.5834V7.25ZM12.3334 9.5H13.8334V10.25H12.3334V9.5ZM14.5834 11.75H11.5834V12.5H14.5834V11.75Z'
                      fill='#CBC9E4'
                    ></path>
                  </svg>
                  <input
                    style={{
                      direction: 'rtl',
                    }}
                    className='w-full h-full bg-black border border-yellow-500 px-5 pr-8 placeholder-white text-white '
                    aria-label='wETH'
                    placeholder='0'
                    type='text'
                    inputMode='decimal'
                    maxLength='8'
                    value={finalRepayment}
                    onChange={(e) => setFinalRepayment(e.target.value)}
                  />
                  <svg
                    width='18px'
                    height='18px'
                    viewBox='0 0 18 18'
                    xmlns='http://www.w3.org/2000/svg'
                    className='cancel-icon link-color absolute top-1/2 -translate-y-1/2 right-3 text-secondary'
                    onClick={() => setAmount(0)}
                  >
                    <path
                      fill='currentColor'
                      d='M9,0 C4.03647429,0 0,4.03713 0,9 C0,13.9628571 4.03713,18 9,18 C13.9628571,18 18,13.9628571 18,9 C18,4.03713 13.9628571,0 9,0 Z M9,16.1994857 C5.03026714,16.1994857 1.80051429,12.9697714 1.80051429,9 C1.80051429,5.03026714 5.03026714,1.80051429 9,1.80051429 C12.9697714,1.80051429 16.1994857,5.03026714 16.1994857,9 C16.1994857,12.9697714 12.9697714,16.1994857 9,16.1994857 Z M13.2363,6.03592714 L10.2722014,9 L13.2363,11.9640857 L11.9639571,13.2364286 L8.99987143,10.27233 L6.03579857,13.2364286 L4.76346857,11.9640857 L7.72668,9 L4.76260714,6.03592714 L6.03493714,4.76359714 L8.99987143,7.72767 L11.9639571,4.76359714 L13.2363,6.03592714 Z'
                    ></path>
                  </svg>
                </div>
                <div className='accent-color apr-amount  amount-field py-2'>
                  <div className='accent-color  amount-field relative h-8'>
                    <div className='currency-icon absolute top-1/2 -translate-y-1/2 right-3 !text-secondary'>
                      &nbsp;%
                    </div>
                    <input
                      style={{
                        direction: 'rtl',
                      }}
                      className='w-full h-full bg-black border border-yellow-500 px-5 pr-8 placeholder-white text-white'
                      aria-label='wETH'
                      placeholder='0'
                      type='text'
                      inputMode='decimal'
                      maxLength='8'
                      value={aprAmount}
                      onChange={(e) => setAprAmount(e.target.value)}
                    />
                    <svg
                      width='18px'
                      height='18px'
                      viewBox='0 0 18 18'
                      xmlns='http://www.w3.org/2000/svg'
                      className='cancel-icon link-color absolute top-1/2 -translate-y-1/2 right-3 text-secondary'
                      onClick={() => setAmount(0)}
                    >
                      <path
                        fill='currentColor'
                        d='M9,0 C4.03647429,0 0,4.03713 0,9 C0,13.9628571 4.03713,18 9,18 C13.9628571,18 18,13.9628571 18,9 C18,4.03713 13.9628571,0 9,0 Z M9,16.1994857 C5.03026714,16.1994857 1.80051429,12.9697714 1.80051429,9 C1.80051429,5.03026714 5.03026714,1.80051429 9,1.80051429 C12.9697714,1.80051429 16.1994857,5.03026714 16.1994857,9 C16.1994857,12.9697714 12.9697714,16.1994857 9,16.1994857 Z M13.2363,6.03592714 L10.2722014,9 L13.2363,11.9640857 L11.9639571,13.2364286 L8.99987143,10.27233 L6.03579857,13.2364286 L4.76346857,11.9640857 L7.72668,9 L4.76260714,6.03592714 L6.03493714,4.76359714 L8.99987143,7.72767 L11.9639571,4.76359714 L13.2363,6.03592714 Z'
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
SetAPROption.propTypes = {
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
}
const OfferExpirationOption = (props) => {
  const options = [
    { value: '7Days', label: '7Days', color: '#000', backgroundColor: 'black' },
    { value: '14Days', label: '14Days', color: '#000', backgroundColor: 'black' },
    { value: '30Days', label: '30Days', color: '#000', backgroundColor: 'black' },
    { value: '60Days', label: '60Days', color: '#000', backgroundColor: 'black' },
    { value: '90Days', label: '90Days', color: '#000', backgroundColor: 'black' },
  ]

  return (
    <div className='bg-[#76154e] border-navy_medium border py-0.5 text-sm px-2 flex justify-center flex-col gap-y-2'>
      <div
        onClick={() => {
          props.setSelectedIndex((prev) => (prev === 4 ? null : 4))
        }}
        className='flex justify-between items-center cursor-pointer transition duration-300 ease-in-out'
      >
        <span>
          Offer expiration: <b>7 days</b>
        </span>
        <MdOutlineKeyboardArrowDown
          size={24}
          className={clsx(
            'transition duration-300 ease-in-out',
            props.selectedIndex === 4 ? 'rotate-180' : 'rotate-0',
          )}
        />
      </div>
      <div
        className={clsx(
          'w-full transition duration-300 ease-in-out',
          props.selectedIndex !== 4 ? 'hidden' : 'w-full h-max flex',
        )}
      >
        <div className='collapse-content bg-[#2a2841] p-2 text-xs w-full'>
          <div className='content'>
            <div className='form'>
              <div className='question'>
                Would you like to specify an expiration for this offer?
              </div>
              <div className='inline'>
                <div className='inline '>
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: 'hotpink',
                        primary: 'black',
                      },
                    })}
                    // classNames={{
                    //   control: (state) =>
                    //     state.isFocused
                    //       ? '!appearance-none bg-navy_medium h-5 text-secondary'
                    //       : '!bg-navy_medium !text-secondary',
                    // }}
                    // className=''
                    // styles={{
                    //   control: (baseStyles, state) => ({
                    //     ...baseStyles,
                    //     borderColor: state.isFocused ? 'grey' : 'red',
                    //   }),
                    // }}
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

OfferExpirationOption.propTypes = {
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
}

const MakeAnOffer = () => {
  const [selectedIndex, setSelectedIndex] = useState()
  const [stepNumber, setStepNumber] = useState(0)
  return (
    <div className='bg-[#5c113e] p-5'>
      {stepNumber === 0 ? (
        <div
          id='asset-make-offer-panel'
          className='asset-make-offer-panel lend panel make-offer flex flex-col h-full gap-y-3'
        >
          <div className='title font-semibold font-Lato'>Make offer</div>
          <div className='steps step-0 flex h-full'>
            <div className='step summary flex flex-col h-full flex-1 gap-y-2'>
              <div className='sub-title font-Roboto text-gray-300'>Desired Terms:</div>
              <div className='terms flex flex-col gap-y-2 flex-1 h-full'>
                <div className='term accent-color-background bg-[#76154e] py-1 px-3 rounded-full max-w-max'>
                  <span>
                    For <strong>6 wETH</strong>
                  </span>
                </div>
                <div className='term accent-color-background bg-[#76154e] py-1 px-3 rounded-full max-w-max'>
                  <span>
                    Over <strong>90 days</strong>
                  </span>
                </div>
                <div className='term accent-color-background bg-[#76154e] py-1 px-3 rounded-full max-w-max'>
                  Any APR
                </div>
              </div>
              <div className='buttons'>
                <button
                  onClick={() => setStepNumber(1)}
                  id='make-offer-button-1 '
                  className='btn w-full py-2 px-5 text-center bg-[#76154e] text-white font-Lato'
                >
                  Make offer
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='step flex flex-col h-full gap-y-2'>
          <div className='sub-title text-sm'>Set your loan offer terms</div>
          <div className='copy-terms'>
            <span className='toggle-switch'>
              <label className='switch'>
                <input id='toggle-switch-undefined' type='checkbox' />
                <span className='slider round'></span>
              </label>
              <label className='label' htmlFor='toggle-switch-undefined'>
                Set to borrower&apos;s desired terms
              </label>
            </span>
          </div>
          <div className='asset-terms-form h-full flex flex-col flex-1'>
            <div className='collapse-panels h-full flex-1'>
              <LoanCurrencyOption
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
              <LoanAmountOption selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
              <LoanDurationOption
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
              <SetAPROption selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
              <OfferExpirationOption
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </div>
            <div className='buttons w-full self-end flex items-center gap-x-2'>
              <button
                id='make-offer-button-cancel'
                onClick={() => setStepNumber(0)}
                className='btn btn-hollow step-back border border-secondary w-8 h-8 flex items-center'
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17.4367 8.10938H3.72337L11.9312 0.984375C12.0624 0.869531 11.9827 0.65625 11.8093 0.65625H9.73509C9.64368 0.65625 9.55696 0.689062 9.489 0.747656L0.631965 8.43281C0.550844 8.50313 0.485786 8.59006 0.441199 8.68772C0.396611 8.78537 0.373535 8.89147 0.373535 8.99883C0.373535 9.10618 0.396611 9.21228 0.441199 9.30994C0.485786 9.4076 0.550844 9.49453 0.631965 9.56484L9.54056 17.2969C9.57571 17.3273 9.6179 17.3438 9.66243 17.3438H11.807C11.9804 17.3438 12.0601 17.1281 11.9288 17.0156L3.72337 9.89062H17.4367C17.5398 9.89062 17.6242 9.80625 17.6242 9.70312V8.29688C17.6242 8.19375 17.5398 8.10938 17.4367 8.10938Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </button>
              <button
                id='make-offer-button-2'
                className='btn bg-secondary py-1.5 px-5 text-center w-full'
                // disabled
              >
                Make offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MakeAnOffer
