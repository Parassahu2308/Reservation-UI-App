import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Header from "../../Component/Header/Header";
import Feature from "../../Component/Feature/Feature";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle">Browse by property type</h1>
      </div>
    </>
  );
};

export default Home;
