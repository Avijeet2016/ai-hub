import React, { useState } from 'react';

const Tab = ({setModels, cart}) => {
    

    return (
      <div className="mb-10 flex justify-center items-center">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box bg-white shadow-none">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 checked:bg-[#FB2C36] checked:text-white"
            aria-label="Models"
            defaultChecked
            onClick={() => setModels("models")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 checked:bg-[#FB2C36] checked:text-white"
            aria-label={`Cart (${cart.length})`}
            onClick={() => setModels("cart")}
          />
        </div>
      </div>
    );
};

export default Tab;