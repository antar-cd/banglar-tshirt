import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const [cart, setCart] = useState([])
    const tshirts = useLoaderData();

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast('you have already added');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    }
    const handleRemoveFromCart = id => {

        const remaimimg = cart.filter(ts => ts._id !== id);
        setCart(remaimimg)
    }

    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <Tshirt

                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;