import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center w-[100vw] font-manrope"
      style={{ backgroundImage: "url('/Imagenew.png')"}}
    >
      <div className="w-[35%] h-[581px] bg-white p-6 shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-purple-950 mb-[5%]">
          Sign In
        </h2>
        <p className="text-center text-b mb-[20%] font-light">
          Welcome, Sign-in to continue
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-none focus:outline-none focus:ring-2 focus:ring-purple-500 font-manrope"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
          </div>

          <button
            type="submit"
            className="w-full rounded-none bg-purple-700 text-gray-400 py-3 square-md hover:bg-gray-300 transition"
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
