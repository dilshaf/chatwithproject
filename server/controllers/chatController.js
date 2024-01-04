import Chat from "../models/ChatModel.js";





// export const createChat = async (req, res) => {
//   const {senderId,receiverId}=req.body
//     const newChat = new Chat({
//       members: [req.body.senderId, req.body.receiverId],
//     });
//     try {
//       const result = await newChat.save();

//       res.status(200).json(result);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };


export const createChat = async (req, res) => {
  const chatData = [];
  try {
    const { senderId, receiverIds } = req.body;

    // Validate that senderId and receiverIds are present
    if (!senderId || !receiverIds || !Array.isArray(receiverIds)) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    // Create a new chat object
    const newChat = new Chat({
     
      members: [senderId,...receiverIds], 
      
    });

   
    chatData.push(newChat);

   
    res.status(201).json({ message: 'Chat posted successfully', chat: newChat });

  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ message: error.message || null });
  }
};












  export const userChats = async (req, res) => { 
    const {userId}=req.params
    console.log(userId,'idddddddddddddddddd');
    try {
      const chat = await Chat.find({
        members: { $in: [req.params.userId] },
        
      });
      console.log(chat,'chat');
      
      res.status(200).json(chat);
      return true
    } catch (error) {
      res.status(500).json(error);
    }
  };



 
  

  export const findChat = async (req, res) => {
    
    try {
      const chat = await Chat.findOne({
        members: { $all: [req.params.firstId, req.params.secondId] },
      });
      res.status(200).json(chat)
    } catch (error) {
      res.status(500).json(error)
    }
  };