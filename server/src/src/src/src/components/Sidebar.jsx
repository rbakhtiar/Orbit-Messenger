import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddContactModal from "../modals/AddContactModal";

const chats = [
  { id: 1, name: "Aisha", last: "yo", unread: 2 },
  { id: 2, name: "Dev Team", last: "done", unread: 0 }
];

export default function Sidebar({ onOpenConversation, onOpenVena }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-80 bg-white border-r flex flex-col">
      <div className="p-4 flex justify-between">
        <h2 className="font-bold">Orbit</h2>

        <button
          onClick={onOpenVena}
          className="bg-vena text-white px-3 rounded"
        >
          Vena
        </button>
      </div>

      <div className="flex-1">
        {chats.map((c) => (
          <motion.div
            key={c.id}
            onClick={() => onOpenConversation(c)}
            className="p-3 hover:bg-gray-100 cursor-pointer"
          >
            {c.name}
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="p-3 bg-gray-100"
      >
        Add Contact
      </button>

      <AnimatePresence>
        {open && (
          <AddContactModal onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
