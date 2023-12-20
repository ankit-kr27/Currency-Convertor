function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    isAmountDisabled=false,
    className=""
}) {
  return (
    <div className={`${className} bg-white p-3 rounded-lg text-sm flex`}>
      <div className='w-1/2'>
        <label htmlFor="" className="text-black/40 mb-2 inline-block">{label}</label>
        <input 
            className="outline-none w-full bg-transparent py-1.5"
            type="number"  
            name="" 
            id="" 
            disabled={isAmountDisabled}
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}   // Just a good standard practice for safety check
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label htmlFor="" className="text-black/40 mb-2 inline-block">Currency Type</label>
        <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e)=>{
                return onCurrencyChange && onCurrencyChange(e.target.value)
            }}
        >
            {
                currencyOptions.map((curr, idx)=>{
                    return <option value={curr} key={idx}>{curr}</option>
                })
            }
        </select>
      </div>
    </div>
  )
}

export default InputBox
