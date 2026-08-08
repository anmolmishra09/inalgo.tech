import React, { useState, useEffect, useRef } from "react";
import "./Agent.css";
import ageniImg from "../images/ageni.jpg";

function Agent() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I am GPT-5.6. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = {
        sender: "ai",
        text: `Processing your request: "${input}". How else can I help?`
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1200);
  };

  // Chat Clear / Delete Function
  const handleClearChat = () => {
    setMessages([
      { sender: "ai", text: "Chat history cleared. How can I help you now?" }
    ]);
  };

  return (
    <div className="agent-fullscreen">
      <div className="bg-orb"></div>

      <div className="agent-wrapper">
        <div className="main-content">
          {/* Header Area */}
          <header className="agent-header">
            <div className="agent-branding">
              <div className="avatar-glow">
                <img src={ageniImg} alt="Agent Icon" className="agent-avatar" />
              </div>
              <div className="agent-details">
                <h1 className="agent-title">Aura-2.0 Agent</h1>
                <div className="status-badge">
                  <span className="pulse-dot"></span>
                  <span>Active Engine</span>
                </div>
              </div>
            </div>

            {/* Delete / Clear Chat Button */}
            <button 
              onClick={handleClearChat} 
              className="delete-chat-btn"
              title="Clear Chat History"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
              </svg>
            </button>
          </header>

          {/* Chat Messages */}
          <main className="chat-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-bubble ${msg.sender === "user" ? "user-bubble" : "ai-bubble"}`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble ai-bubble typing-dots">
                <span></span><span></span><span></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </main>

          {/* Simple Input Bar */}
          <footer className="searchbar-container">
            <form className="searchbar-form" onSubmit={handleSend}>
              <input
                type="text"
                className="search-input"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="send-btn" disabled={!input.trim()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Agent;