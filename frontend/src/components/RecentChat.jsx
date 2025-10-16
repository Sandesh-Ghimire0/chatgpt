import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function RecentChat({ item }) {
    return (
        <li>
            <NavLink
                to={`/home/${item.thread_id}`}
                className={({ isActive }) =>
                    `block px-4 py-2 text-sm cursor-pointer rounded-md ${
                        isActive
                            ? "bg-gray-300 text-black"
                            : "text-gray-700 hover:bg-gray-200"
                    }`
                }
            >
                {item.title.length > 30
                    ? item.title.substring(0, 30) + "..."
                    : item.title}
            </NavLink>
        </li>
    );
}

export default RecentChat;
