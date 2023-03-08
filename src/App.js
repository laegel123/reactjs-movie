import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (event) => {
        setKeyword(event.target.value);
    };
    console.log("i run all the time");
    useEffect(() => {
        console.log("i run only once");
    }, []);
    useEffect(() => {
        console.log("i run when 'keyword' changes");
    }, [keyword]);
    useEffect(() => {
        console.log("i run when 'counter' changes");
    }, [counter]);
    useEffect(() => {
        console.log("i run when keyword & counter change");
    }, [counter, keyword]);
  return (
    <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here ..."/>
        <h1>Welcome back!</h1>
        <button onClick={onClick}>click me1</button>
    </div>
  );
}

export default App;