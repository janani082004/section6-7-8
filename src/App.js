import { useState, useRef } from "react"

export default function App() {
  // const isActive = true;
  const [isActive, setIsActive] = useState(true);
  function handleClick() {
    setIsActive(!isActive)
  }
  const inputRef = useRef();
  const divRef = useRef();
  const scrollRef = useRef(null);
  function handleChange() {
    divRef.current.style.backgroundColor = "blue"
  }
  function focusInput() {
    inputRef.current.focus();
  }

  function scrollButton() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <button className="text-center text-white lg:focus:bg-pink-500  bg-green-500 hover:bg-white hover:text-green-700  mt-5 ml-5 p-4  rounded">I'm Created By Tailwind</button>
      <div className="text text-center mt-2 lg:hover:bg-black lg:hover:text-green-500 lg:bg-green-500 lg:text-black md:bg-black md:text-white bg-purple-500 text-white">
        Hello I'm the one of the example of media queries in tailwind css
      </div>
      <button className={`mt-2 p-5 ${isActive ? 'bg-green-500' : 'bg-gray-500'}`} onClick={handleClick}>Condition</button>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <div className="bg-pink-600 w-[100px] h-[100px] mt-4 ml-4 mb-4" ref={divRef}></div>
      <button onClick={handleChange} className="bg-blue-500 text-white ml-4 p-4 rounded"> Click to change color</button>
      <button onClick={scrollButton}>Click to scroll</button>
      <div style={{ height: "100vh" }}></div>
      <div ref={scrollRef} className="h-[300px] bg-green-400" >
        🎯 Target Section
      </div>
    </>
  )
}