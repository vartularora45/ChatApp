import { useState } from "react";
import useSendMessage from "../../context/useSendMessage";

const TypeSend = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      await sendMessage(message.trim());
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      // Optionally show error to user (e.g., using toast)
    }
  };

  return (
    <form onSubmit={handleSend} className="flex gap-2 p-2 border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
        disabled={loading}
        aria-label="Type your message"
      />
      <button
        type="submit"
        disabled={loading || !message.trim()}
        className={`bg-blue-500 text-white px-4 py-2 rounded transition ${
          loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
        aria-label="Send message"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
};

export default TypeSend;