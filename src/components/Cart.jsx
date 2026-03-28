import React from 'react';

const Cart = ({cart}) => {
    
    return (
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-5xl font-bold mb-5">Your Cart</h1>

        {cart.length === 0 ? (
          <div>
            <h1 className="text-2xl font-bold">Cart is Empty!</h1>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div className="border border-zinc-200 shadow-lg rounded-lg px-3 py-2 bg-zinc-100 flex justify-between items-center mb-5" key={item.id}>
                <div className="flex gap-2">
                  <img src={item.image} alt="" className="w-25 h-25" />
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p className="text-zinc-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <h2 className="text-xl font-bold">${item.price}/per month</h2>
                  <div>
                    <button className="font-bold btn">X</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    );
};

export default Cart;