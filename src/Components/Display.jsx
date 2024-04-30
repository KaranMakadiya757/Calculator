import React from "react";

const Display = ({ input, setInput, answer }) => {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      <div className='flex flex-col p-3 pb-5 bg-gradient-to-r from-teal-500 to-blue-500 '>
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className='p-3 text-right bg-transparent text-white border-none tracking-wide text-4xl placeholder:text-white'
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={12}
              // disabled
              onChange={onChangeTagInput}
              autoComplete="off"
              disabled
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className='p-3 text-right bg-transparent text-white border-none tracking-wide text-sm placeholder:text-white focus:outline-none'
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className='p-3 text-right bg-transparent text-white border-none tracking-wide text-4xl placeholder:text-white focus:outline-none'
              value={answer}
              disabled
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;