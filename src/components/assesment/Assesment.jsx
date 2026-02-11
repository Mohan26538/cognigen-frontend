import React, { useState } from "react";

function Assesment() {
  const [answer, setAnswer] = useState("");

  const question =
    "Define thread in java";

  const handleSubmit = () => {
    if (!answer.trim()) {
      alert("Please write your answer before submitting.");
      return;
    }

    alert("Answer Submitted Successfully!");
    console.log("User Answer:", answer);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side - Question Box */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Question
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {question}
          </p>
        </div>

        {/* Right Side - Answer Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Your Answer
          </h2>

          <textarea
            className="flex-grow border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Type your answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="mt-6 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-3 rounded-lg"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default Assesment;
