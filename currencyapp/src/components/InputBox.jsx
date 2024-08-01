import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  amountdisabled = false,
  onAmountChange,
  selectedCurrency = 'usd',
  currencyOptions = [],
  onCurrencyChange,
  className = "",
  parentclassname = "",
  placeholder = ''
}) {
  const id = useId();
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      const sanitizedValue = value.replace(/^0+(?!$)/, '');
      onAmountChange && onAmountChange(sanitizedValue ? Number(sanitizedValue) : 0);
    } else {
      onAmountChange && onAmountChange(0);
    }
  };

  return (
    <div className={`max-w-md mx-auto bg-white border border-blue-700 p-3 px-5 pb-4 rounded-lg flex gap-20 ${parentclassname} `}>
      <div className='text-left'>
        <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input
          className={`w-full border p-2 rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-700 ${className}`}
          id={id}
          type='text'
          value={amount === 0 ? '' : amount}
          disabled={amountdisabled}
          placeholder={placeholder}
          min="0"
          onChange={handleAmountChange}
        />
      </div>
      <div className='text-left'>
        <label className='text-black/40 mb-2 inline-block'>Currency Type</label>
        <select
          className='w-full border p-2 rounded-sm bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-700'
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
