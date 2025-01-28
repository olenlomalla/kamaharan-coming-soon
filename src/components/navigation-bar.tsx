"use client";

import { Link } from "react-router-dom"; // Change this line
import { Eye, Map, Heart, User } from "lucide-react";
import { Logo } from "./ui/Logo.tsx"; // Add .tsx extension
// import { Button } from "@/components/ui/button";

export function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              {" "}
              {/* Change href to to */}
              <Logo className="h-8 w-auto" />
            </Link>
            <Link
              to="/explore"
              className="flex items-center gap-2 text-[#424144]"
            >
              {" "}
              {/* Change href to to */}
              <Eye className="h-5 w-5" />
              <span>Explore</span>
            </Link>
          </div>

          {/* Rest of your navigation bar code... */}

          <div className="flex items-center gap-6">
            <Link
              to="/map"
              className="flex flex-col items-center text-xs text-gray-600"
            >
              {" "}
              {/* Change href to to */}
              <Map className="h-6 w-6" />
              <span>Map</span>
            </Link>
            <Link
              to="/saved"
              className="flex flex-col items-center text-xs text-gray-600"
            >
              {" "}
              {/* Change href to to */}
              <Heart className="h-6 w-6" />
              <span>Saved</span>
            </Link>
            <Link
              to="/profile"
              className="flex flex-col items-center text-xs text-gray-600"
            >
              {" "}
              {/* Change href to to */}
              <User className="h-6 w-6" />
              <span>You</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
