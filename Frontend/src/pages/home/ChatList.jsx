import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import "./home.css";

const ChatList = () => {

  const dummyUsers = [
    {
      id: 1,
      name: "John",
      message: "Hello!",
      language: "English",
    },
    {
      id: 2,
      name: "Ravi",
      message: "నమస్తే!",
      language: "Telugu",
    },
    {
      id: 3,
      name: "Maria",
      message: "Hola!",
      language: "Spanish",
    },
  ];

  // Selected user state
  const [selectedUser, setSelectedUser] = useState(dummyUsers[0]);

  return (
    <div className="main-container">

      {/* LEFT SIDEBAR */}
      <div className="sidebar">

        {/* HEADER */}
        <div className="sidebar-header">
          <h2>BhashaConnect</h2>

          <div className="sidebar-icons">
            <button className="add-btn">+</button>
            <FiMoreVertical className="menu-icon" />
          </div>
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search or start a new chat"
          />
        </div>

        {/* USER LIST */}
        <div className="chat-list">

          {dummyUsers.map((user) => (

            <div
              key={user.id}
              className="chat-item"
              onClick={() => setSelectedUser(user)}
            >
              <h3>{user.name}</h3>
              <p>{user.message}</p>
              <span>{user.language}</span>
            </div>

          ))}

        </div>

      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="chat-window">

        <div className="chat-header">
          <h2>{selectedUser.name}</h2>
          <p>{selectedUser.language}</p>
        </div>

        <div className="messages">

          <div className="message received">
            Hi from {selectedUser.name}
          </div>

          <div className="message sent">
            Hello 👋
          </div>

        </div>

      </div>

    </div>
  );
};

export default ChatList;