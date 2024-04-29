import React, { useEffect } from "react";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'Enter':
                    document.getElementById("equalbtn").click();
                    break;
                case '1':
                    document.getElementById("1").click();
                    break;
                case '2':
                    document.getElementById("2").click();
                    break;
                case '3':
                    document.getElementById("3").click();
                    break;
                case '4':
                    document.getElementById("4").click();
                    break;
                case '5':
                    document.getElementById("5").click();
                    break;
                case '6':
                    document.getElementById("6").click();
                    break;
                case '7':
                    document.getElementById("7").click();
                    break;
                case '8':
                    document.getElementById("8").click();
                    break;
                case '9':
                    document.getElementById("9").click();
                    break;
                case '0':
                    document.getElementById("0").click();
                    break;
                case '.':
                    document.getElementById(".").click();
                    break;
                case '(':
                    document.getElementById("(").click();
                    break;
                case ')':
                    document.getElementById(")").click();
                    break;
                case '+':
                    document.getElementById("+").click();
                    break;
                case '-':
                    document.getElementById("-").click();
                    break;
                case '*':
                    document.getElementById("*").click();
                    break;
                case '/':
                    document.getElementById("/").click();
                    break;
                case 'Escape':
                    document.getElementById("clr").click();
                    break;
                case 'Backspace':
                    document.getElementById("back").click();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    return (
        <div className='grid grid-cols-5 bg-white md:border-b-l md:border-b-r'>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" onClick={inputHandler}> ^  </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" id="(" onClick={inputHandler}> ( </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" id=")" onClick={inputHandler}> ) </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" onClick={inputHandler}> √ </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" onClick={inputHandler}> x<sup>2</sup> </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-red-600" id="clr" onClick={clearInput}> AC </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-red-600" id="back" onClick={backspace}> ⌫ </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" onClick={inputHandler}> log </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" id="/" onClick={inputHandler}> ÷ </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" onClick={inputHandler}> % </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="7" onClick={inputHandler}> 7 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="8" onClick={inputHandler}> 8 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="9" onClick={inputHandler}> 9 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" id="*" onClick={inputHandler}> x </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" onClick={inputHandler}> x<sup>3</sup> </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="4" onClick={inputHandler}> 4 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="5" onClick={inputHandler}> 5 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="6" onClick={inputHandler}> 6 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" id="-" onClick={inputHandler}> - </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" onClick={inputHandler}> <sup>3</sup>√ </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="1" onClick={inputHandler}> 1 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="2" onClick={inputHandler}> 2 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="3" onClick={inputHandler}> 3 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" id="+" onClick={inputHandler}> + </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" onClick={inputHandler}> ! </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" onClick={changePlusMinus}> ± </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none" id="0" onClick={inputHandler}> 0 </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none w-16 h-16 mx-auto my-2 text-2xl font-medium cursor-pointer rounded-full border-0 bg-transparent select-none text-teal-600" id="." onClick={inputHandler}> . </button>
            <button className="md:hover:bg-blue-400 md:hover:text-white md:hover:transition md:hover:duration-300 md:hover:ease-in-out md:active:bg-blue-500 md:active:text-white md:active:transition md:active:duration-300 md:active:ease-in-out md:active:transform md:active:scale-90 md:touched:pointer-events-none mx-auto my-2 cursor-pointer rounded-full border-0 select-none  equal font-medium text-4xl w-28 h-12 rounded-10 col-start-4 col-span-2 text-white bg-teal-600" id="equalbtn" onClick={calculateAns}> = </button>
        </div>
    );
};

export default Buttons;