import { useState, useRef, useEffect } from "react";

export default function All() {
  const [isActive, setIsActive] = useState(true);
  const [second, setSecond] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef();
  const divRef = useRef();
  const scrollRef = useRef(null);
  const renderCount = useRef(1);

  // Timer: increases every 1 second
  useEffect(() => {
    const time = setInterval(() => {
      setSecond(prev => prev + 1);
    }, 1000);
    return () => clearInterval(time);
  }, []);

  // Track render count
  useEffect(() => {
    renderCount.current++;
    console.log("Render count:", renderCount.current);
  });

  function handleClick() {
    setIsActive(!isActive);
  }

  function handleChange() {
    divRef.current.style.backgroundColor = "blue";
  }

  function focusInput() {
    inputRef.current.focus();
  }

  function scrollButton() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* Tailwind styling + focus on large screens */}
      <button className="text-center text-white lg:focus:bg-pink-500 bg-green-500 hover:bg-white hover:text-green-700 mt-5 ml-5 p-4 rounded">
        I'm Created By Tailwind
      </button>

      {/* Media Query Example */}
      <div className="text text-center mt-2 lg:hover:bg-black lg:hover:text-green-500 lg:bg-green-500 lg:text-black md:bg-black md:text-white bg-purple-500 text-white">
        Hello I'm the one of the example of media queries in tailwind css
      </div>

      {/* Conditional Button */}
      <button className={`mt-2 p-5 ${isActive ? 'bg-green-500' : 'bg-gray-500'}`} onClick={handleClick}>
        Condition
      </button>

      {/* Input Ref Example */}
      <input ref={inputRef} type="text" className="ml-4 mt-2 border p-1" />
      <button onClick={focusInput} className="ml-2 bg-blue-500 text-white px-4 py-1 rounded">
        Focus Input
      </button>

      {/* Div Color Change */}
      <div className="bg-pink-600 w-[100px] h-[100px] mt-4 ml-4 mb-4" ref={divRef}></div>
      <button onClick={handleChange} className="bg-blue-500 text-white ml-4 p-4 rounded">
        Click to change color
      </button>

      {/* Scroll Example */}
      <button onClick={scrollButton} className="ml-4 mt-4 bg-yellow-500 text-white px-4 py-2 rounded">
        Click to scroll
      </button>

      {/* Timer + Modal */}
      <div style={{ height: "100vh" }} className="mt-4">
        <p className="text-center text-xl">{second} sec</p>
        <button onClick={() => setShowModal(true)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded mx-auto block">
          Open Modal
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded shadow-lg w-[300px] text-center">
              <p className="mb-4">This is a modal!</p>
              <button onClick={() => setShowModal(false)} className="bg-blue-500 text-white px-4 py-1 rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Target */}
      <div ref={scrollRef} className="h-[300px] bg-green-400 flex justify-center items-center text-white text-xl font-bold">
        🎯 Target Section
      </div>
    </>
  );
}
