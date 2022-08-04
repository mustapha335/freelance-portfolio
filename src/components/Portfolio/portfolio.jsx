import React from "react";
import "./portfolio.css";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Portfolio } from "../../data";
const portfolio = () => {
  return (
    <div className='portfolio'>
      <span>
        <h1 className='service-heading underlines'>Portfolio</h1>
      </span>

      <div className='portfolio-container'>
        {Portfolio.map((item) => (
          <div className='portfolio-wrapper'>
            <a href={item.link} target='_blank' rel='noreferrer'>
              <div className='portfolio-items'>
                {/* //this is the portfolio */}
                <div className='portfolio-item'>
                  <img src={item.img} alt='' className='portofilo-img' />
                </div>
                <div
                  className='portfolio-item_wrapper'
                  transition-style='in:square:center'>
                  <div>
                    <ArrowBackIosRoundedIcon
                      className='portfolio-icon_top'
                      sx={{ fontSize: 70 }}
                    />
                  </div>
                  <div className='portfolio-icon_mid'>
                    <h1 className='portfolio-icon_midText'>{item.name}</h1>
                    <button className='portfolio-button'>View Now</button>
                  </div>
                  <div>
                    <ArrowBackIosRoundedIcon
                      className='portfolio-icon_bottom'
                      sx={{ fontSize: 70 }}
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default portfolio;
