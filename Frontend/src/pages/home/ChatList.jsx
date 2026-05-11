// ChatList.jsx

import { FaSearch } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import "./home.css";

const ChatList = () => {
  return (
    <div className="sidebar">

      {/* HEADER */}
      <div className="sidebar-header">
        <h2>BhashaConnect</h2>

        <div className="sidebar-icons">
          <button className="add-btn">+</button>
          <FiMoreVertical className="menu-icon" />
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search or start a new chat"
        />
      </div>

      {/* FILTER BUTTONS */}
      {/* <div className="filters">
        <button className="active">All</button>
        <button>Unread</button>
        <button>Favourites</button>

        <button className="dropdown-btn">
          ▼
        </button>
      </div> */}

    </div>
  );
};

export default ChatList;