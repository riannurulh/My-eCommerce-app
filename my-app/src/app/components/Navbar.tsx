import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import handleLogout from "../action/Logout";

export default function Navbar() {
  const kuki = cookies().has("id");
  return (
    <header className="bg-white shadow-md py-4 px-6 sm:px-12 flex items-center justify-between relative z-50">
      <Link href="/" aria-label="Home">
        <Image
          src="https://i.ibb.co.com/KN07gB3/Screenshot-2024-08-28-at-23-41-33-removebg-preview.png"
          alt="Company Logo"
          width={60}
          height={10}
        />
      </Link>

      <nav className="hidden lg:flex space-x-8">
        <Link
          href="/"
          className="text-gray-800 font-semibold hover:text-blue-600"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="text-gray-800 font-semibold hover:text-blue-600"
        >
          Products
        </Link>
        {kuki&&(

        <Link
          href="/wishlists"
          className="text-gray-800 font-semibold hover:text-blue-600"
        >
          Wishlists
        </Link>
        )}
      </nav>

      <div className="flex items-center space-x-4">
        {kuki ? (
          <form action={handleLogout}>
            <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Log out
            </button>
          </form>
        ) : (
          <>
            <Link
              href="/register"
              className="text-gray-800 font-semibold hover:text-blue-600"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Sign in
            </Link>
          </>
        )}
        <button id="toggleOpen" className="lg:hidden p-2">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
