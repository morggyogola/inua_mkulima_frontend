import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "./Button";
import { Button } from "./Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validCredentials = {
    email: "user@example.com",
    password: "password123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validCredentials.email && password === validCredentials.password) {
      alert("Login successful");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg w-3/4">
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/400"
            alt="Login"
            className="object-cover w-full h-full rounded-l-lg"
          />
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <Input
                type="text"
                placeholder="Enter email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;