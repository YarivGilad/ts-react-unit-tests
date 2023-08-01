import { FC, useState } from "react";


export const Counter:FC = ()=> {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p role="contentinfo">Count is {count}</p>
            <button onClick={()=>setCount(count+1)}>Add one</button>
        </div>
    )
}