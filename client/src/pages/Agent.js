import React, { useState, useEffect, useRef } from "react";
import "./Agent.css";
import ageniImg from "../images/ageni.jpg";

const SUGGESTED_PROMPTS = [
  "Summarize key market trends",
  "Help me draft an email",
  "Analyze quarterly metrics",
  "Explain algorithmic trading"
];

function Agent() {
  const [messages, setMessages] = useState([
    {
      id: "initial-1",
      sender: "ai",
      text: "Hello! I am Aura Agent, powered by Inalgo. How can I assist your workflow today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isListening, setIsListening] = useState(false);

  const chatEndRef = useRef(null);
  const textareaRef = useRef(null);
  const speechRecognitionRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Dynamic textarea sizing
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 140)}px`;
    }
  }, [input]);

  // Speech Recognition API setup
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => setIsListening(false);
      speechRecognitionRef.current = recognition;
    }

    return () => {
      if (speechRecognitionRef.current) speechRecognitionRef.current.stop();
    };
  }, []);

  const handleMicToggle = () => {
    if (!speechRecognitionRef.current) {
      alert("Voice input is not supported in this browser.");
      return;
    }
    if (isListening) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    } else {
      speechRecognitionRef.current.start();
      setIsListening(true);
    }
  };

  const executeAIRequest = async (userPrompt, chatHistory) => {
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:5001/api/agent/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userPrompt,
          history: chatHistory.map((m) => ({ role: m.sender, content: m.text }))
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "ai",
          text: data.answer || "No response content received.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } catch (error) {
      console.error("Agent error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "ai",
          text: "I encountered a communication issue. Please verify backend status and try again.",
          isError: true,
          failedPrompt: userPrompt,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = (textToSend) => {
    const query = typeof textToSend === "string" ? textToSend : input;
    if (!query.trim() || isTyping) return;

    const userMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    executeAIRequest(query.trim(), nextMessages);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleRetry = (prompt) => {
    if (!prompt || isTyping) return;
    executeAIRequest(prompt, messages);
  };

  const handleCopyText = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    if (window.confirm("Clear active chat session?")) {
      setMessages([
        {
          id: crypto.randomUUID(),
          sender: "ai",
          text: "Session cleared. What else can I assist with?",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="agent-fullscreen">
      <div className="bg-glow-orb"></div>

      <div className="agent-wrapper">
        <div className="agent-card">
          {/* Header */}
          <header className="agent-header">
            <div className="agent-branding">
              <div className="avatar-wrapper">
                <img src={ageniImg} alt="AI Avatar" className="agent-avatar" />
                <span className={`status-indicator ${isTyping ? "busy" : "online"}`}></span>
              </div>
              <div className="agent-details">
                <div className="title-row">
                  <h1 className="agent-title">Aura Agent</h1>
                  <span className="version-pill">v2.0</span>
                </div>
                <p className="status-label">{isTyping ? "Generating answer..." : "Ready to assist"}</p>
              </div>
            </div>

            <div className="agent-actions">
              <button onClick={handleClearHistory} className="icon-btn" title="Clear Conversation" aria-label="Clear conversation">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                </svg>
              </button>
              <button onClick={() => setIsVisible(false)} className="icon-btn close-btn" title="Close Panel" aria-label="Close panel">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </header>

          {/* Chat Stream */}
          <main className="chat-container">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-row ${msg.sender === "user" ? "user-row" : "ai-row"}`}>
                <div className={`chat-bubble ${msg.sender === "user" ? "user-bubble" : "ai-bubble"} ${msg.isError ? "error-bubble" : ""}`}>
                  <div className="bubble-text">{msg.text}</div>

                  <div className="bubble-footer">
                    <span className="timestamp">{msg.timestamp}</span>
                    <div className="bubble-actions">
                      {msg.isError && msg.failedPrompt && (
                        <button className="retry-btn" onClick={() => handleRetry(msg.failedPrompt)}>
                          Retry
                        </button>
                      )}
                      <button className="action-pill" onClick={() => handleCopyText(msg.id, msg.text)}>
                        {copiedId === msg.id ? "✓ Copied" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-row ai-row">
                <div className="chat-bubble ai-bubble typing-bubble">
                  <span className="wave-dot"></span>
                  <span className="wave-dot"></span>
                  <span className="wave-dot"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </main>

          {/* Interactive Suggestions */}
          {messages.length < 3 && (
            <div className="suggestions-rail">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button key={idx} className="suggestion-chip" onClick={() => handleSendMessage(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Dock */}
          <footer className="dock-container">
            <form className="dock-form" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
              <textarea
                ref={textareaRef}
                className="dock-input"
                placeholder="Ask anything... (Shift+Enter for linebreak)"
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <div className="dock-controls">
                <button
                  type="button"
                  className={`mic-action-btn ${isListening ? "listening" : ""}`}
                  onClick={handleMicToggle}
                  title={isListening ? "Listening... click to cancel" : "Voice message"}
                  disabled={isTyping}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
                  </svg>
                </button>

                <button
                  type="submit"
                  className="send-action-btn"
                  disabled={!input.trim() || isTyping}
                  title="Send query"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Agent;