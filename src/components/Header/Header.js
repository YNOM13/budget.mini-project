import {NavLink} from "react-router-dom";
import React from "react";

export default function Header() {
    return(
        <header className=" shadow-lg shadow-indigo-500/50 bg-white sticky top-0 p-2
        flex items-center justify-between">
            <div className="uppercase font-bold ">
                budget.com
            </div>
            <nav className="flex justify-around basis-[400px] flex-row">
                    <div className="m-2">
                        <NavLink
                            className = { navData => navData.isActive ? "text-blue-900 font-bold " +
                                "text-[13px] uppercase"
                                : "text-blue-500 font-bold uppercase text-[13px]" }
                            to="/*">Home</NavLink>
                    </div>
                    <div className="m-2">
                        <NavLink
                            className = { navData => navData.isActive ? "text-blue-900 font-bold " +
                                "text-[13px] uppercase"
                                : "text-blue-500 font-bold uppercase text-[13px]" }
                            to="/statistics">Statistics</NavLink>
                    </div>
                    <div className="m-2">
                        <NavLink
                            className = { navData => navData.isActive ? "text-blue-900 font-bold " +
                                "text-[13px] uppercase"
                                : "text-blue-500 font-bold uppercase text-[13px]" }
                            to="/about">About</NavLink>
                    </div>
            </nav>
        </header>
    )
}