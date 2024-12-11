
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-[60px] flex justify-between  px-12   items-center p-4  bg-black gap-x-10">
      <div className=" text-4xl font-bold text-gray-300 font-sans">SD</div>
      <div className=" flex justify-center   items-center  bg-black gap-x-12">

      {NavbarData.map((link, idx) => (
        <NavLink
        key={idx}
        to={link.path}
        className={({ isActive }) =>
          isActive
        ? "text-blue-500 font-semibold text-xl"
        : "text-white font-medium text-xl"
      }
      >
          {link.title}
        </NavLink>
      ))}
      </div>
    </div>
  );
};

export default Navbar;
