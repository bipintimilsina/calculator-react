import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState('');
  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

const clear=()=>{
  setResult('')
}

  const calculate=()=>{
    setResult(eval(result).toString())
  }
  return (
    <>
      <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
        <div className="main w-64 border-4 border-gray-100 rounded-2xl shadow-xl h-auto bg-gray-900">
          <div className="screen p-2">
            <input
              type="text"
              placeholder="0"
              value={result}
              className="text-black w-full placeholder-black px-1 bg-gray-100 text-2xl pt-10 rounded-lg outline-none text-right"
            />
          </div>

          <div className="brand bg-gray-100 mb-2">
            <h1 className="text-center text-xs font-bold text-center text-black  font-bold">
              Casio
            </h1>
          </div>

          <div className="keyboard ">
            <div className="row flex justify-between m-2">
              <input
                type="button"
                onClick={clear}
                value="C"
                className="bg-red-300 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="<"
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="%"
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="/"
                className="bg-pink-300 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
            </div>

            <div className="row flex justify-between m-2">
              <input
                type="button"
                value="7"
                onClick={clickHandle}
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="8"
                onClick={clickHandle}
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="9"
                onClick={clickHandle}
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="*"
                onClick={clickHandle}
                className="bg-green-300 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
            </div>
            <div className="row flex justify-between m-2">
              <input
                type="button"
                value="4"
                onClick={clickHandle}
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="5"
                onClick={clickHandle}
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="6"
                onClick={clickHandle}
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="-"
                onClick={clickHandle}
                className="bg-blue-300 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
            </div>
            <div className="row flex justify-between m-2">
              <input

                type="button"
                value="1"
                onClick={clickHandle}
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="2"
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="3"
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                onClick={clickHandle}
                value="*"
                className="bg-purple-300 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
            </div>
            <div className="row flex justify-between m-2">
              <input
                type="button"
                onClick={clickHandle}
                value="0"
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="00"
                onClick={clickHandle}
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"

                onClick={clickHandle}

                value="."
                className="bg-gray-200 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
              <input
                type="button"
                value="="
                onClick={calculate}
                className="bg-orange-300 w-12 rounded-md  text-black text-center h-12 outline-none font-medium flex justify-center items-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
