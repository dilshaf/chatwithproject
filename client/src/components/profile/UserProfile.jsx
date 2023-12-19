import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Searchsession from './Searchsession';
import FriendsList from './FriendsList';
import axios from 'axios'
import { getUserById } from '../../services/apiService';

export default function Basic() {
 
  
  const [data,setData] = useState({})

  const fetchData = async()=>{
    const response = await getUserById()
    setData(response)
    console.log(response,'responseeeeeeeeeee');
  }

  useEffect(()=>{
    fetchData()
  },[])


 


  
  return (
    <div className="vh-100" style={{marginLeft: '-8rem'}}  >
    
      <MDBContainer >
        <MDBRow className="justify-content-center" >
          <MDBCol md="9" lg="7" xl="5" className="mt-5" >
            <MDBCard style={{ borderRadius: '15px' }} >
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      
                      src={`http://localhost:5000/uploads/${data.image}`}
                      
                    
                      alt='Generic placeholder image'
                      fluid 
                      accept="image/*"/>
                      
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{data.username}</MDBCardTitle>
                    <MDBCardText>{data.email}</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
       
      <div>

      
      </div>

      <div>
        <FriendsList/>
      </div>

    </div>
  );
}