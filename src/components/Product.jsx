import React, { useState } from 'react';

const Product = ({product}) => {
    const {id, title, description, price, image, status} = product;
    const [isSubscribed, setIsSubscribed] = useState(false);
    return (
      <div className="space-y-4 rounded-3xl shadow-lg overflow-hidden border border-zinc-300">
        <div className="bg-zinc-400 flex items-center justify-center py-5">
          <img src={image} alt="" className="w-50 h-50 " />
        </div>
        <div className="px-5 space-y-4 pb-5">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="line-clamp-2">{description}</p>
          <h2 className="font-bold text-xl">${price}/month</h2>
          <div>
            <button onClick={()=>setIsSubscribed(true)} className="bg-[#FB2C36] font-bold text-white w-full rounded-2xl py-3">
              {isSubscribed? "Subscribed" : "Subscribe Now" }
            </button>
          </div>
        </div>
      </div>
    );
};

export default Product;