import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PiArrowFatRightLight } from "react-icons/pi";
import Payment from './Payment'; // Import your existing Payment component

const Buy = () => {
    const location = useLocation();
    const { imagePath, productname, productprice, productdesc } = location.state || {};

    const [gram, setGram] = useState(productprice);
    const [isPaymentPopupVisible, setPaymentPopupVisible] = useState(false); // State to control payment popup visibility

    const lgram = () => {
        setGram(productprice);
    };

    const rgram = () => {
        setGram(productprice * 2);
    };

    const navigate = useNavigate();
    
    const handleCartClick = () => {
        navigate('/cart', { state: { imagePath, productname, productprice, productdesc } });
    };

    const handleBuyNowClick = () => {
        setPaymentPopupVisible(true); 
    };

    const handleClosePaymentPopup = () => {
        setPaymentPopupVisible(false); 
    };

    return (
        <div className='flex flex-col lg:flex-row lg:gap-10 lg:ml-20 lg:mt-9 p-4'>
            <img src={imagePath} alt="Selected Product" className="w-full lg:w-2/5 lg:h-2/5 lg:ml-0 lg:mt-4" />
            <div className='mt-4 lg:mt-10 lg:ml-10 flex-1'>
                <h1 className='text-2xl lg:text-3xl font-bold font-[ui-sans-serif]'>{productname}</h1>
                <h1 className='text-lg lg:text-xl'>Rs {productprice}</h1>
                <div className='flex gap-3 items-center mt-4'>
                    <div className='bg-green-500 w-2 h-2 rounded'></div>
                    <p className='text-lg lg:text-xl'>Item in stock</p>
                </div>
                <div className='flex gap-3 items-center mt-2'>
                    <PiArrowFatRightLight className='text-lg lg:text-xl' />
                    <p className='text-lg lg:text-xl'>Free shipping on orders above 500/-</p>
                </div>
                <p className='mt-4 text-lg lg:text-xl'>Quantity</p>
                <div className='flex gap-4 lg:gap-6 mt-5'>
                    <button className='bg-[#333333] w-full lg:w-28 h-12 lg:h-14 rounded-md text-white text-sm lg:text-base' onClick={lgram}>500gm</button>
                    <button className='bg-[#333333] w-full lg:w-28 h-12 lg:h-14 rounded-md text-white text-sm lg:text-base' onClick={rgram}>1000gm</button>
                </div>
                <p className='mt-4 text-lg lg:text-xl'>Total price</p>
                <button className='bg-[#333333] w-full lg:w-80 h-12 lg:h-14 mt-5 rounded-md text-white text-sm lg:text-base'>Rs {gram}</button>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-5 mt-5'>
                    <button className='bg-teal-700 w-full lg:w-80 h-12 lg:h-14 rounded-md text-white text-sm lg:text-base' onClick={handleCartClick} >Add to Cart</button>
                    <button className='bg-teal-700 w-full lg:w-80 h-12 lg:h-14 rounded-md text-white text-sm lg:text-base' onClick={handleBuyNowClick}>Buy it Now</button>
                </div>
                <p className='mt-5 text-sm lg:text-base'>{productdesc}</p>
            </div>

            
            {isPaymentPopupVisible && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg  max-w-md relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleClosePaymentPopup}
                        >
                            ✕
                        </button>
                        <Payment />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Buy;
