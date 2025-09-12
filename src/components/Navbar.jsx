/*const Navbar = () => {
    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</h1>
            </div>
            <ul className=" flex items-center gap-10 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 
            -top-10 opacity-0 md:opacity-100 md:top-0">
                <li>
                    <a href="#" className="text-lg font-medium">Beranda</a>
                </li>
                <li>
                    <a href="#" className="text-lg font-medium">Tentang</a>
                </li>
                <li>
                    <a href="#" className="text-lg font-medium">Proyek</a>
                </li>
                <li>
                    <a href="#" className="text-lg font-medium">Kontak</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar */

import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 150) {
            setActive(true);
        } else {
            setActive(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between">
        <div className="logo">
            <h1 className="text-3xl font-bold  text-white p-1 md:bg-transparent 
            md:text-white">My Portfolio</h1>
        </div>
        <ul
         className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 
        -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 
        rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-50 ${
            active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
        >
            <li>
                <a href="#beranda" className="sm:text-lg text-base font-medium
                 hover:text-blue-600 transition-colors duration-300">Beranda</a>
            </li>
            <li>
                <a href="#tentang" className="sm:text-lg text-base font-medium
                 hover:text-blue-600 transition-colors duration-300">Tentang</a>
            </li>
            <li>
                <a href="#proyek" className="sm:text-lg text-base font-medium
                hover:text-blue-600 transition-colors duration-300">Proyek</a>
            </li>
            <li>
                <a href="#kontak" className="sm:text-lg text-base font-medium
                hover:text-blue-600 transition-colors duration-300">Kontak</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar