import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const message = `Hi Renuka, I am interested in your makeup services`;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Sai Sree Makeup Studio"
                className="h-12 w-12 rounded-full object-cover"
              />
            </Link>

            <Link to="/">
              <h1>
                <span
                  style={{
                    color: "#0F1C2E",
                    textShadow: "1px 1px #C78A3B",
                    fontSize: "1.25em",
                  }}
                >
                  Sai Sree
                </span>{" "}
                Makeup Studio
              </h1>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition ${
                      isActive
                        ? "text-[#D9B15A] font-semibold shadow p-2 rounded-3xl "
                        : "text-[#0F1C2E] hover:text-[#D9B15A]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href={`https://wa.me/919951743400?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#D9B15A] px-5 py-2 font-medium text-white transition hover:scale-105"
              >
                Book Now
              </a>
            </nav>

            {/* Mobile Button */}
            <button onClick={() => setIsOpen(true)} className="md:hidden">
              <HiMenuAlt3 size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="font-semibold text-[#0F1C2E]">Menu</h2>

                <button onClick={() => setIsOpen(false)}>
                  <HiX size={28} />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-lg ${
                        isActive ? "text-[#D9B15A]" : "text-[#0F1C2E]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <a
                  href={`https://wa.me/919951743400?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-full bg-[#D9B15A] px-6 py-3 text-center text-white"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
