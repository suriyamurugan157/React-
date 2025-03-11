import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Function to validate inputs
  const validateInputs = () => {
    let isValid = true;
    let newErrors = { email: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters, include an uppercase letter, a number, and a special character.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      navigate("/trip-details");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center w-[100vw] font-manrope"
      style={{ backgroundImage: "url('/Imagenew.png')" }}
    >
      <div className="w-[35%] h-[600px] bg-white p-6 shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-purple-950 mb-[5%]">
          Sign In
        </h2>
        <p className="text-center text-b mb-[15%] font-light">
          Welcome, Sign-in to continue
        </p>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              className="w-full mt-5 p-3 border rounded-none focus:outline-none focus:ring-2 focus:ring-purple-500 font-manrope"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password *
            </label>
            <input
              type="password"
              className="w-full mt-1 p-3 border focus:outline-none focus:ring-2 focus:ring-purple-500 font-manrope"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-none  bg-purple-700 text-white py-3 square-md hover:bg-gray-300 transition"
          >
            Next
          </button>

          <p className="text-right text-sm text-red-500 cursor-pointer hover:underline mt-[3.5%]">
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
