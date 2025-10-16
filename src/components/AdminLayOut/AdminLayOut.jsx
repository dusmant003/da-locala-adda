import { Outlet } from "react-router-dom";
import Navbar from "../Admin/Navbar";
import Sidebar from "../Admin/Sidebar";

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="p-4 overflow-y-auto flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
