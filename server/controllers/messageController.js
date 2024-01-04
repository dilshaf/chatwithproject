import Chat from "../models/ChatModel.js";
import Message from "../models/MessageModel.js";


export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = new Message({
    chatId,
    senderId,
    text,
  });
  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await Message.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};








// export const addMessage = async (req, res) => {
//   const { chatId, senderId, text,image,username } = req.body;

//   try {
//     const chat = await Chat.findById(chatId);
  
//     if (!chat) {
//       return res.status(404).json({ error: 'chat not found' });
//     }

  

    
//     chat.members.push({ senderId, text,username,image });
//    let response = await chat.save();

//     res.json({ message: response, status:true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };