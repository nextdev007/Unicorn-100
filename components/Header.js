"use client";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Button, Drawer, Select, Space } from "antd";
import { useRouter } from "next/navigation";

const { Option } = Select;
const Header = () => {
  const router = useRouter();
  const isLoggedIn = false;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const adminLoginFunction = () => {
    router.push("/v1/admin/AdminLogin");
  };

  return (
    <div className="shadow-lg px-4 bg-white">
      <header className="flex justify-between max-w-7xl mx-auto items-center py-4">
        {/* Logo */}
        <div>
          <p className="">
            <span className="text-red-500 font-bold text-2xl">U</span>
            <span className="text-[#660066]">NICORN-100</span>
          </p>
        </div>

        {/* Menu Items */}
        <div className="md:flex gap-x-4 text-blue-900 font-medium hidden">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/team">TEAM</Link>
          <Link href="/contact">CONTACT</Link>
        </div>

        {/* Login or Logout */}
        <div className="hidden md:flex">
          {isLoggedIn ? (
            <div>
              <p>Rohit Patel</p>
              <p>Logout</p>
            </div>
          ) : (
            <div className=" flex gap-4">
              <div
                className="py-2 px-6 bg-[#000080] text-white rounded-md font-bold first-letter:text-red-400 cursor-pointer"
                onClick={adminLoginFunction}
              >
                Admin Login
              </div>

              <div className="py-2 px-6 bg-[#000080] text-white rounded-md font-bold first-letter:text-red-400">
                User Login
              </div>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <Button type="primary" onClick={showDrawer} className="bg-blue-400">
            Menu
          </Button>

          <Drawer
            title="Select Menu Items"
            width={400}
            onClose={onClose}
            open={open}
            bodyStyle={{
              paddingBottom: 80,
            }}
            extra={
              <Space>
                <button
                  onClick={onClose}
                  className="bg-red-400 p-2 rounded-md text-white font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={onClose}
                  className="bg-green-400 p-2 rounded-md text-white font-bold "
                >
                  Submit
                </button>
              </Space>
            }
          >
            {/* Make Drawer content */}

            <div className="flex flex-col gap-y-6 text-blue-900">
              <Link href="/" onClick={onClose}>
                HOME
              </Link>
              <Link href="/about" onClick={onClose}>
                ABOUT
              </Link>
              <Link href="/services" onClick={onClose}>
                SERVICES
              </Link>
              <Link href="/team" onClick={onClose}>
                TEAM
              </Link>
              <Link href="/contact" onClick={onClose}>
                CONTACT
              </Link>
            </div>
          </Drawer>
        </div>
      </header>
    </div>
  );
};

export default Header;
