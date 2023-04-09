import React from 'react';
import './cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let messege;
    if(cart.length ===0){
        messege = <p>please add some products</p>
    }
    else{
        messege = <div>
            <h3>wasting money??</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary :{cart.length}</h2>
            <p className={`bold bordered ${cart.length===3 ? 'yellow': 'purple'} `}>something</p>

            {
            cart.length >2 ? 
            <span className='purple'>Aro kino</span> : 
            <span>Fokira</span> }
            {messege}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={()=>handleRemoveFromCart(tshirt._id)}
                >x</button></p>)
            }
            {
                cart.length === 2 && <p>doubl heat man</p>
            }
            {
                cart.length ===3 || <h3>Thinta tou hoilo na bro</h3>
            }

        </div>
    );
};

export default Cart;

/* CONDITIONAL RENDERING 
* 1-use if else to set a variable that will contain an element,components etc.
* 2- ternary operator: codition ? 'for true' : 'false'
* 3- logical &&: (if the condition is true then the next thing will be displayed)
* 4- logical || (if the condition is false then the next thing will be displayed)


*/
/* CONDITIONAL CSS Class
    * 1 - use ternary
    * 2 - ternary inside template string

*/