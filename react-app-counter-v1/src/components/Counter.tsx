
export default function Counter() {
  return (
    <>
        <h3 className="text-2xl">Counter <small className="font-bold">{0}</small></h3>
        <div>
            <button className="p-2 bg-blue-600 rounded-xl mx-2 text-white hover:bg-red-900 ">+1</button>
            <button className="p-2 bg-blue-600 rounded-xl mx-2 text-white hover:bg-red-900 ">-1</button>
        </div>
    </>

  )
}
