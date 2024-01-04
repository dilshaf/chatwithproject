import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Share.css'
const Share = () => {
  const shareUrl = `http://localhost:7000/api/posts/get/${localStorage.getItem("id")}`; // Replace with your actual URL
  // const shareText = "Check out this amazing content!"; // Replace with your actual share text

  return (
    <div className="share-container" style={{
    textAlign:"center",backgroundColor: "#0077cc", height: "100vh"}}>
    <div className="share-box" style={{display:"flex",gap:"10rem"}}>
      <FacebookShareButton url={shareUrl} >
        <FaFacebook size={32} color="#3b5998" />
        <span>Facebook</span>
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} >
        <FaTwitter size={32} color="#1da1f2" />
        <span>Twitter</span>
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl} >
        <FaWhatsapp size={32} color="#25d366" />
        <span>Whatsapp</span>
      </WhatsappShareButton>

      <EmailShareButton url={shareUrl}  body="Check out this amazing content!">
        <FaEnvelope size={32} color="#0077cc" />
        <span>Email</span>
      </EmailShareButton>
      </div>


  
    </div>
  );
};

export default Share;
