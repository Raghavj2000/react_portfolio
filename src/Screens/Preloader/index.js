import React from "react";
import "./preloader.css";
import { Watch } from "react-loader-spinner";

const Preloader = () => {
  return (
    <div className="preloader-screen">
      <div className="preloader-container">
        <Watch
          height="200"
          width="200"
          radius="48"
          color="#fff"
        
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        <div className="quote">"<span className="quote-span">TIME</span> is a Storm in which we are all <span className="quote-span">LOST.</span>"</div>
      </div>
    </div>
  );
};

export default Preloader;
