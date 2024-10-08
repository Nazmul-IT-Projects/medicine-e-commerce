"use client";
import { useAppSelector } from "@/app/GlobalRedux/hooks";
import Link from "next/link";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const currentUser = useAppSelector((state: any) => state.user.currentUser);

  // Add a conditional check to ensure currentUser exists before accessing _id and role
  const userId = currentUser ? currentUser._id : "No user available";
  const userRole = currentUser ? currentUser.role : null;

  console.log(userId);

  return (
    <div className="flex h-screen bg-gray-100 mt-12 p-9">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white">
        {/* Sidebar Content */}
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          {/* Conditionally render sidebar links based on user role */}
          {userRole === "admin" || userRole === "superAdmin" ? (
            <ul className="mt-4">
              <li className="mb-2">
                <Link href="/dashboard" className="hover:text-gray-300">
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/create" className="hover:text-gray-300">
                  Create
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/category-create" className="hover:text-gray-300">
                  Category
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/shipping" className="hover:text-gray-300">
                  Shipping Info
                </Link>
              </li>
            </ul>
          ) : (
            <div className="mt-4 text-white">No admin access</div>
          )}
          {userRole === "superAdmin" && (
            <Link href="all-users" className="mt-4 text-white">
              All Users
            </Link>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Content wrapper */}
        <div className="p-4">
          {/* Page title */}
          <h2 className="text-2xl font-semibold">{children}</h2>

          {/* Main content goes here */}
          <div className="mt-4">{/* Your main content components */}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
