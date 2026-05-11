import { useEffect, useState } from "react";

const languages = ["English", "Telugu", "Hindi", "Tamil", "French"];

const ChatWindow = ({ chat }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [targetLang, setTargetLang] = useState("English");
  const [showLang, setShowLang] = useState(false);

  // 🔹 Dummy translation logic (replace with API later)
  const translateMessage = (text, lang) => {
    if (lang === "English") return "Hello friend";
    if (lang === "Telugu") return "హలో స్నేహితుడు";
    if (lang === "Hindi") return "नमस्ते दोस्त";
    return text;
  };

  // 🔹 When chat or language changes
  useEffect(() => {
    if (chat) {
      const formattedMessages = chat.messages.map((msg) => ({
        originalLang: "Spanish",
        originalText: msg,
        translatedLang: targetLang,
        translatedText: translateMessage(msg, targetLang),
      }));

      setMessages(formattedMessages);
    }
  }, [chat, targetLang]);

  if (!chat) {
    return (
      <div className="chat-window">
        <div className="chat-header">Select a chat</div>
      </div>
    );
  }

  const sendMessage = () => {
    if (!input) return;

    setMessages([
      ...messages,
      {
        originalLang: "Spanish",
        originalText: input,
        translatedLang: targetLang,
        translatedText: translateMessage(input, targetLang),
      },
    ]);

    setInput("");
  };

  return (
    <div className="chat-window">
      {/* HEADER */}
      <div className="chat-header chat-header-flex">
        <span>{chat.name}</span>

        <div className="translator-box">
          <button
            className="translate-btn"
            onClick={() => setShowLang(!showLang)}
          >
            <i className="bi bi-translate"></i>
          </button>

          {showLang && (
            <div className="lang-dropdown">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="lang-item"
                  onClick={() => {
                    setTargetLang(lang);
                    setShowLang(false);
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MESSAGES */}
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className="message received">
            <div className="lang-label">
              {msg.originalLang}
            </div>
            <div className="original-text">
              {msg.originalText}
            </div>

            <div className="lang-label">
              {msg.translatedLang}
            </div>
            <div className="translated-text">
              {msg.translatedText}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
