import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AddContactModal({ onClose }) {
  const [sent, setSent] = useState(false);

  return (
    <motion.div className="fixed inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <motion.div className="bg-white p-6 rounded w-[400px] relative">
        <h2 className="font-bold mb-3">Add Contact</h2>

        {!sent ? (
          <button
            onClick={() => setSent(true)}
            className="bg-orbit-500 text-white px-3 py-2 rounded"
          >
            Send Invite
          </button>
        ) : (
          <button
            onClick={onClose}
            className="bg-green-500 text-white px-3 py-2 rounded"
          >
            Done
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
