import React,{useContext,useEffect, useState} from "react";
import { AuthContext } from "../../context/AuthContext";
import './FriendsList.scss'
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SendIcon from '@mui/icons-material/Send';
// import { Avatar } from "@mui/material";
import Avatar from '@mui/material/Avatar';

const FriendsList = ({ followers }) => {
//   const { username, image } = followers;
const { selectedPost,refreshUseEffectMethod, refresh} = useContext(AuthContext);
// const [refresh,setRefresh]=useState(false)

useEffect(() => {

  console.log("Component mounted or refreshed");
}, [refreshUseEffectMethod]);
  return (
    <div
      // style={{
      //   marginLeft: "5rem",
      //   marginTop: "4rem",
      //   display: "grid",
      //   gridRowGap: "10px",
      // }}
    className="frnd"> 
      {selectedPost ? null :""}
    
      {
        followers && followers.map((items)=>{
          
            return(
                <>
               <article class="leaderboard">

  <main class="leaderboard__profiles">
    <article class="leaderboard__profile">
    <Avatar
      alt="Mark Zuckerberg"
      src={`http://localhost:7000/uploads/${items.image}`}
      className="leaderboard__picture"
    />
      <span class="leaderboard__name" >{items.username}</span>
      <PersonAddIcon fontSize="default" color="primary" />
    </article>
    
    
    
    
    
 
  </main>
</article>


                </>
            )
        })
      }
    
      
    </div>
  );
};

export default FriendsList;
