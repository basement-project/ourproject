import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">MyWebsite</div>
        <div>
          <Link href="/" className="text-gray-300 hover:text-white px-3">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white px-3">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white px-3">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
