import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
    return (
        <footer className="bg-[#1A120B] text-gray-300 px-6 py-10 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand Info */}
                <div>
                    <h2 className="text-xl font-semibold text-white">SmartPC</h2>
                    <p className="mt-2 text-sm">
                        Your trusted partner for high-performance custom PCs, gaming gear, and tech accessories.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><a href="#" className="hover:text-white">Shop</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-8">
                © {new Date().getFullYear()} SmartPC. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;
