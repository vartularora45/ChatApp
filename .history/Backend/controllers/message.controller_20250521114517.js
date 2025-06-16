export const getMessages = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user?.userId;

    console.log("Fetching messages between:", senderId, "and", chatUser);

    if (!senderId || !chatUser) {
      return res.status(400).json({ message: "Invalid user IDs" });
    }

    const conversation = await Conversation.findOne({
      members: { $all: [senderId, chatUser] },
    }).populate("messages");

    if (!conversation) {
      console.log("No conversation found");
      return res.status(404).json([]);
    }

    res.status(200).json({
      message: "Messages retrieved successfully",
      messages: conversation.messages,
    });
  } catch (error) {
    console.error("getMessages error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
