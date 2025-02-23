"use client";
import { Add_to_cart_conetxt_data } from "../Contexts/add_to_cart_context";

const Cart = () => {
  const { cart, deleteItem, clearcart, totalAmount, shippingfee, decrement, increment, isLoading } =
    Add_to_cart_conetxt_data();
  console.log(cart, "cart");

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-gray-500 mb-4">Cannot add items, please add items to your cart.</h1>
        <a href="/products">
          <button className="bg-orange-500 px-6 py-3 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-all">
            Add Now
          </button>
        </a>
      </div>
    );
  }

  return (
    <div className="m-auto lg:w-4/5 mt-5 py-36 px-4">
      <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        {/* Cart Table Header */}
        <div className="grid grid-cols-5 text-center bg-gray-200 font-bold text-gray-700 py-3">
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>Remove</div>
        </div>

        {/* Cart Items */}
        <div className="overflow-y-auto max-h-96">
          {cart?.map((currentitem, index) => (
            <div key={index} className="grid grid-cols-5 text-center items-center py-4 border-b">
              {/* Item Image & Name */}
              <div className="flex flex-col items-center">
                <img src={currentitem.image} alt={currentitem.name} className="h-16 w-16 object-cover rounded-lg" />
                <p className="text-sm font-medium">{currentitem.name}</p>
                <div className="flex items-center mt-1">
                  <span className="text-gray-600 text-xs">Color:</span>
                  <span
                    className="w-5 h-5 rounded-full ml-2 border"
                    style={{ backgroundColor: currentitem.color }}
                  ></span>
                </div>
              </div>

              {/* Price */}
              <div className="text-gray-700 font-medium">${currentitem.price}</div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-center space-x-3">
                <button
                  onClick={() => decrement(currentitem.id)}
                  className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-lg text-lg font-bold"
                >
                  −
                </button>
                <span className="font-bold">{currentitem.amount}</span>
                <button
                  onClick={() => increment(currentitem.id)}
                  className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-lg text-lg font-bold"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <div className="text-gray-700 font-medium">${currentitem.price * currentitem.amount}</div>

              {/* Remove Button */}
              <div>
                <button
                  onClick={() => deleteItem(currentitem.id)}
                  className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-all"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Footer */}
      <div className="lg:flex mt-6 justify-between items-center">
        {/* Continue Shopping */}
        <a href="/products">
          <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Continue Shopping
          </button>
        </a>

        {/* Cart Summary & Clear Cart */}
        <div className="text-gray-700 font-bold text-lg mt-5 lg:mt-0">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p>Total Sub Amount: ${totalAmount}</p>
            <p>Shipping Fee: ${shippingfee}</p>
            <p className="text-xl text-orange-500 mt-2">Total Amount: ${totalAmount + shippingfee}</p>
          </div>

          <button
            onClick={clearcart}
            className="mt-4 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition-all"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
