'use client'
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation";
import axios from "axios";

const SignInPage = () => {  

  const { toast } = useToast()
  const router = useRouter()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

  const [user, setUser] = useState({
      email: "",
      password: "",
  })

  const onLogin = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
          const response = await axios.post("/api/login", user);
          console.log("Login success", response.data);
          toast({
            title: "Login success",
          })
          router.push("/");
          window.location.reload()
      } catch (error:any) {
          toast({
            title: "Login failed",
          })
      } 
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
          Sign In
        </h2>
        <form onSubmit={onLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-black"
              onChange={(e) => setUser({...user, email: e.target.value})}
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
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-gray-600 dark:text-gray-400">Don't have an account?</span>
          <Link href="/signup" className="text-blue-500 dark:text-blue-400 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
