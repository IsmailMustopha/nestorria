import React, { useState } from "react";
import { assets } from "../../assets/data";

const AddProperties = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null });
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    city: "",
    country: "",
    address: "",
    area: "",
    propertyType: "",
    priceRent: "",
    priceSale: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
    amenities: {
      Parking: false,
      Wifi: false,
      Backyard: false,
      Terrace: false,
    },
  });

  return (
    <div className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-md ring-1 ring-slate-900/5 hover:shadow-lg transition-all duration-300">
      <form className="space-y-8">
        {/* Property Title */}
        <div>
          <h5 className="font-semibold text-slate-700 mb-1">Property Name</h5>
          <input
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            value={inputs.title}
            type="text"
            placeholder="Type here..."
            className="px-4 py-2.5 w-full rounded-lg bg-secondary/5 ring-1 ring-slate-900/10 focus:ring-2 focus:ring-secondary/80 focus:outline-none transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Description */}
        <div>
          <h5 className="font-semibold text-slate-700 mb-1">
            Property Description
          </h5>
          <textarea
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
            value={inputs.description}
            rows={5}
            placeholder="Describe the property..."
            className="px-4 py-2.5 w-full rounded-lg bg-secondary/5 ring-1 ring-slate-900/10 focus:ring-2 focus:ring-secondary/80 focus:outline-none transition-all placeholder:text-slate-400 resize-none"
          />
        </div>

        {/* City / Country / Property Type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <h5 className="font-semibold text-slate-700 mb-1">City</h5>
            <input
              onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
              value={inputs.city}
              type="text"
              placeholder="e.g. Lagos"
              className="px-4 py-2.5 w-full rounded-lg bg-secondary/5 ring-1 ring-slate-900/10 focus:ring-2 focus:ring-secondary/80 focus:outline-none transition-all placeholder:text-slate-400"
            />
          </div>
          <div>
            <h5 className="font-semibold text-slate-700 mb-1">Country</h5>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, country: e.target.value })
              }
              value={inputs.country}
              type="text"
              placeholder="e.g. Nigeria"
              className="px-4 py-2.5 w-full rounded-lg bg-secondary/5 ring-1 ring-slate-900/10 focus:ring-2 focus:ring-secondary/80 focus:outline-none transition-all placeholder:text-slate-400"
            />
          </div>
          <div>
            <h5 className="font-semibold text-slate-700 mb-1">Property Type</h5>
            <select
              onChange={(e) =>
                setInputs({ ...inputs, propertyType: e.target.value })
              }
              value={inputs.propertyType}
              className="px-4 py-2.5 w-full rounded-lg bg-secondary/5 ring-1 ring-slate-900/10 focus:ring-2 focus:ring-secondary/80 focus:outline-none transition-all cursor-pointer text-slate-700"
            >
              <option value="">Select Property Type</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Duplex">Duplex</option>
              <option value="Terraced Duplex">Terraced Duplex</option>
              <option value="Detached Duplex">Detached Duplex</option>
              <option value="Semi-Detached Duplex">Semi-Detached Duplex</option>
              <option value="Flat / Apartment">Flat / Apartment</option>
              <option value="Mini Flat (Room and Parlour)">
                Mini Flat (Room and Parlour)
              </option>
              <option value="Self Contained">Self Contained</option>
              <option value="Commercial Property">Commercial Property</option>
              <option value="Office Space">Office Space</option>
              <option value="Shop / Retail Space">Shop / Retail Space</option>
              <option value="Event Hall">Event Hall</option>
              <option value="Warehouse">Warehouse</option>
              <option value="Land">Land</option>
              <option value="Short Let Apartment">Short Let Apartment</option>
            </select>
          </div>
        </div>

        {/* Address / Area / Prices / Rooms */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
          <div className="md:col-span-2">
            <h5 className="font-semibold text-slate-700 mb-1">Address</h5>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, address: e.target.value })
              }
              value={inputs.address}
              type="text"
              placeholder="Enter address"
              className="px-4 py-2.5 w-full rounded-lg bg-secondary/5 ring-1 ring-slate-900/10 focus:ring-2 focus:ring-secondary/80 focus:outline-none transition-all placeholder:text-slate-400"
            />
          </div>
          {[
            { key: "area", label: "Area (sq ft)", ph: "e.g. 500" },
            { key: "priceRent", label: "Rent Price", ph: "₦100,000" },
            { key: "priceSale", label: "Sale Price", ph: "₦10,000,000" },
            { key: "bedrooms", label: "Bedrooms", ph: "3" },
            { key: "garages", label: "Garages", ph: "1" },
          ].map((f, i) => (
            <div key={i}>
              <h5 className="font-semibold text-slate-700 mb-1">{f.label}</h5>
              <input
                onChange={(e) =>
                  setInputs({ ...inputs, [f.key]: e.target.value })
                }
                value={inputs[f.key]}
                type="text"
                placeholder={f.ph}
                className="px-4 py-2.5 w-full rounded-lg bg-secondary/5 ring-1 ring-slate-900/10 focus:ring-2 focus:ring-secondary/80 focus:outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="pt-4">
          <h5 className="font-semibold text-slate-700 mb-2">Amenities</h5>
          <div className="flex flex-wrap gap-3">
            {Object.keys(inputs.amenities).map((amenity, i) => (
              <label
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/5 rounded-lg cursor-pointer hover:bg-secondary/10 transition-all border border-transparent hover:border-secondary/30"
              >
                <input
                  type="checkbox"
                  checked={inputs.amenities[amenity]}
                  onChange={(e) => {
                    const updated = { ...inputs.amenities };
                    updated[amenity] = e.target.checked;
                    setInputs({ ...inputs, amenities: updated });
                  }}
                  className="accent-secondary scale-110"
                />
                <span className="text-slate-700 text-sm">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-4">
          {Object.keys(images).map((key) => (
            <label
              key={key}
              htmlFor={`propertyImage${key}`}
              className="ring-1 ring-slate-900/10 overflow-hidden rounded-xl cursor-pointer hover:ring-secondary transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="relative w-full h-36 bg-secondary/5 flex items-center justify-center rounded-xl">
                <input
                  id={`propertyImage${key}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) setImages({ ...images, [key]: file });
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {images[key] ? (
                  <img
                    src={URL.createObjectURL(images[key])}
                    alt={`Preview ${key}`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <img
                    src={assets.uploadIcon}
                    alt="Upload"
                    className="w-10 h-10 opacity-50 transition-transform hover:scale-110"
                  />
                )}
              </div>
            </label>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer sm:w-auto mt-4 px-6 py-3 bg-secondary/80 hover:bg-secondary text-black font-semibold rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
        >
          {loading ? "Adding..." : "Add Property"}
        </button>
      </form>
    </div>
  );
};

export default AddProperties;
