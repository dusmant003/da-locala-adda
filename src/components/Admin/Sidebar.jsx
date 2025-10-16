import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  UtensilsCrossed,
  ShoppingBag,
  Bike,
  Users,
  UserCircle,
  Bell,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  // 🧩 Sidebar Menu Config
  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "admin/dashboard",
    },
    {
      title: "Menu",
      icon: UtensilsCrossed,
      children: [
        { name: "Add Menu", path: "/admin/menu/add" },
        { name: "View Menu", path: "/admin/menu/view" },
        { name: "Categories", path: "/admin/menu/category" },
      ],
    },
    {
      title: "Orders",
      icon: ShoppingBag,
      children: [
        { name: "All Orders", path: "/admin/orders/all" },
        { name: "Pending Orders", path: "/admin/orders/pending" },
        { name: "Delivered Orders", path: "/admin/orders/delivered" },
      ],
    },
    {
      title: "Delivery",
      icon: Bike,
      children: [
        { name: "Delivery Staff", path: "/admin/delivery/staff" },
        { name: "Assign Orders", path: "/admin/delivery/assign" },
        { name: "Track Delivery", path: "/admin/delivery/track" },
      ],
    },
    {
      title: "Staff",
      icon: Users,
      children: [
        { name: "Add Staff", path: "/admin/staff/add" },
        { name: "View Staff", path: "/admin/staff/view" },
      ],
    },
    {
      title: "Customers",
      icon: UserCircle,
      children: [
        { name: "All Customers", path: "/admin/customers/all" },
        { name: "Feedbacks", path: "/admin/customers/feedback" },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      children: [
        { name: "Create", path: "/admin/notifications/create" },
        { name: "View All", path: "/admin/notifications/view" },
      ],
    },
    {
      title: "Analytics",
      icon: BarChart3,
      children: [
        { name: "Sales Report", path: "/admin/analytics/sales" },
        { name: "Top Items", path: "/admin/analytics/top" },
      ],
    },
    {
      title: "Settings",
      icon: Settings,
      children: [
        { name: "Profile", path: "/admin/settings/profile" },
      ],
    },
  ];

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <aside className="w-64 bg-gray-900 text-gray-100 h-screen p-4 flex flex-col">
      <div className="text-2xl font-bold text-center mb-6">
        The Local Adda
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(
            item.path || item.children?.[0]?.path || ""
          );
          const isOpen = openDropdown === item.title;

          return (
            <div key={i}>
              {/* 🔹 Main menu button */}
              <button
                onClick={() =>
                  item.children ? toggleDropdown(item.title) : null
                }
                className={`flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-800 ${
                  isActive ? "bg-gray-800" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} />
                  <span>{item.title}</span>
                </div>
                {item.children && (
                  <span>
                    {isOpen ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </span>
                )}
              </button>

              {/* 🔻 Dropdown items */}
              {item.children && isOpen && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.children.map((child, idx) => (
                    <Link
                      key={idx}
                      to={child.path}
                      className={`block p-2 rounded-lg text-sm hover:bg-gray-800 ${
                        location.pathname === child.path
                          ? "bg-gray-800 text-white"
                          : "text-gray-300"
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="mt-auto text-center text-xs text-gray-500">
        © 2025 The Local Adda
      </div>
    </aside>
  );
};

export default Sidebar;
