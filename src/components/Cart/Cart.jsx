import { AddIcCallOutlined, Delete, ShoppingCartOutlined, SignalCellularConnectedNoInternet0BarTwoTone } from '@material-ui/icons';
import {useState, useContext} from 'react'
import logo from "../../images/react.png";
import "../Cart/cart.css";
import {CartContext} from "../Context"
import Items from '../Items/Items';
const Cart = () => {
    const {items, totalItem,totalAmount} = useContext(CartContext)
    const {clearCart} = useContext(CartContext)
    console.log(items)
    if(items.length===0){
        return (
            <>
                <header className="header">
                <div className="continue-shopping">
                    <img src={logo} alt="logo" className="logo" />
                    <h3 className="title">Continue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <ShoppingCartOutlined className="shopping-icon" />
                    <p className="cart-amount">0</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1 className="main-title">Sopping Cart</h1>
                <p className="main-sub-title">You Have <span className="p-amount"> 0 </span> Items in Shopping Cart</p>
              
            </section>
            </>
        )
    }
    return (
        <>
            <header className="header">
                <div className="continue-shopping">
                    <img src={logo} alt="logo" className="logo" />
                    <h3 className="title">Continue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <ShoppingCartOutlined className="shopping-icon" />
                    <p className="cart-amount">{totalItem}</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1 className="main-title">Sopping Cart</h1>
                <p className="main-sub-title">You Have <span className="p-amount"> {totalItem} </span> Items in Shopping Cart</p>
              
            </section>

            <div className="cart-items">
                <div className="cart-items-container">
                    {
                        items.map((item)=>{
                            return <Items item={item}/>
                        })
                    }
                   
                </div>
            </div>
            <div className="cart-total">
                <h3>Cart Total :<span className="totalAmount">{totalAmount}</span></h3>
                <div className="button-group">
                     <button className="checkout">Checkout</button>
                     <button className="clearingCart" onClick={()=>clearCart()}>Clear Cart</button>
                </div>
                
            </div>
        </>
    )
}

export default Cart
