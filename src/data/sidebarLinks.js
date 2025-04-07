import { FiGrid, } from 'react-icons/fi';
import { FaUser } from "react-icons/fa";
import { IoHome } from 'react-icons/io5';
import { HiHandRaised } from "react-icons/hi2";
import { GrAnnounce } from "react-icons/gr";


export const sideBarLinks = [
    {
        name: "Home",
        path: "/dashboard/home",
        icon: IoHome
    },
    {
        name: "Profile",
        path: "/dashboard/profile",
        icon: FaUser
    },
    {
        name: "Tasks",
        path: "/dashboard/tasks",
        icon: FiGrid
    },
    {
        name: "Queries",
        path: "/dashboard/queries",
        icon: HiHandRaised
    },
    {
        name: "Announcements",
        path: "/dashboard/announcements",
        icon: GrAnnounce
    }
]