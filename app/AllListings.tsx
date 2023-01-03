import { ListingsData } from "../data/ListingsData";
import ListingCard from "./ListingCard";

const AllListings = () => {
  return (
    <section className="grid grid-cols-1 mx-12 my-32 md:grid-cols-2  md:mx-24 lg:grid-cols-4 gap-10">
      {ListingsData.map((list) => (
        <ListingCard key={list._id} list={list} />
      ))}
    </section>
  );
};

export default AllListings;
