import { useState } from 'react'
import {InputBox} from './components'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)
  const CurrencyInfo = UseCurrencyInfo(from)
  const options = Object.keys(CurrencyInfo || {})

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = ()=>{
    setConvertedAmount(amount * (CurrencyInfo?.[to] || 0))
  }


  return (
    <>
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{
      backgroundImage : `url('https://images.pexels.com/photos/34908249/pexels-photo-34908249.jpeg')` 
    }}>
      <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-6'>
        <img
          className='w-full md:w-1/2 max-w-md mx-auto rounded-lg  object-cover h-60 md:h-70 shadow-md'
          src="https://images.pexels.com/photos/8549590/pexels-photo-8549590.jpeg"
          alt="currency"
        />
        <div className='w-full md:w-1/2 max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm border-y-orange-400 border-x-red-400 bg-white/10'>
            <form action=""
              onSubmit={(e)=>{
                e.preventDefault()
                convert()
              }}
            >
              <div className='w-full mb-1 '>
                <InputBox label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(val)=> setAmount(val)}
                onCurrencyChange={(currency)=> setFrom(currency) }
                selectCurrency={from}
                />
               
              </div>
              <div className='relative w-full h-0.5'>
                <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600  text-white px-2 py-0.5 ' onClick={swap}
                 >Swap</button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox
                  label={to}
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=> setTo(currency)}
                  selectCurrency={to}
                  amountDisable={true}
                />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
