import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import PropertyImages from "../components/PropertyImages";
import { assets } from "../assets/data";

const PropertyDeatails = () => {
  const { properties } = useAppContext();
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const property = properties.find((property) => property._id === id);
    property && setProperty(property);
  }, [properties]);
  const formatPrice = (amount) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  return (
    property && (
      <div className="bg-gradient-to-r from-[#fffbee] to-white pt-28 py-16">
        <div className="max-padd-container">
          {/* Image */}
          <PropertyImages property={property} />
          {/* Container */}
          <div className="flex flex-col xl:flex-row gap-8 mt-6">
            {/* Left Side */}
            <div className="p-4 flex-2 rounded-xl border border-slate-900/10">
              <p className="flexStart gap-x-2">
                <img src={assets.pin} width={19} alt="" />
                <span className="">{property.address}</span>
              </p>
              <div className="flex justify-between flex-col sm:flex-row sm:items-end mt-3">
                <h3 className="h3">{property.title}</h3>
                <div className="bold-18">
                  {formatPrice(property.price.sale)} |{" "}
                  {formatPrice(property.price.rent)}/night
                </div>
              </div>
              <div className="flex justify-between items-start my-1">
                <h4 className="h4 text-secondary">{property.propertyType}</h4>
                <div className="flex items-baseline gap-2 text-secondary relative top-1.5">
                  <h4 className="bold-18 relative bottom-0.5 text-black">
                    5.0
                  </h4>
                  <img src={assets.star} alt="star Icon" width={18} />
                  <img src={assets.star} alt="star Icon" width={18} />
                  <img src={assets.star} alt="star Icon" width={18} />
                  <img src={assets.star} alt="star Icon" width={18} />
                  <img src={assets.star} alt="star Icon" width={18} />
                </div>
              </div>
              <div className="flex gap-x-4 mt-3">
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.bed} alt="facilitiesIcon" width={19} />
                  {property.facilities.bedrooms}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.bath} alt="facilitiesIcon" width={19} />
                  {property.facilities.bathrooms}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.car} alt="facilitiesIcon" width={19} />
                  {property.facilities.garages}
                </p>
                <p className="flexCenter gap-x-2 pr-4 font-[500]">
                  <img src={assets.ruler} alt="facilitiesIcon" width={19} />
                  {property.area}
                </p>
              </div>
              <div className="mt-6">
                <h4 className="h-4 mt-4 mb-1">Property Details</h4>
                <p className="mb-4">{property.description}</p>
              </div>
              <h4 className="h4 mt-6 mb-2">Amenities</h4>
              <div className="flex gap-3">
                {property.amenities.map((amenity, index) => (
                  <div className="" key={index}>
                    {amenity}
                  </div>
                ))}
              </div>
              {/* Form Check Availability */}
              <form
                action=""
                className="text-gray-500 bg-secondary/10 rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 max-w-md lg:max-w-full ring-1 ring-slate-900/5 relative mt-10"
              >
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <img src={assets.calendar} alt="calenderIcon" width={20} />
                    <label htmlFor="checkInDate">Check In</label>
                  </div>
                  <input
                    type="date"
                    id="checkInDate"
                    className="rounded border bg-secondary/10 border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <img src={assets.calendar} alt="calenderIcon" width={20} />
                    <label htmlFor="checkOutDate">Check Out</label>
                  </div>
                  <input
                    type="date"
                    id="checkOutDate"
                    className="rounded border border-gray-200 bg-secondary/10 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <img src={assets.user} alt="userIcon" width={20} />
                    <label htmlFor="guests">Guests</label>
                  </div>
                  <input
                    type="number"
                    id="guests"
                    min={1}
                    max={5}
                    className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    placeholder="0"
                  />
                </div>
                <button
                  className="flexCenter gap-1 rounded-md btn-dark min-w-44"
                  type="submit"
                >
                  <img
                    src={assets.search}
                    width={20}
                    alt="searchIcon"
                    className="invert"
                  />
                  <span>Search</span>
                </button>
              </form>
            </div>
            {/* Right Side */}
            <div className="flex-1 max-w-sm">
              <div className="p-6 rounded-xl border border-slate-900/10">
                <h4 className="h4 mb-3">Contact Agent</h4>
                <form action="" className="flex flex-col gap-4">
                  <input
                    type="text"
                    className="p-2 py-1 border border-gray-300 rounded-md text-sm"
                    required
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="p-2 py-1 border border-gray-300 rounded-md text-sm"
                    required
                    placeholder="Your Email"
                  />
                  <textarea
                    rows={4}
                    type="email"
                    className="p-2 py-1 border border-gray-300 rounded-md text-sm"
                    required
                    placeholder="Your Message"
                  />
                  <button
                    type="submit"
                    className="btn-secondary rounded-lg py-1.5"
                  >
                    Send Message
                  </button>
                </form>
                <h4 className="h4 mb-3 mt-8">For Buying Contact</h4>
                <div className="text-sm w-80 divide-y divide-gray-50/30 border border-gray-500/30 rounded">
                  <div className="flex items-start justify-between p-3">
                    <div className="">
                      <div className="flex items-center space-x-2">
                        <h5 className="h5">{property.agency.name}</h5>
                        <p className="bg-green-500/20 px-2 py-0.5 rounded-full text-sm text-gray-600 border border-gray-500/30">
                          Agency
                        </p>
                      </div>
                      <p className="">Agency Office</p>
                    </div>
                    <img
                      src={property.agency.owner.image}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="flexStart gap-2 p-1.5">
                    <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30">
                      <img src={assets.phone} alt="" width={14} />
                    </div>
                    <p>{property.agency.contact}</p>
                  </div>
                  <div className="flexStart gap-2 p-1.5">
                    <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30">
                      <img src={assets.mail} width={14} />
                    </div>
                    <p>{property.agency.email}</p>
                  </div>
                  <div className="flex items-center divide-x divide-gray-500/30">
                    <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer">
                      <img src={assets.mail} width={19} />
                      Send Email
                    </button>
                    <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer">
                      <img src={assets.phone} width={19} />
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PropertyDeatails;
