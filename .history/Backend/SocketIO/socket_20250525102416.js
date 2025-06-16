import { Server } from 'socket.io';

let io;
const users = {};

export const getRecieverSocketId = (receiverId) => {
    return users[receiverId];
};

export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "http://localhost:5173",
            credentials: true,
        },
    });

    io.on('connection', (socket) => {
        console.log("🔌 Client connected:", socket.id);
        const userId = socket.handshake.query.userId;

        if (userId) {
            users[userId] = socket.id;
            console.log("👥 Users map:", users);
            io.emit("getOnlineUsers", Object.keys(users));
        }

        socket.on('disconnect', () => {
            console.log("❌ Disconnected:", socket.id);
            delete users[userId];
            io.emit("getOnlineUsers", Object.keys(users));
        });
    });

    return io;
};

export const getIO = () => {
    if (!io) throw new Error("Socket.IO not initialized!");
    return io;
};
