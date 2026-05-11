import { useState } from "react"; 
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import "./home.css";

const Home = () => {

    const [activeChat, setActiveChat] = useState(null);
  return (
    <div className="home-container">
      <ChatList onSelectChat={setActiveChat} />
      <ChatWindow chat={activeChat} />
    </div>
  );
};

export default Home;
