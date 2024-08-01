import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './Hooks/useCurrencyInfo';
import 'boxicons/css/boxicons.min.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const { data: conversionRate, currencies, loading } = useCurrencyInfo(from, to);

  const convert = () => {
    if (conversionRate && amount) {
      return amount * conversionRate;
    }
    return 0;
  };

  const reset = () => {
    setAmount(0);
    setFrom('USD');
    setTo('INR');
  };

  const currencyOptions = Object.keys(currencies);

  return (
    <div>
      <div className='icon-container'>
        <i className='bx bx-dollar-circle icon-rotate'></i>
      </div>
      <h1 className='text-3xl font-bold text-blue-700 mb-5'>Savitha's Currency Converter</h1>
      <div className='max-w-md mx-auto'>
        <div className='moving-line mb-3'>
          <p>Exchange rates are updated on daily basis to reflect the latest market data.</p>
        </div>
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
          currencyOptions={currencyOptions}
          selectedCurrency={from}
          placeholder='Enter Amount'
        />
        <button
          className='bg-blue-100 text-blue-700 p-2 rounded -mt-4 focus:outline-none focus:ring-2 focus:ring-blue-200'
          onClick={() => {
            const temp = from;
            setFrom(to);
            setTo(temp);
          }}
        >
          <i className='bx bx-sort'></i> Swap
        </button>
        <InputBox
          label="To"
          amount={convert()}
          amountdisabled={true}
          onCurrencyChange={(currency) => setTo(currency)}
          currencyOptions={currencyOptions}
          selectedCurrency={to}
          className="text-blue-700 font-semibold"
          parentclassname="-mt-3"
          placeholder={amount}
        />
        <div className='flex justify-end mt-2'>
          <button
            className='bg-red-200 text-red-500 font-normal px-2 p-1 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-red-300'
            onClick={() => reset()}
          >
            <i className='bx bx-revision'></i> Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
