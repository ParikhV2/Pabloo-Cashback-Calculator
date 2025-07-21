import React, { useState } from 'react';

export default function CashbackCalculator() {
  const [spend, setSpend] = useState(5000); // Annual spend in dollars
  const [rate, setRate] = useState(3);      // Cashback rate in %
  const [mode, setMode] = useState('percentage'); // 'percentage' or 'static'
  const [staticAmount, setStaticAmount] = useState(5); // $ back per $100

  const cashback = mode === 'percentage'
    ? ((spend * rate) / 100).toFixed(0)
    : ((spend / 100) * staticAmount).toFixed(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-zinc-900 p-6">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl max-w-md w-full text-white">
        <h2 className="text-xl text-center mb-6 font-semibold">
          Estimate your annual cashback:
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${mode === 'percentage' ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-white border-zinc-700'}`}
            onClick={() => setMode('percentage')}
          >
            % of Spend
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${mode === 'static' ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-white border-zinc-700'}`}
            onClick={() => setMode('static')}
          >
            Static Amount
          </button>
        </div>

        <div className="mb-8">
          <label className="block text-center text-lg font-medium mb-2">
            Total Annual Spend
          </label>
          <div className="text-center mb-2 text-sm text-white/80">
            ${Number(spend).toLocaleString()}
          </div>
          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            className="w-full accent-amber-300"
          />
        </div>

        {mode === 'percentage' ? (
          <div className="mb-8">
            <label className="block text-center text-lg font-medium mb-2">
              Cashback Rate (%)
            </label>
            <div className="text-center mb-2 text-sm text-white/80">
              {rate}%
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-amber-300"
            />
          </div>
        ) : (
          <div className="mb-8">
            <label className="block text-center text-lg font-medium mb-2">
              Cashback per $100 Spent ($)
            </label>
            <div className="text-center mb-2 text-sm text-white/80">
              ${staticAmount}
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={staticAmount}
              onChange={(e) => setStaticAmount(Number(e.target.value))}
              className="w-full accent-amber-300"
            />
          </div>
        )}

        <div className="text-center text-sm text-white/60 mb-2">
          Your potential cashback
        </div>

        <div className="flex items-center justify-between">
          <div className="bg-zinc-800 px-6 py-3 rounded-xl text-2xl font-bold text-white">
            ${Number(cashback).toLocaleString()}
          </div>
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-medium">
            Start earning →
          </button>
        </div>
      </div>
    </div>
  );
}