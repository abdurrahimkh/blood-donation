import React from "react";
import { Navbar, Typography, Button, Menu, MenuHandler, MenuList, MenuItem, IconButton, Collapse } from "@material-tailwind/react";
import { ChevronDownIcon, Cog6ToothIcon, PowerIcon, Bars2Icon } from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navListItems } from "../constants";
import logo from "../assets/img/blood.png";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";
import { useSelector } from "react-redux";

// profile menu component
const profileMenuItems = [
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    link: "/donor/profile",
  },
  {
    label: "Log Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = useSelector((state) => state.authReducer.activeUser);

  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfileClick = () => {
    navigate("/donor/profile");
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button variant="text" color="blue-gray" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
          <Avatar name={user.name} size="33px" round />
          <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          let onClick;

          switch (label) {
            case "Edit Profile":
              onClick = handleProfileClick;
              break;
            case "Log Out":
              onClick = handleLogoutClick;
              break;
            default:
              onClick = () => {};
              break;
          }

          return (
            <MenuItem key={label} onClick={onClick} className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""}`}>
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal" color={isLastItem ? "red" : "inherit"}>
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

function NavList() {
  const user = useSelector((state) => state.authReducer.activeUser);

  return (
    <div className="flex flex-col text-black md:flex-row items-center uppercase md:space-x-6  text-sm">
      {navListItems.map(({ label, location }, key) => {
        if (user && label === "Login") {
          return;
        } else {
          return (
            <NavLink style={{ background: "white" }} key={key} to={location} className="relative w-max two text-[15px]">
              <span>{label}</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-secondary rounded-full "></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-secondary rounded-full"></span>
            </NavLink>
          );
        }
      })}
    </div>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const user = useSelector((state) => state.authReducer.activeUser);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (
    <Navbar className="mx-auto p-2 !rounded-none lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Link to="/">
          <div className="center hover:drop-shadow-md ">
            <img src={logo} alt="logo" height={20} width={40} />
            <p className="mr-4 ml-2 cursor-pointer py-1.5 font-black text-primary font-brooklyn">Blood Donation</p>
          </div>
        </Link>
        <div className=" hidden  lg:block" style={{ marginLeft: user ? "8rem" : "7rem" }}>
          <NavList />
        </div>
        <IconButton size="sm" color="blue-gray" variant="text" onClick={toggleIsNavOpen} className="ml-auto mr-2 lg:hidden">
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <form className="items-center hidden lg:flex" style={{ marginLeft: user ? "5rem" : "5rem" }}>
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2" placeholder="Search" />
          </div>
          <button type="submit" className="p-2 ml-0.5 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </form>
        {user && <ProfileMenu />}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
