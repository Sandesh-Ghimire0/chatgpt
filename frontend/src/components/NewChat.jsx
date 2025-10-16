import React from "react";
import InputBar from "./InputBar";

function NewChat({
    userInfo,
    userQuestion,
    setUserQuestion,
    handleQuestionSend,
    isLoading
}) {
    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-blue-600 mb-6">
                Hello, {userInfo.username.split(" ")[0]}
            </h1>

            <div className="w-full max-w-xl">
                <InputBar
                    userQuestion={userQuestion}
                    setUserQuestion={setUserQuestion}
                    handleQuestionSend={handleQuestionSend}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}

export default NewChat;
