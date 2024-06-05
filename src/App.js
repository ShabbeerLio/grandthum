import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Location from "./Pages/Location/Location";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";

function App() {

  // remove inspect and copy element
   useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    };

    const handleSelect = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('selectstart', handleSelect);
    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('selectstart', handleSelect);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home title={"Bhutani Grandthum Noida Extension | Grandthum Office Spaces"} descriptions={"Bhutani Grandthum, a landmark development located in Greater Noida West, where you can opt for Office Spaces. Call Us Now for Site Visit Today."} />} />
          <Route
            path="/gallery"
            exact
            element={
              <Gallery title={"Bhutani Grandthum Noida Extension | Grandthum Office Spaces"} descriptions={"Bhutani Grandthum, a landmark development located in Greater Noida West, where you can opt for Office Spaces. Call Us Now for Site Visit Today."} />} />
          <Route
            path="/price-list"
            exact
            element={
              <PriceList title={"Bhutani Grandthum Noida Extension | Grandthum Office Spaces"} descriptions={"Bhutani Grandthum, a landmark development located in Greater Noida West, where you can opt for Office Spaces. Call Us Now for Site Visit Today."} />} />
          <Route
            path="/master-plan"
            exact
            element={
              <MasterPlan title={"Bhutani Grandthum Noida Extension | Grandthum Office Spaces"} descriptions={"Bhutani Grandthum, a landmark development located in Greater Noida West, where you can opt for Office Spaces. Call Us Now for Site Visit Today."} />} />
          <Route
            path="/floor-plan"
            exact
            element={
              <FloorPlan title={"Bhutani Grandthum Noida Extension | Grandthum Office Spaces"} descriptions={"Bhutani Grandthum, a landmark development located in Greater Noida West, where you can opt for Office Spaces. Call Us Now for Site Visit Today."} />} />
          <Route
            path="/location"
            exact
            element={
              <Location title={"Bhutani Grandthum Noida Extension | Grandthum Office Spaces"} descriptions={"Bhutani Grandthum, a landmark development located in Greater Noida West, where you can opt for Office Spaces. Call Us Now for Site Visit Today."} />} />
          <Route
            path="/site-visit"
            exact
            element={
              <SiteVisit title={"Bhutani Grandthum Noida Extension | Grandthum Office Spaces"} descriptions={"Bhutani Grandthum, a landmark development located in Greater Noida West, where you can opt for Office Spaces. Call Us Now for Site Visit Today."} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
