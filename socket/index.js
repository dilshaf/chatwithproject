const mongoose = require("mongoose")


//MONGODB CONNECT
const connect=async()=>{
  try {
      await mongoose.connect('mongodb://127.0.0.1:27017/media')
      console.log("Database connected");
  } catch (error) {
      console.log(error.message);
      
  }
}
connect();


const io = require("socket.io")(8800, {
    cors: {
      origin: "http://localhost:5173",
    },
  });
  
  let activeUsers = [];    //users
  
  io.on("connection", (socket) => {
    // add new User

    socket.on("connect_friends",async(data,callback)=>{
      // console.log(data,'dataconnectfrnds')
      const response = await mongoose.connection.collection("mssage_collection").find({you:data}).toArray()
      callback(response)
    })
    

    socket.on("new-user-add", async(newUserId) => {  //on =>something take frm other side
      // console.log(newUserId,'v')

      let response = await mongoose.connection.collection("mssage_collection").find({reciver:newUserId.reciver}).toArray();
      if(response.length > 0){
        console.log('already user connected')
      }else{

      // .then((res)=>{
        // res ? 

       await mongoose.connection.collection("mssage_collection").insertOne(newUserId).then((res)=>{
          console.log(res)
        })
      }

      

      
      // socket.emit("chat_container",{name:'newUserId'})
      // console.log(newUserId,'NEW USER I')
// return true
      // if user is not added previously
      // if (!activeUsers.some((user) => user.userId === newUserId)) { 
      //    //check already user
      //   activeUsers.push({ userId: newUserId, socketId: socket.id }); //push if not user
      //   console.log("New User Connected", activeUsers);   //in this get userId,socketId
      // }
      // send all active users to new user
      io.emit("get-users", activeUsers);  //emit=>something take towards other side
    });

    socket.on("chat_container",(name)=>{
      const arr = []
      arr.push(name)
      console.log(arr,'name')
    })

  
    socket.on("disconnect", () => {
      // remove user from active users
      activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
      console.log("User Disconnected", activeUsers);
      // send all active users to all users

      io.emit("get-users", activeUsers);
    });

    
  
    // send message to a specific user
    socket.on("send-message", (data) => {
      const { receiverId } = data;
      const user = activeUsers.find((user) => user.userId === receiverId);
      console.log("Sending from socket to :", receiverId)
      console.log("Data: ", data)
      if (user) {
        io.to(user.socketId).emit("recieve-message", data);
      }
    });
  });
  