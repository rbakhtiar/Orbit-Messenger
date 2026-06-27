import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar
        onOpenConversation={setActiveChat}
        onOpenVena={() => alert("Vena AI coming soon")}
      />

      <div className="flex-1 p-6">
        {activeChat ? (
          <h1 className="text-xl font-bold">
            Chat with {activeChat.name}
          </h1>
        ) : (
          <h1 className="text-gray-500">Select a chat</h1>
        )}
      </div>
    </div>
  );
}
