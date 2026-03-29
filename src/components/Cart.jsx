import React from 'react';

const Cart = ({cart, setCart}) => {
    const totalPrice = cart.reduce((acc, item) => (acc + item.price), 0);

    const handleCheckout = () => {
      setCart([]);
    }
    const handleDeleteCart = (item) => {
      const product = cart.filter(c => c.id !== item.id);
      setCart(product);
    }
    
    return (
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-5xl font-bold mb-5">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <h1 className="text-2xl font-bold">Cart is Empty!</h1>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                className="border border-zinc-200 shadow-lg rounded-lg px-3 py-2 bg-zinc-100 flex justify-between items-center mb-5"
                key={item.id}
              >
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
                    <button
                      onClick={() => handleDeleteCart(item)}
                      className="font-bold btn"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="border border-zinc-200 shadow-lg rounded-lg px-5 py-2 bg-black flex justify-between items-center mb-5 text-white">
              <h1 className="font-bold text-2xl">Total Price:</h1>
              <h1 className="font-bold text-2xl">${totalPrice}</h1>
            </div>
            <div className="shadow-lg rounded-lg px-3 py-2 bg-amber-600 text-center mb-5 text-white">
              <button
                onClick={() => handleCheckout()}
                className="font-bold text-2xl"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    );
};

export default Cart;