// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const response = await fetch("http://localhost:3002/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();
  //     setLoading(false);

  //     if (!response.ok || !data.success) {
  //       setError(data.message || "Login failed. Please try again.");
  //       return; // Prevent redirection on failure
  //     }

  //     localStorage.setItem("token", data.token);

  //     // ✅ Redirect to correct URL
  //     window.location.href = "http://localhost:3000/";
  //   } catch (error) {
  //     setLoading(false);
  //     setError("Something went wrong. Please try again.");
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3002/login",
  //       formData,
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );

  //     console.log("Response Data:", response.data); // ✅ Debug: Check what backend sends

  //     setLoading(false);

  //     if (!response.data.success) {
  //       setError(response.data.message || "Login failed. Please try again.");
  //       return;
  //     }

  //     window.location.href = "http://localhost:3000/";
  //   } catch (error) {
  //     setLoading(false);
  //     setError("Something went wrong. Please try again.");
  //     console.error("Login Error:", error);
  //   }
  // };

  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const response = await fetch("http://localhost:3002/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();
  //     setLoading(false);

  //     if (!response.ok || !data.success) {
  //       setError(data.message || "Login failed. Please try again.");
  //       return;
  //     }

  //     // ✅ Store the token in localStorage
  //     localStorage.setItem("token", data.token);
  //     console.log("Token Stored:", localStorage.getItem("token"));

  //     // ✅ Redirect to Dashboard
  //     window.location.href = "http://localhost:3000/";
  //   } catch (error) {
  //     setLoading(false);
  //     setError("Something went wrong. Please try again.");
  //     console.error("Login Error:", error);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const response = await fetch("http://localhost:3002/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();
  //     console.log("🔍 Backend Response:", data); // Debugging

  //     setLoading(false);

  //     if (!response.ok || !data.token) {
  //       setError(data.message || "Login failed. Please try again.");
  //       return;
  //     }

  //     localStorage.setItem("token", data.token);
  //     console.log("✅ Stored Token:", localStorage.getItem("token")); // Check if it's stored properly

  //     window.location.href = "http://localhost:3000/";
  //   } catch (error) {
  //     setLoading(false);
  //     setError("Something went wrong. Please try again.");
  //     console.error("❌ Login Error:", error);
  //   }
  // };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>Login</h2>

//         {error && <p style={styles.errorText}>{error}</p>}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <button type="submit" disabled={loading} style={styles.button}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p style={styles.footerText}>
//           Don't have an account?{" "}
//           <a href="/signup" style={styles.link}>
//             Signup here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// // ✅ Styles for the Login Page
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
//   card: {
//     width: "350px",
//     padding: "25px",
//     backgroundColor: "white",
//     borderRadius: "10px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//   },
//   heading: {
//     marginBottom: "15px",
//     fontSize: "22px",
//     color: "#333",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     fontSize: "14px",
//     outline: "none",
//   },
//   button: {
//     padding: "12px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//     transition: "0.3s",
//   },
//   errorText: {
//     color: "red",
//     fontSize: "14px",
//     marginBottom: "10px",
//   },
//   footerText: {
//     fontSize: "14px",
//     marginTop: "15px",
//     color: "#555",
//   },
//   link: {
//     color: "#007bff",
//     textDecoration: "none",
//     fontWeight: "bold",
//   },
// };

// export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/login`,
          { ...inputValue },
          { withCredentials: true }
        );
    
        console.log(data); //it prints 
        const { success, message } = data;
        
        if (success) {
          
          handleSuccess(message);
          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}`; // Full-page redirect
          }, 1000);
        } else {
          handleError(message);
        }
      } catch (error) {
        console.log("Axios Error:", error); // ✅ Debugging
        handleError(error.response?.data?.message || "Something went wrong!"); // ✅ Fix: Call handleError
      }
    
    
      setInputValue({
        email: "",
        password: "",
      });
    };
    

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
        <p style={styles.footerText}>
          Don't have an account? <Link to="/signup" style={styles.link}>Signup here</Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  card: {
    width: "350px",
    padding: "25px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "15px",
    fontSize: "22px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  label: {
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
  footerText: {
    fontSize: "14px",
    marginTop: "15px",
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;
