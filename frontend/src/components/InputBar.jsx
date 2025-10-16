import React from "react";
import { FiPlus } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import {SyncLoader} from 'react-spinners'

function InputBar({ userQuestion, setUserQuestion, handleQuestionSend }) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) { 
            e.preventDefault();  // prevent newline in input
            handleQuestionSend();
        }
    };

    return (
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 shadow-sm">
            <input
                type="text"
                placeholder="Ask Gemini"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                onKeyDown={handleKeyDown}   // ⬅️ added here
                className="flex-1 bg-transparent outline-none text-gray-800"
            />
            <div onClick={handleQuestionSend}>
                <IoSend className="ml-3 text-gray-600 cursor-pointer" />
            </div>
        </div>
    );
}

export default InputBar;
