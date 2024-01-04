import React, { useState,useEffect, useContext } from 'react';
import './Postemp.css'
import axios from 'axios';
import { getUserById } from '../../services/apiService';
import { Link, useParams } from 'react-router-dom';
import { successToast } from '../../Toastify/Toast';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SendIcon from '@mui/icons-material/Send';
import { WhatsappShareButton } from 'react-share';
import { AuthContext } from '../../context/AuthContext';


const UserPost = ({refresh}) => {
  const [showComments, setShowComments] = useState(false);
  
  const [data,setData]=useState([])
  const [details,setDetails]=useState({})
  const [commentText, setCommentText] = useState("");
  const [privacy, setPrivacy] = useState('public');
  const { refreshUseEffectMethod } = useContext(AuthContext)
  // const [refresh, setRefresh] = useState(false);
  // let postId={_id}


  
  const handlePrivacyChange = (event) => {
    setPrivacy(event.target.value);
  };
  const handleUpdatePost = async (postid) => {
    try {
      const response = await axios.put(`http://localhost:7000/api/posts/put/${postid}`, {
        privacy,
        postid,
      });

      // Handle successful response, e.g., show a success message
      console.log('Post updated successfully:', response.data);
      
      if (privacy === 'public') {
        successToast('Post updated to public successfully!');
      } else if (privacy === 'private') {
        successToast('Post updated to private successfully!');
      }
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error updating post privacy:', error.message);
    }
  };
 
console.log(data,"llllllllllllllllllllllllllllll");
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  

  
  const handleCommentSubmit = async (postid) => {
    try {
      const userid = localStorage.getItem("id");
      if (!userid) {
        console.log("user not found");
        return;
      }
      let response = await axios.post(
        "http://localhost:7000/api/posts/comment",
        { userid, text: commentText, postid }
      );
      console.log(response, "commentresponse");
      setRefresh(!refresh);
      successToast("comment succesfully")
    } catch (error) {
      console.log(error.message);
    }
  };
  const commentFunction = (e) => {
    setCommentText(e.target.value);
  };


  const getPost=async(req,res)=>{
    try {
      let response=await axios.get(`http://localhost:7000/api/posts/get/${localStorage.getItem("id")}`)
      console.log(response,"res");
      setData(response.data)
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
      
    }
  }

  const fetchData = async()=>{
    const response = await getUserById()
    setDetails(response)
    // setRefresh(!refresh);
    console.log(response,'responseeeeeeeeeee');
  }

 

 

  useEffect(()=>{
    getPost()
    fetchData()
    

   },[refresh])


   const likePost=async(postid)=>{
    console.log(`  post ${postid}`);
  
      try {
        
        const userid = localStorage.getItem('id');
  
        if (!userid) {
          console.error('userid not found');
          return;
        }
  
        const response = await axios.post('http://localhost:7000/api/posts/like', { userid, postid })
          
    
  
        console.log(response,'likeresponse')
        successToast(response.data.message);
  
        getPost()
      } catch (error) {
        console.error('Error liking post:', error.message);
      }
    }
    
   
   
  
    
 

  return (
    <div style={{    marginLeft:" 13rem"}}  className='empost'>
      {
        data.map((items)=>{
          console.log(items,'itemskanan');
          
          const shareUrl = `http://localhost:7000/api/posts/get/${localStorage.getItem("id")}`;
          console.log(shareUrl,'url');
          // const shareText = `Check out this post: ${items.description}`;;
          return(
           
            <div  className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md mt-8">
        <div className="flex items-center mb-4">
          <img src={`http://localhost:7000/uploads/${details.image}`} alt="Profile Image" className="w-10 h-10 rounded-full mr-4" />
          
          <div>
            <h2 className="text-lg font-semibold">{details.username}</h2>
            <p className="text-gray-600">Posted by fffff on December 8, 2023</p>
          </div>
          







          <select
        id="privacyDropdown"
        value={privacy}
        onChange={handlePrivacyChange}
        onClick={()=>handleUpdatePost(items._id)}
        style={{marginLeft: "9rem",
          backgroundColor: "dodgerblue"}}
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
        
      </select>

      {/* <button onClick={()=>handleUpdatePost(items._id)}>Update Post Privacy</button> */}












        </div>
        <img src={`http://localhost:7000/uploads/${items.image}`} alt="Post Image" className="mb-4 rounded-lg w-full" />
        <div className="mb-4">
          <p className="text-gray-800">{items.description}</p>
          {/* <p>{items.privacy}</p> */}
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <div className="flex items-center" style={{display:"contents"}}>
            <div className="mr-4 flex items-center space-x-2">
              {/* <svg className="w-4 h-4 fill-current text-blue-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
              </svg> */}
            
              {/* <span > <i class="fa-regular fa-heart"  id="likeIcon"></i> Like 0</span> */}

              <span onClick={() => likePost(items._id)}>
                      <i
                        style={
                          items.likes.length > 0
                            ? { color: "red" }
                            : { color: "black" }
                        }
                        class="fa-solid fa-heart"
                      ></i>{" "}
                      Like {items.likes.length}
                    </span>
              
            </div>
            <div className="mr-4 flex items-center space-x-2">
              {/* <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
              </svg> */}
              <span onClick={toggleComments}><i class="fa-regular fa-comment"></i>Comment   {items.comments.length}</span>
            </div>
            <div className="mr-4 flex items-center space-x-2 ">
              {/* <svg className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
              </svg> */}


<span>
                {/* <Link to={`share/${items._id}`}>
                  <i className="fa-solid fa-share"></i> Share 0 */}
              <Link to={`/share/${items._id}`} style={{textDecoration:" none",
    color: "black" }}>
          
              <i className="fa-solid fa-share"></i>  Share 0
             
                </Link>
              </span>


            


            </div>
          </div>
          {/* <div className="text-sm">
            <span className="mr-2">42 Likes</span>
            <span className="mr-2">18 Comments</span>
            <span>7 Shares</span>
          </div> */}
        </div>

        {showComments && (
<div class="w-full max-w-md">
  
{items.comments.map((item) => {
console.log(details,'item');
  return(
    <>

       
           
            <div class="flex space-x-4 mb-4" style={{marginTop:"4rem"}}>
            <img src={`http://localhost:7000/uploads/${details.image}`} alt="Profile Image" className="w-10 h-10 rounded-full mr-4" />
                <div>
                
  <h3 class="font-semibold">
{item.username} 
</h3>
                    <p class="text-gray-600">{item.text}</p>


                    {/* <div>
                    <input type="text" value={text} onChange={handleTextChange}  style={{backgroundColor:"red"}}/>
      <button onClick={()=> handleUpdateComment(items._id,item._id)}>Update Comment</button>
                    </div> */}







                </div>
            </div>

       
            
      

           
           
        

        
      
       
    </>
  )
        

}

)}
     <div class="bg-white p-4 rounded-md shadow-md">
          
          <div class="flex space-x-4 mb-4">
              {/* <img src={`http://localhost:7000/uploads/${items.profilepic}`} alt="Your Profile Pic" class="w-10 h-10 rounded-full"/> */}
              <input type="text" placeholder="Add your comment..."  value={commentText}
                    onChange={commentFunction} class="w-full border border-gray-300 p-2 rounded-md"/>  <SendIcon
                    onClick={() => handleCommentSubmit(items._id)}
                    variant="contained"
                    color="primary" style={{marginTop:"1rem"}}>
                   
                  </SendIcon>
          </div>


       

      </div> 




</div>

  )}






      </div>
          )
        })
      }

      
    </div>
  );
};

export default UserPost;
