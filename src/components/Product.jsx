import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Product = ({product, cart, setCart}) => {
    const {id, title, description, price, image, status} = product;
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscription = () => {
      setIsSubscribed(true);
      const isFound = cart.find(item => item.id === product.id);
      if(isFound) {
        toast.warning('Item already in cart');
        return;
      }
      setCart([...cart, product]);
      toast.success('Item added to cart');
    }

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
            <button onClick={()=>handleSubscription()} className="bg-[#FB2C36] font-bold text-white w-full rounded-2xl py-3">
              {isSubscribed? "Subscribed" : "Subscribe Now" }
            </button>
          </div>
        </div>
      </div>
    );
};

export default Product;