// import axios from "axios";
// import React, { useState,useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { successToast, errorToast } from "../../Toastify/Toast";
// import './SignIn.css'

// export default function Example() {
//   const navigate = useNavigate();


//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [formdata, setFormData] = useState({
//     email: "",
//     password: "",
//   });
  
//   const handleSubmitData = async (e) => {
//     e.preventDefault();

   
//     try {
//       const response = await axios.post(
//         "http://localhost:7000/api/admin/login",
//         formdata
//       );
     
//       if (response.data) {
//         const { result, token } = response.data;

//         localStorage.setItem("token", token);
//         localStorage.setItem("username", result.username);
//         localStorage.setItem("id", result._id);
//         successToast("logged in");
//         navigate("/home");
//       }
//     } catch (error) {
//       errorToast(error.response.data.message);
//     }
//   };

  
//   //   if (e.target.name === "email") {
//   //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //     if (Boolean(e.target.value.match(emailRegex))) {
//   //       setStateError(false);
//   //       setMessage("");
//   //     } else {
//   //       setStateError(true);
//   //       setMessage("Invalid email address");
//   //     }
//   //   } else if (e.target.name === "password") {
//   //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//   //     if (Boolean(e.target.value.match(passwordRegex))) {
//   //       setStateError(false);
//   //       setMessage("");
//   //     } else {
//   //       setStateError(true);
//   //       setMessage("Invalid password");
//   //     }
//   //   }
//   //   setFormData({ ...formdata, [e.target.name]: e.target.value });
//   // };


//   const handleInputChange = (e) => {
//     setFormData({ ...formdata, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
   

//     if (formdata.email) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!formdata.email.match(emailRegex)) {
//         setEmailError('Invalid email address');
//       } else {
//         setEmailError('');
//       }
//     }
//     if (formdata.password) {
//       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//       if (!formdata.password.match(passwordRegex)) {
//         setPasswordError("Invalid password. Password must have at least 8 characters,oneuppercase letter, one lowercase letter, and one digit");
//       } else {
//         setPasswordError('');
//       }
//     }


  
    
//   }, [formdata]);
//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"   style={{
//         backgroundImage: 'url("https://img.freepik.com/free-vector/colorful-icons-set-design_79603-1268.jpg?size=626&ext=jpg&ga=GA1.1.708491610.1695062581&semt=ais")',
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center',
//         width:"100rem" 
        
//       }}>
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
//                   <h2 style={{
//       fontStyle:" italic",
      
//       marginLeft: "-3rem",
//       color: "aliceblue",
      
//     }}>
//       Login
//     </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" style={{marginLeft:"25rem"}}>
//           <form
//             onSubmit={handleSubmitData}
//             className="space-y-6"
//             action="#"
//             method="POST"
//           >
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//                 style={{fontWeight: "900",
//                 fontStyle: "inherit",
//                 color: "darkblue",
//                 boxShadow: "purple 2px 1px 6px",
//                 width: "108px"}}
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   value={formdata.email}
//                   style={{ padding: "10px",
//                   border: "1px solid purple",
//                   boxShadow:" 13px 10px 15px purple",    backgroundColor: "blueviolet",color:"white"}}
//                   placeholder="Enter Your Email Address"
//                   onChange={handleInputChange}
//                 />
//                {emailError && <div style={{color:"red"}}>{emailError}</div>}
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                   style={{fontWeight: "900",
//                   fontStyle: "inherit",
//                   color: "darkblue",
//                   boxShadow: "purple 2px 1px 6px",
//                   width: "108px"}}
//                 >
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a
//                     href="#"
//                     className="font-semibold text-indigo-600 hover:text-indigo-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   value={formdata.password}
//                   style={{ padding: "10px",
//                   border: "1px solid purple",
//                   boxShadow:" 13px 10px 15px purple",    backgroundColor: "blueviolet",color:"white"}}
//                   placeholder="Enter your password"
//                   onChange={handleInputChange}
//                 />
// {passwordError && <div style={{color:"red"}}>{passwordError}</div>}
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 style={{padding: "10px",
//                 borderRadius: "58rem",
//                 backgroundColor:" darkmagenta"}}>
//                 Sign in
//               </button>
//             </div>

//             <Link to="/register" style={{textDecoration:"none"}}>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
//                 style={{padding: "10px",
//                 borderRadius: "58rem",
//                 backgroundColor:" darkmagenta",textDecoration:"none"}} >
//                 Register Now
//               </button>
//             </Link>
//           </form>
//         </div>

        
//       </div>


    

    
//     </>
//   );
// }




import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../../Toastify/Toast";
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmitData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7000/api/admin/login",
        formdata
      );

      if (response.data) {
        const { result, token } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("username", result.username);
        localStorage.setItem("id", result._id);
        successToast("logged in");
        navigate("/home");
      }
    } catch (error) {
      errorToast(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (formdata.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formdata.email.match(emailRegex)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
    if (formdata.password) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!formdata.password.match(passwordRegex)) {
        setPasswordError(
          "Invalid password. Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one digit"
        );
      } else {
        setPasswordError("");
      }
    }
  }, [formdata]);

  return (
    <div className="flex min-h-screen justify-center items-center bg-cover bg-center bg-no-repeat">
      <div className="bg-white p-8 rounded-md shadow-lg w-full md:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-800">
          Login
        </h2>

        <form onSubmit={handleSubmitData} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full border-2 border-purple-500 p-2 rounded-md"
              value={formdata.email}
              placeholder="Enter Your Email Address"
              onChange={handleInputChange}
            />
            {emailError && (
              <div className="text-red-500">{emailError}</div>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full border-2 border-purple-500 p-2 rounded-md"
              value={formdata.password}
              placeholder="Enter your password"
              onChange={handleInputChange}
            />
            {passwordError && (
              <div className="text-red-500">{passwordError}</div>
            )}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-500 focus:outline-none focus:ring focus:border-purple-300"
            >
              Sign in
            </button>
          </div>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-500 focus:outline-none focus:ring focus:border-purple-300"
            >
              Register Now
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
