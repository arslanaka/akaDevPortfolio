import { useState } from "react";

interface Message {
  text: string;
  isBot: boolean;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSubmit = () => {
    if (input.trim() === "") return;

    const newMessage: Message = {
      text: input,
      isBot: false,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate bot reply
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "I am a software engineer. How can I assist you professionally?",
          isBot: true,
        },
      ]);
      setIsTyping(false);
    }, 1500);

    setInput("");
  };

  return (
    <div className="space-y-8">
      {/* Chat window */}
      <div className="bg-white p-6 rounded-lg h-[400px] overflow-y-auto mb-16 shadow-md border border-gray-200">
        {/* Chat Messages */}
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${
                msg.isBot ? "text-blue-600" : "text-gray-800"
              } font-typewriter`}
              style={{
                animation: msg.isBot
                  ? "typewriter 3s steps(30) 1s 1 normal forwards"
                  : "",
              }}
            >
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="text-gray-500 font-typewriter">Let me think...</div>
          )}
        </div>
      </div>

      {/* Question Bar */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-2 rounded-lg bg-gray-100 text-gray-800 border border-gray-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            placeholder="Ask me a question..."
          />
          <button
            className="ml-2 p-2 bg-gray-600 text-white rounded-lg hidden"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
