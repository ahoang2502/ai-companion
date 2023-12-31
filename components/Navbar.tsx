"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import MobileSidebar from "./MobileSidebar";

const font = Poppins({ weight: "600", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="fixed h-16 w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary ">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary ",
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-3 ">
        <Button size="sm" variant="premium">
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>

        <ThemeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
