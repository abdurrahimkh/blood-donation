import React from "react";
import { Navbar, Typography, Button, Menu, MenuHandler, MenuList, MenuItem, IconButton, Collapse } from "@material-tailwind/react";
import { ChevronDownIcon, Cog6ToothIcon, PowerIcon, Bars2Icon, ClockIcon } from "@heroicons/react/24/outline";
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
    label: "Donation History",
    icon: ClockIcon,
    link: "/donor/history",
  },
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

  const handleHistoryClick = () => {
    navigate("/donor/history");
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button variant="text" color="blue-gray" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
          <img className="w-8 h-8 object-center rounded-full" src={`${import.meta.env.VITE_BACKEND_IMGURL}/${user.image}`} alt="profile" />
          {/* <Avatar name={user.name} size="33px" round /> */}
          <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          let onClick;

          switch (label) {
            case "Donation History":
              onClick = handleHistoryClick;
              break;
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
        <div className=" hidden  lg:block" style={{ marginLeft: "24rem" }}>
          <NavList />
        </div>
        <IconButton size="sm" color="blue-gray" variant="text" onClick={toggleIsNavOpen} className="ml-auto mr-2 lg:hidden">
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {user && <ProfileMenu />}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
