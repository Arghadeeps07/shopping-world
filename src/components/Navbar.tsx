"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modeToggle";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { ProductCtx } from "./Provider";

const Navbar = () => {
  const { cartItems, setCartItems } = useContext(ProductCtx);
  const [hasCookie, setHasCookie] = useState(false);
  const router = useRouter();
  const cartItem = cartItems.length;

  const { toast } = useToast();
  const onLogout = async () => {
    try {
      const response = await axios.get("/api/logout");
      toast({
        title: "Logout success",
      });
      router.refresh();
    } catch (error: any) {
      console.log("Logout failed", error.message);
      toast({
        title: error.message,
      });
    }
  };

  useEffect(() => {
    const checkCookie = async () => {
      try {
        const res = await axios.get("/api/check-cookie");
        setHasCookie(res.data.hasCookie);
      } catch (error) {
        console.error("Error checking cookie:", error);
        setHasCookie(false);
      }
    };
    checkCookie();
  }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold">Shopping World</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Home
          </Link>

          <div className="flex items-center space-x-4">
            {hasCookie ? (
              <Avatar>
                <AvatarImage src="/images/avatar.webp" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <Link
                href="/signup"
                className={buttonVariants({ variant: "outline" })}
              >
                Signup
              </Link>
            )}
            <Link href="/cart">
              <span className="px-2 flex items-center">
                <ShoppingCart />{" "}
                <span className="ml-1">{`(${cartItem})`}</span>
              </span>
            </Link>
            {hasCookie ? (
              <button
                className="px-2 p-1 bg-blue-600 text-white items-center rounded-lg mx-2"
                onClick={onLogout}
              >
                Logout
              </button>
            ) : null}
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Link href="/cart" className="flex items-center">
            <ShoppingCart />{" "}
            <span className="ml-1">{`(${cartItem})`}</span>
          </Link>
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">Shopping World</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    {hasCookie ? (
                      <button
                        className="px-2 py-1 bg-blue-600 text-white items-center rounded-lg"
                        onClick={onLogout}
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        href="/signup"
                        className={buttonVariants({ variant: "outline" })}
                      >
                        Signup
                      </Link>
                    )}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
