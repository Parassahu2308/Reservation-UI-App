import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Header from "../../Component/Header/Header";
import Feature from "../../Component/Feature/Feature";
import "./Home.css";
import PropertyList from "../../Component/PropertyList/PropertyList";
import FeaturedProperty from "../../Component/FeaturedProperty/FeaturedProperty";
import MailList from "../../Component/MailList/MailList";
import Footer from "../../Component/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
