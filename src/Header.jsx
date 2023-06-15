import { useState } from "react";

function Header() {
    const [count, setCount] = useState(0);
    const increaseCount = () => { setCount(count + 1); } //const newCount = count + 1;
    const decreaseCount = () => { setCount(count - 1); } //const newCount = count - 1;

    return (

        <>
            <div>

                <h1>Count: {count}</h1>
                <button onClick={increaseCount}>increase </button>
                <button onClick={decreaseCount}> decrease </button>
            </div>

        </>
    )
}

export default Header;