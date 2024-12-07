// Code Starts
import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Link } from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material/styles";

const LoginCard = styled(Card)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translateY(-50%)",
  width: "350px",
  padding: theme.spacing(2),
  boxShadow: theme.shadows[5],
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      const response = await axios.post("https://your-api-endpoint.com/login", {
        email,
        password,
      });
      alert("Login successful!");
    } catch (err) {
      setError("Invalid email.");
    }
  };

  return (
    <LoginCard>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Login
        </Typography>
        {error && (
          <Typography variant="body2" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          <Link href="/forgot-password" underline="hover">
            Forgot Password?
          </Link>
        </Typography>
      </CardContent>
    </LoginCard>
  );
};

export default Login;
// Code Ends
