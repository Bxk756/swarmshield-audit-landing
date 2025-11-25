import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Send request to your backend AI API
    const res = await fetch("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });

    const data = await res.json();
    const aiMessage = {
      role: "assistant",
      content: data.reply || "I'm here to help!",
    };

    setMessages((prev) => [...prev, aiMessage]);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-primary p-4 rounded-full shadow-xl text-white text-xl hover:bg-blue-700 transition"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-card rounded-2xl shadow-xl border border-white/10 overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="p-4 bg-primary text-white font-semibold">
            A2A Shield Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 max-h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl text-sm whitespace-pre-wrap ${
                  msg.role === "assistant"
                    ? "bg-white/10 text-white"
                    : "bg-primary/50 text-white self-end"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 bg-dark/50 flex gap-2">
            <input
              className="flex-1 bg-dark/80 p-2 rounded-lg text-white outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-primary px-4 py-2 rounded-lg text-white"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
