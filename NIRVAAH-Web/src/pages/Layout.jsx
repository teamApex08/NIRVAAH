import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.jsx";

function Layout() {
  const navClass = ({ isActive }) =>
    `block px-4 py-3 rounded-lg transition ${isActive
      ? "bg-gray-900 text-white"
      : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <Sidebar />


      {/* Main Area */}
      <div className="flex-1 min-w-0 flex flex-col">

        {/* Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

          {/* Page / App Title */}
          <h2 className="text-lg font-semibold text-gray-900">
            Dashboard
          </h2>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">
              🔔
            </button>

            <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center">
              G
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default Layout;