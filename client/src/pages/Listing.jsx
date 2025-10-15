import React from "react";
import { useAppContext } from "../context/AppContext";
import Item from "../components/Item";

const Listing = () => {
  const { properties } = useAppContext();
  const sortOptions = ["Relevant", "Low to High", "High to low"];

  // const formatPrice = (amount) =>
  //   new Intl.NumberFormat("en-NG", {
  //     style: "currency",
  //     currency: "NGN",
  //   }).format(amount);

  const propertytypes = [
    "House",
    "Apartment",
    "Villa",
    "Penthouse",
    "Townhouse",
    "Commercial",
    "Land Plot",
  ];

  const priceRange = [
    "0 to 100000",
    "100000 to 500000",
    "500000 to 1000000",
    "1000000 to 10000000",
  ];

  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white pt-28 py-16">
      <div className="max-padd-container flex flex-col sm:flex-row gap-8 mb-16">
        {/* Left Filters */}
        <div className="bg-secondary/10 ring-1 ring-slate-900/5 p-4 sm:min-w-60 sm:min-h-[600px] rounded-xl">
          {/* Sort by Price */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-3">Sort By</h5>
            <select
              name=""
              id=""
              className="bg-secondary/10 border border-slate-900/10 outline-none text-gray-300 medium-14 h-8 w-full rounded px-2"
            >
              {sortOptions.map((sort, index) => (
                <option key={index} value="sort">
                  {sort}
                </option>
              ))}
            </select>
          </div>
          {/* Property Type */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-4">Property Type</h5>
            {propertytypes.map((type) => (
              <label htmlFor="" className="flex gap-2 medium-14" key={type}>
                <input type="checkbox" />
                {type}
              </label>
            ))}
          </div>
          {/* Price Range */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-4">Price Range</h5>
            {priceRange.map((price) => (
              <label htmlFor="" className="flex gap-2 medium-14" key={price}>
                <input type="checkbox" />₦{price}
              </label>
            ))}
          </div>
        </div>
        {/* Right Side Filter */}
        <div className="min-h-[97vh] overflow-y-scroll rounded-xl">
          {properties.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {properties.map((property)=> (
                <Item key={property._id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-20">No matches found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listing;
