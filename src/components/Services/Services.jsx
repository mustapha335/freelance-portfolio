import React from "react";
import "./services.css";
import { services } from "../../data";

const Services = () => {
  return (
    <div className='service-conatiner'>
      <span>
        <h1 className='service-heading underlines'>Services</h1>
      </span>
      <div className='service-wrapper'>
        {services.map((service) => (
          <div key={service._id} className='service-top'>
            <img src={service.img} alt='' className='service-top_img' />
            <h3 className='service-name'>{service.name}</h3>
            <span className='service-top_desc'>{service.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
