import React from "react";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PropertyDeatails from "./pages/PropertyDeatails";
import MyBookings from "./pages/MyBookings";
import Footer from "./pages/Footer";
import AgencyReq from "./components/AgencyReq";
import { useAppContext } from "./context/AppContext";
import Sidebar from "./components/owner/Sidebar";
import Dashboard from "./pages/owner/Dashboard";
import AddProperties from "./pages/owner/AddProperties";
import ListProperty from "./pages/owner/ListProperty";

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");
  const { showAgencyReq } = useAppContext();
  return (
    <main>
      {!isOwnerPath && <Header />}
      {showAgencyReq && <AgencyReq />}
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing/:id" element={<PropertyDeatails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="/owner/add-property" element={<AddProperties />} />
            <Route path="/owner/list-property" element={<ListProperty />} />
          </Route>
        </Routes>
      </>
      {!isOwnerPath && <Footer />}
    </main>
  );
};

export default App;
