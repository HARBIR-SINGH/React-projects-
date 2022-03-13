import React, { useState } from "react"

export default function PageTwo(){
    //return 
    <h1> page Two </h1>

    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    return (
        <button onClick={increment}>click to increase {count}</button>
    )
}
 
