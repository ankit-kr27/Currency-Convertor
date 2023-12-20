import { useId } from "react"
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

    const id1 = useId();
    const id2 = useId();

  return (
    <div className={`${className} bg-white p-3 rounded-lg text-sm flex`}>
      <div className='w-1/2'>
        <label htmlFor={id1} className="text-black/40 mb-2 inline-block">{label}</label>
        <input 
            className="outline-none w-full bg-transparent py-1.5"
            type="number"  
            name="" 
            id={id1} 
            disabled={isAmountDisabled}
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}   // Just a good standard practice for safety check
            placeholder="0"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
            className="rounded-lg px-1 py-0.5 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e)=>{
                return onCurrencyChange && onCurrencyChange(e.target.value)
            }}
            id={id2}
        >
            {
                currencyOptions.map((curr)=>(
                    <option value={curr} key={curr}>{curr}</option>
                ))
            }
        </select>
      </div>
    </div>
  )
}

export default InputBox
