import { useState, useEffect } from 'react';

function useCurrencyInfo(from, to) {
  const [data, setData] = useState({});
  const [currencies, setCurrencies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch('https://api.frankfurter.app/currencies');
        const result = await response.json();
        setCurrencies(result);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchConversionRate = async () => {
      if (from && to) {
        try {
          const response = await fetch(`https://api.frankfurter.app/latest?amount=1&from=${from.toUpperCase()}&to=${to.toUpperCase()}`);
          const result = await response.json();
          setData(result.rates);
        } catch (error) {
          console.error('Error fetching conversion rate:', error);
        }
      }
    };

    fetchConversionRate();
  }, [from, to]);
  useEffect(() => {
    if (Object.keys(currencies).length > 0 && Object.keys(data).length > 0) {
      setLoading(false);
    }
  }, [currencies, data]);

  return {
    data: data[to.toUpperCase()],
    currencies,
    loading
  };
}

export default useCurrencyInfo;
