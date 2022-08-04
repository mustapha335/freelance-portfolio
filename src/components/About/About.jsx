import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-wrapper'>
        <div className='left'>
          <div className='title'>
            <h2 className='underline'>Who Am I?</h2>
          </div>
          <h2 className='about-desc'>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </h2>
        </div>
        <div className='right'>
          <div className='imagebg'></div>
          <img
            src='https://images.unsplash.com/photo-1610478865542-7d239b415687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGRhcmslMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt=''
            className='about-img'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
