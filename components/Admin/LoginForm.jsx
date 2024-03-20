"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    if (response.error) {
      setMessage("error, try again");
    }
    router.refresh();
  };

  return (
    <form className="space-y-3 mt-[5rem]" onSubmit={handleSubmit}>
      <div className="max-w-md mx-auto p-4 bg-gray-800 rounded-md shadow-md">
        <h1>Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <div className="block">
              <input
                className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="block">
              <input
                className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        {message && (
          <h2 className="text-center text-red-500 my-3 font-bold">{message}</h2>
        )}
        <div className="grid place-content-center w-full">
          <button className="bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300 flex justify-center items-center mt-5">
            Login
          </button>
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        ></div>
      </div>
    </form>
  );
}
