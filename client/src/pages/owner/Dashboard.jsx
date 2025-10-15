import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/data";

const Dashboard = () => {
  const { user } = useAppContext();
  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  });

  const formatPrice = (amount) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);

  const getDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    getDashboardData();
  }, [user]);

  return (
    <div className="md:px-8 py-6 xl:py-8 m-2 sm:m-4 h-[97vh] overflow-y-auto lg:w-11/12 bg-white shadow rounded-2xl">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="flex items-center gap-6 p-6 bg-[#fff4d2] rounded-xl shadow-sm hover:shadow-md transition">
          <img src={assets.house} alt="house" className="w-10 sm:w-12" />
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">
              {dashboardData.totalBookings.toString().padStart(2, "0")}
            </h3>
            <p className="text-gray-600 text-sm mt-1">Total Sales</p>
          </div>
        </div>

        <div className="flex items-center gap-6 p-6 bg-[#d1e8ff] rounded-xl shadow-sm hover:shadow-md transition">
          <img src={assets.dollar} alt="dollar" className="w-10 sm:w-12" />
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">
              {formatPrice(dashboardData.totalRevenue)}
            </h3>
            <p className="text-gray-600 text-sm mt-1">Total Earnings</p>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[2fr_2fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] bg-secondary text-white rounded-t-xl px-6 py-3 text-sm font-semibold">
        <span className="hidden lg:block">Index</span>
        <span>Property</span>
        <span>Booking Dates</span>
        <span>Amount</span>
        <span className="text-center">Status</span>
      </div>

      {/* Table Body */}
      <div className="">
        {dashboardData.bookings.map((booking, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_2fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] items-center px-6 py-4 border-b border-slate-200 hover:bg-[#fdfdfd] transition text-gray-700 text-sm"
          >
            <div className="hidden lg:block">{index + 1}</div>

            <div className="flex items-center gap-3 max-w-64">
              <img
                src={booking.property.images[0]}
                alt={booking.property.title}
                className="w-14 h-14 object-cover rounded-lg"
              />
              <div className="font-medium line-clamp-2 text-gray-800">
                {booking.property.title}
              </div>
            </div>

            <div className="text-gray-600">
              {new Date(booking.checkInDate).toLocaleDateString()} –{" "}
              {new Date(booking.checkOutDate).toLocaleDateString()}
            </div>

            <div className="font-semibold text-gray-800">
              {formatPrice(booking.totalPrice)}
            </div>

            <div className="flex justify-center">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  booking.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {booking.isPaid ? "Completed" : "Pending"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {dashboardData.bookings.length === 0 && (
        <div className="text-center text-gray-400 py-12 text-sm">
          No bookings found yet.
        </div>
      )}
    </div>
  );
};

export default Dashboard;
