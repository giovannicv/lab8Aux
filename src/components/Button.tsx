import { useState } from "react"

export const Button = () => {
    const [count, setCount] = useState<number>(5)
    const handlerButton = () => {
        setCount(count + 50)
    }

    return (
        <button onClick={handlerButton}>
            Count: { count }
        </button>
        
    )
}