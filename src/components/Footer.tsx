import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Footer Logo */}
          <div className="text-lg font-bold">
            <Link href="/">
              <span className="text-orange-600">Shopping</span>
              <span className="text-white">World</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 text-blue-500 hover:text-blue-700"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Facebook Icon */}
                <path
                  fillRule="evenodd"
                  d="M22 12C22 5.373 17.627 1 11 1S0 5.373 0 12c0 5.991 4.388 10.954 10.125 11.85v-8.385H7.078V12h3.047V9.797c0-3.02 1.793-4.7 4.53-4.7 1.313 0 2.686.236 2.686.236v2.967h-1.514c-1.492 0-1.953.928-1.953 1.88V12h3.328l-.531 3.465h-2.797V23.85C17.613 22.954 22 17.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 text-blue-400 hover:text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Twitter Icon */}
                <path
                  d="M23.643 4.937a9.682 9.682 0 01-2.825.775 4.932 4.932 0 002.165-2.724 9.726 9.726 0 01-3.106 1.184A4.916 4.916 0 0016.616 4c-2.732 0-4.948 2.263-4.948 5.047 0 .393.04.775.126 1.14A14.03 14.03 0 011.671 3.15a4.996 4.996 0 00-.67 2.54c0 1.752.862 3.302 2.177 4.21a4.891 4.891 0 01-2.239-.634v.06c0 2.444 1.683 4.492 3.917 4.951a4.93 4.93 0 01-2.23.086 4.951 4.951 0 004.617 3.503A9.867 9.867 0 010 21.43a13.94 13.94 0 007.548 2.208c9.142 0 14.307-7.803 14.307-14.578 0-.222-.004-.443-.014-.663A10.295 10.295 0 0024 4.59a9.82 9.82 0 01-2.357.647z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-gray-400">
          © 2024 Shopping World. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
