import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("UseEffect");

        const timer = setInterval(() => {
            console.log("Interval calling")
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("useEffect return");
        }
    }, []);

    console.log("Render");

    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => {
                setCount(count + 1);
            }}>Count Increment</button>
            <h3>Location: Kolkata</h3>
            <h4>Contact: 1234567890</h4>
        </div>
    )
};

export default User;