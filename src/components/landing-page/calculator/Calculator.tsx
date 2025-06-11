"use client"

import React, { useState, useEffect, useActionState, startTransition, useCallback } from "react";
import cx from 'classnames';
import { fetchRate, FetchRateResponse } from "@/lib/fetchRate";
import { exchange, ExchangeResponse } from "@/lib/exchange";
import { validateValue } from "@/helpers/validators";
import styles from './calculator.module.css';
import SwitchButton from "./components/SwitchButton";
import Rate from "./components/Rate";
import CalculatorInput from "./components/CalculatorInput";

export default function Calculator() {
  const [exchangeSuccess, setExchangeSuccess] = useState(false);
  const [lockedField, setLockedField] = useState('');
  const [usd, setUsd] = useState("");
  const [btc, setBtc] = useState("");
  const [rate, setRate] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const [isBuying, setIsBuying] = useState(true);
  const [exchangeState, exchangeAction, exchangePending] = useActionState(exchange, { error: false, exchanged: false } as ExchangeResponse);

  const setUsdValue = useCallback((value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setUsd((num * rate).toFixed(2));
    } else {
      setUsd("");
    }
  }, [rate]);

  const setBtcValue = useCallback((value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setBtc((num / rate).toFixed(8));
    } else {
      setBtc("");
    }
  }, [rate]);

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = validateValue(e.target.value);
    setUsd(value);
    setLockedField('usd');
    setBtcValue(value);
  };

  const handleBtcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = validateValue(e.target.value);
    setBtc(value);
    setLockedField('btc');
    setUsdValue(value);
  };

  const toggleMode = () => {
    setIsBuying(!isBuying);
    setUsd('');
    setBtc('');
  };

  const fetchRateTask = () => {
    fetchRate().then((data: FetchRateResponse) => {
      setRate(data.rate);
      setCountdown(10);
    });
  }

  const handleTransaction = () => {
    startTransition(() => {
      exchangeAction();
    })
  }

  const getExchangeButtonText = () => {
    switch (true) {
      case exchangePending:
        return 'Processing...';
      case exchangeSuccess:
        return 'Success!';
      default:
        return isBuying ? 'Buy' : 'Sell';
    }
  }
  
  useEffect(() => {
    const rateInterval = setInterval(fetchRateTask, 10000);
    fetchRateTask();
    return () => {
      clearInterval(rateInterval);
    }; 
  }, []);

  useEffect(() => {
    if (lockedField === 'usd') {
      setBtcValue(usd);
    } else if (lockedField === 'btc') {
      setUsdValue(btc);
    }
  }, [rate, lockedField, usd, btc, setBtcValue, setUsdValue]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  useEffect(() => {
    if (exchangeState.exchanged) {
      setExchangeSuccess(true);
      const timeout = setTimeout(() => {
        setExchangeSuccess(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      }
    }
  }, [exchangeState.exchanged]);

  return (
    <section className={`${styles.container} p-4 bg-gradient-to-r from-gray-900 to-gray-800 py-12 bg-gray-50`}>
      <div className="container mx-auto max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-center">
            {isBuying ? 'Buy BTC' : 'Sell BTC'}
          </h2>
          <SwitchButton toggleMode={toggleMode} isBuying={isBuying} />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">
            {isBuying ? 'Amount in USD' : 'Amount in BTC'}
          </label>
          <CalculatorInput value={isBuying ? usd : btc} isBuying={isBuying} onChange={isBuying ? handleUsdChange : handleBtcChange} />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-gray-700">
            {isBuying ? 'You will receive BTC' : 'You will receive USD'}
          </label>
          <CalculatorInput value={isBuying ? btc : usd} isBuying={isBuying} onChange={isBuying ? handleBtcChange : handleUsdChange} />
        </div>
        <Rate rate={rate} countdown={countdown} />
        <button
          disabled={exchangePending || !usd || !btc}
          onClick={handleTransaction}
          className={cx(styles.transactionButton, {
            'pending': exchangePending,
            'success': exchangeSuccess,
            'bg-green-500 hover:bg-green-600': exchangeSuccess,
            'bg-blue-500 hover:bg-blue-600 w-full mt-4 text-white py-2 px-4 rounded-lg transition-colors': true
          })}
        >
          {getExchangeButtonText()}
        </button>
      </div>
    </section>
  );
}
