import { useState } from "react"

export default function useCounter() {
    const [count, setcount] = useState(0)
    const handlerClickPlus = () => {
        setcount(currentValue => currentValue + 1)
    } 
    const handlerClickLess = () => {
        setcount(currentValue => currentValue - 1)
    } 
  
    return {count,handlerClickPlus,handlerClickLess}
}
