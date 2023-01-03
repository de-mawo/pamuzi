import Image from "next/image";
import Link from "next/link";
import { HiCheckBadge,  HiOutlineTruck,  HiOutlineWifi,  HiStar } from "react-icons/hi2";
import { MdOutlineDinnerDining, MdOutlineFreeBreakfast, MdOutlineLocalLaundryService, MdOutlineLunchDining, MdOutlinePark, MdOutlinePool } from "react-icons/md";

type Props ={
  list: Listing
}

const ListingCard = ({list}: Props) => {
  return (
    <Link
      className="flex flex-col rounded-lg  shadow-2xl hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out cursor-pointer"
      href={`/chef/${list.slug}`}
    >
      <Image
        src={list.banner_img}
        alt="chefy"
        width={360}
        height={200}
        className="h-56 w-full object-cover rounded-t-lg "
      />

      <div className="flex-1 flex  flex-col p-5 ">
        <div className="flex justify-between items-center">
          <h2 className="font-bold  "> {list.title} </h2>
          <div className="flex items-center">
           <span className="text-sm">{list.rating}  </span>  <HiStar className="pl-1 mb-1 text-neon-carrot-500"/>
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-3">
         <span>{list.parking && <HiOutlineTruck/> }</span>
         <span>{list.wifi && <HiOutlineWifi/> }</span>
         <span>{list.pool && <MdOutlinePool/> }</span>
         <span>{list.breakfast && <MdOutlineFreeBreakfast/> }</span>
         <span>{list.lunch && <MdOutlineLunchDining/> }</span> 
         <span>{list.lunch && <MdOutlineDinnerDining/> }</span>
         <span>{list.laundry && <MdOutlineLocalLaundryService/> }</span>
         <span>{list.garden && <MdOutlinePark/> }</span>
        </div>
        <div className="flex items-center space-x-3 mt-3">
          <p>{list.country}</p>, <p>{list.location}</p>
        </div>

      </div>
    </Link>
  )
}

export default ListingCard