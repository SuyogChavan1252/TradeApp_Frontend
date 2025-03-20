// import { useState } from "react";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     // Basic validation
//     if (!formData.username || !formData.email || !formData.password) {
//       setLoading(false);
//       setError("Please fill all fields.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3002/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       setLoading(false);

//       // Check for errors related to the response
//       if (!response.ok || !data.success) {
//         setError(data.message || "Signup failed. Please try again.");
//         return; // Prevent redirection if signup fails
//       }

//       // If signup is successful, store the token and redirect
//       localStorage.setItem("token", data.token);

//       // Redirect to home page after successful signup
//       window.location.href = "http://localhost:3000/";
//     } catch (error) {
//       setLoading(false);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>Create an Account</h2>

//         {error && <p style={styles.errorText}>{error}</p>}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Enter your Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
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
//             {loading ? "Signing up..." : "Signup"}
//           </button>
//         </form>

//         <p style={styles.footerText}>
//           Already have an account?{" "}
//           <a href="/login" style={styles.link}>
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// // ✅ Styles for the Signup Page
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

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

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
      position: "bottom-right",
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/signup`,
          { ...inputValue },
          { withCredentials: true }
        );
    
        console.log(data);
        const { success, message } = data;
        
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/login`; // Full-page redirect
          }, 2000);
        } else {
          handleError(message);
        }
      } catch (error) {
        console.log(error);
      }
    
      setInputValue({
        email: "",
        password: "",
      });
    };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Signup Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
            style={styles.input}
          />
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
        <ToastContainer/>
        <p style={styles.footerText}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
        </p>
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

export default Signup;
