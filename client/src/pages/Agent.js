import React, { useState, useEffect, useRef } from "react";
import "./Agent.css";
import ageniImg from "../images/ageni.jpg";

function Agent() {
  const [messages, setMessages] = useState([
    {
      id: "initial-1",
      sender: "ai",
      text: "Hello! I am Inalgo AI Agent, developed by Inalgo. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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

  const handleClose = () => {
    setIsVisible(false);
    // Optionally, you could navigate back here if using react-router
    // navigate(-1); // Uncomment if you have access to useNavigate
  };

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Auto-resize input height up to 150px
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  // Initialize Speech Recognition if supported
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      recognition.onend = () => {
        setIsListening(false);
      };
      speechRecognitionRef.current = recognition;
    } else {
      console.warn('Speech Recognition not supported in this browser.');
    }
    return () => {
      if (speechRecognitionRef.current) {
        speechRecognitionRef.current.stop();
      }
    };
  }, []);

  const handleMicClick = () => {
    if (!speechRecognitionRef.current) {
      alert('Voice input not supported in this browser.');
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

  // Handle real API call to backend
  const fetchAIResponse = async (userPrompt) => {
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:8081/api/agent/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          question: userPrompt
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const aiMsg = {
        id: crypto.randomUUID(),
        sender: "ai",
        text: data.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error('Error calling backend:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "ai",
          text: "Sorry, I encountered an issue processing your request. Please make sure the backend is running and try again.",
          isError: true,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = {
      id: crypto.randomUUID(),
      sender: "user",
      text: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input.trim();
    setInput("");

    // Reset textarea height
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    fetchAIResponse(currentInput);
  };

  const handleKeyDown = (e) => {
    // Send on 'Enter' without Shift key, allow new lines on Shift + Enter
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    if (window.confirm("Are you sure you want to clear the conversation history?")) {
      setMessages([
        {
          id: crypto.randomUUID(),
          sender: "ai",
          text: "Chat history cleared. How can I help you now?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  };

  const handleCopyText = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="agent-fullscreen">
      <div className="bg-orb"></div>

      <div className="agent-wrapper">
        <div className="main-content">
          {/* Header */}
          <header className="agent-header">
            <div className="agent-branding">
              <div className="avatar-glow">
                <img src={ageniImg} alt="Agent Avatar" className="agent-avatar" />
              </div>
              <div className="agent-details">
                <h1 className="agent-title">Aura-2.0 Agent</h1>
                <div className="status-badge">
                  <span className={`pulse-dot ${isTyping ? "busy" : ""}`}></span>
                  <span>{isTyping ? "Processing..." : "Active Engine"}</span>
                </div>
              </div>
            </div>

            <div className="agent-actions">
              <button
                onClick={handleClearChat}
                className="delete-chat-btn"
                title="Clear Chat History"
                aria-label="Clear chat history"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                </svg>
              </button>
              <button
                onClick={handleClose}
                className="close-agent-btn"
                title="Close Agent"
                aria-label="Close agent"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </header>

          {/* Chat Messages */}
          <main className="chat-container">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-bubble-wrapper ${msg.sender === "user" ? "user-wrapper" : "ai-wrapper"}`}
              >
                <div className={`chat-bubble ${msg.sender === "user" ? "user-bubble" : "ai-bubble"} ${msg.isError ? "error-bubble" : ""}`}>
                  <div className="bubble-content">{msg.text}</div>

                  <div className="bubble-footer">
                    <span className="timestamp">{msg.timestamp}</span>
                    <button
                      className="copy-btn"
                      onClick={() => handleCopyText(msg.id, msg.text)}
                      title="Copy message"
                    >
                      {copiedId === msg.id ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-wrapper ai-wrapper">
                <div className="chat-bubble ai-bubble typing-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </main>

          {/* Input Bar */}
          <footer className="searchbar-container">
            <form className="searchbar-form" onSubmit={handleSend}>
              <textarea
                ref={textareaRef}
                className="search-input"
                placeholder="Type your message... (Shift+Enter for newline)"
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Message Input"
              />
              <button
                type="button"
                className="mic-btn"
                disabled={isTyping}
                aria-label={isListening ? "Stop listening" : "Start voice input"}
                title={isListening ? "Stop listening" : "Start voice input"}
                onClick={handleMicClick}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6zM12 17a5.9 5.9 0 00-.5-1H11a2 2 0 01-2-2V7a5 5 0 015.5-4.9 5 5 0 015 4.9v3a2 2 0 01-2 2h-.5A5.9 5.9 0 0012 17z"/>
                </svg>
              </button>
              <button
                type="submit"
                className="send-btn"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
              >
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