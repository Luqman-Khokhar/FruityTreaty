import React, { useEffect, useState, useRef } from 'react';
import Pic1 from "../images/banana.jpeg";
import Pic2 from "../images/choco.jpeg";
import Pic3 from "../images/paya.jpg";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(750);
  const platformRef = useRef(null);
  const frames = [
    { title: "Tiger", content: <img className="w-full p-8" src={Pic1} alt="" /> },
    { title: "Lion", content: <img className="w-full p-8" src={Pic2} alt="" /> },
    { title: "Rat", content: <img className="w-full p-8" src={Pic3     } alt="" /> },
  
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyCode = event.keyCode;
      if (keyCode === 39 && index < frames.length - 1) {
        setIndex(index + 1);
      } else if (keyCode === 37 && index > 0) {
        setIndex(index - 1);
      }
    };

    document.addEventListener("keyup", handleKeyPress);

    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [index, frames.length]);

  useEffect(() => {
    if (platformRef.current) {
      platformRef.current.style.right = `${width * index}px`;
    }
  }, [index, width]);

  return (
    <>
      <div className="text-xl font-bold m-5 text-center">Use Keyboard Arrow Keys To Go Left And Right</div>
      <div className="gallery border-2 rounded mx-auto m-5 bg-white" style={{ width: `${width}px` }}>
        <div className="top flex p-2 border-b select-none">
          <div className="heading text-gray-800 w-full pl-3 font-semibold my-auto">{frames[index].title}</div>
          <div className="buttons ml-auto flex text-gray-600 mr-1">
            <button className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0" onClick={() => setIndex(Math.max(0, index - 1))}>
              &lt;
            </button>
            <button className="w-7 border-2 rounded-r-lg p-1 cursor-pointer" onClick={() => setIndex(Math.min(frames.length - 1, index + 1))}>
              &gt;
            </button>
          </div>
        </div>
        <div className="content-area w-full h-96 overflow-hidden">
          <div className="platform shadow-xl h-full flex" ref={platformRef}>
            {frames.map((frame, idx) => (
              <div key={idx} className="each-frame border-box flex-none h-full" title={frame.title}>
                {frame.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
