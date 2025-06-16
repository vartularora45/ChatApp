import { useState } from "react";
import useSendMessage from ""; // path check karle bhai

const TypeSend = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await sendMessage(message.trim());
    setMessage(""); // input box clear
  };

  return (
    <form onSubmit={handleSend} className="flex gap-2 p-2 border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default TypeSend;
