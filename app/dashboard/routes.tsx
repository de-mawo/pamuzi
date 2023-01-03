import { HiOutlineSquares2X2, HiOutlineUserGroup , HiOutlineInboxArrowDown, HiOutlineCog6Tooth, HiOutlineShoppingBag, HiOutlineTruck, HiOutlineClipboard, HiOutlineIdentification} from "react-icons/hi2";


export const AdminRoutes = [
    { title: "Dashboard", url: "/dashboard/admin", icon: <HiOutlineSquares2X2 className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Listings", url: "/dashboard//admin/listings", icon: <HiOutlineClipboard  className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Bookings", url: "/dashboard//admin/bookings", icon: <HiOutlineShoppingBag className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Users", url: "/dashboard/admin/users", icon: <HiOutlineUserGroup className="h-6 w-6  mr-4 shrink-0" /> },
    { title: "Messages", url: "/dashboard/admin/messages", icon: <HiOutlineInboxArrowDown className="h-6 w-6 mr-4 shrink-0" /> },
    { title: "Vendors", url: "/dashboard/admin/vendors", icon: <HiOutlineIdentification className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Deliveries", url: "/dashboard/admin/deliveries", icon: <HiOutlineTruck  className="h-6 w-6 mr-4 shrink-0"/> },
    { title: "Settings", url: "/dashboard/admin/settings", icon: <HiOutlineCog6Tooth className="h-6 w-6 mr-4 shrink-0"/> },

]


export const UserRoutes = [
    
]