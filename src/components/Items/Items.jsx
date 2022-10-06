import {useContext} from 'react'
import {Delete} from '@material-ui/icons';
import js from "../../images/js.png";
import {CartContext} from "../Context"
import "../Items/items.css";
const Items = ({item}) => {
    const {removeItem, incriment,decrement} = useContext(CartContext)
    return (
        
             <div className="cart-items-info">
                        <div className="cart-img">
                            <img src={js} alt="js" className="image" />
                        </div>
                        <div className="cart-title">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                        <div className="cart-counter">
                            <span className="count-icon" onClick={()=>{decrement(item.id)}}>-</span>
                            <input type="text" placeholder={item.quantity} className="num"/>
                            <span className="count-icon" onClick={()=>{incriment(item.id)}}>+</span>
                        </div>
                        <div className="total-price">
                            {item.price}
                        </div>
                        <Delete className="delete" onClick={()=>removeItem(item.id)} />
                    </div>
        
    )
}

export default Items
