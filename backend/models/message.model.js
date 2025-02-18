import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // reference to user model
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		
	},
	{ timestamps: true }  // when we create a message we have createdAt, updatedAt => time that this message send
);

const Message = mongoose.model("Message", messageSchema);

export default Message;