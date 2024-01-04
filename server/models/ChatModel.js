import mongoose,{Schema,model} from 'mongoose'

const chatSchema= new Schema(
    {
       
        members:{
            type:Array
        },
    //    senderId:{
    //     type:String
    //    },
    //    receiverIds:{
    //     type:Array
    //    }

    },{timestamps:true}
)

const Chat=model('chat',chatSchema)
export default Chat