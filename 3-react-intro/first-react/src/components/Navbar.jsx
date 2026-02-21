const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 navbar-blur transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold"
            aria-label="Navigate to home"
          >
            <span className="gradient-text">Farrel</span>
          </a>

          <ul className="hidden md:flex space-x-12 text-sm font-medium">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a href="#work" className="text-gray-400 hover:text-white transition">
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            className="hidden md:block px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Let's Connect
          </a>

          <button
            id="mobile-toggle"
            className="md:hidden text-white"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden pt-6 pb-4">
          <a
            href="#home"
            className="block py-3 text-gray-400 hover:text-white transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-3 text-gray-400 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#work"
            className="block py-3 text-gray-400 hover:text-white transition"
          >
            Work
          </a>
          <a
            href="#contact"
            className="block py-3 text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
