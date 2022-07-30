import React from "react";
import "./home.css";
import Navbar from "../../components/NavBar/Navbar";

const Home = () => {
  return (
    <div className='home-wrapper '>
      <Navbar />
      <img
        src='https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
        alt=''
        className='home-img'
      />
      <div className='home-writting'>
        <h1 className='home-heading'>Abdulmuiz Mustapha</h1>
        <h2 className='home-subHeading'>
          I'm a{" "}
          <span className='home-desc'>
            <span className='underline'>Web Developer</span>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Home;
