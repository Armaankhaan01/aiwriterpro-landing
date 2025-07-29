"use client";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <button
              onClick={() => router.push("/")}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              AIWriterPro
            </button>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing content creation with AI-powered writing tools.
              Create better content faster than ever before.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/Armankhaan01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) - @Armankhaan01"
                title="X (Twitter)"
                className="inline-flex"
              >
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm" />
              </a>

              <a
                href="https://www.linkedin.com/in/armankhaan01/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn - Arman Khan"
                title="LinkedIn"
                className="inline-flex"
              >
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-sm" />
              </a>

              <a
                href="https://github.com/armaankhaan01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub - armaankhaan01"
                title="GitHub"
                className="inline-flex"
              >
                <Github className="w-6 h-6 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 rounded-sm" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => router.push("/")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/pricing")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AIWriterPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
