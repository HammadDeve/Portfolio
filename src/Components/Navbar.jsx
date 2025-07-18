import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll"; 

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      <div className="hidden md:flex gap-6 text-lg font-medium">
        <Link to="home" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:text-cyan-400 transition">
          Home
        </Link>
        <Link to="about" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:text-cyan-400 transition">
          About
        </Link>
        <Link to="skills" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:text-cyan-400 transition">
          Skills
        </Link>
        <Link to="experience" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:text-cyan-400 transition">
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:text-cyan-400 transition">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:text-cyan-400 transition">
          Contact
        </Link>
      </div>

      <div className="ml-6 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/muhammad-hammad-613318366" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition" />
        </a>
        <a href="https://www.instagram.com/hammad_bolte_69/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a href="https://x.com/Hammi7455?t=Ic603DHkRqH0iUdYR2YyNA&s=09" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="hover:text-white transition" />
        </a>
        <a href="https://github.com/HammadDeve" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
