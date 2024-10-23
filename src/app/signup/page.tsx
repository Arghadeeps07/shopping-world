"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const SignUpPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSignup = async (e: React.FormEvent) => {
    console.log(user);

    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", user);
      console.log("Signup success", response.data);
      toast({
        title: "Signup success",
      });
      router.push("/signin");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast({
        title: error.message,
      });
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
          Sign Up
        </h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-black"
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-black"
              placeholder="Username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-black"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {buttonDisabled ? (
            <div className="text-blue-800 dark:text-blue-400 items-center">
              Fill up the form to register
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
              onClick={onSignup}
            >
              Sign Up
            </button>
          )}
        </form>

        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
          <div className="text-black dark:text-white font-semibold">Register</div> 
          Having an account?{" "}
          <Link href="/signin" className="text-blue-600 dark:text-blue-400">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
