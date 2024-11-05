import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-screen bg-white p-6 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl text-black font-bold">MyWebsite</div>
        <div>
          <Link
            href="/"
            className="text-md text-black hover:text-gray-500 px-3"
          >
            Home
          </Link>
          <Link
            href="/profiles"
            className="text-md text-black hover:text-gray-500 px-3"
          >
            Profile & Kontak
          </Link>
          <Link
            href="/services"
            className="text-md text-black hover:text-gray-500 px-3"
          >
            Layanan
          </Link>
          <Link
            href="/testimonials"
            className="text-md text-black hover:text-gray-500 px-3"
          >
            Klient & Testimonial
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
