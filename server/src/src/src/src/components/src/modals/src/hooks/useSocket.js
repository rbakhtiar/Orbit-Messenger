import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

export default function useSocket(onMessage) {
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io(
      import.meta.env.VITE_SOCKET_URL || "http://localhost:4000"
    );

    socket.current.on("message", onMessage);

    return () => socket.current.disconnect();
  }, []);

  return {
    send: (msg) => socket.current.emit("message", msg)
  };
}
