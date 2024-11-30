import useCounter from "../hooks/useCounter"

export default function Counter() {
    const{count, handlerClickPlus, handlerClickLess} = useCounter();
    return (
    <>
        <h3 className="text-2xl">Counter <small className="font-bold">{count}</small></h3>
        <div>
            <button onClick={()=>handlerClickPlus()} className="p-2 bg-blue-600 rounded-xl mx-2 text-white hover:bg-red-900 ">+1</button>
            <button onClick={()=>handlerClickLess()} className="p-2 bg-blue-600 rounded-xl mx-2 text-white hover:bg-red-900 ">-1</button>
        </div>
    </>

  )
}
