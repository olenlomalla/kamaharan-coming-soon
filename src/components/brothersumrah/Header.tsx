import { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title = "Brothers Umrah" }) => {
  return (
    <header className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/brothersumrah" className="hover:underline">
                Brothers Umrah
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
