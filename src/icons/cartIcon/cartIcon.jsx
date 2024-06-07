import { useSelector } from "react-redux"
import "./style.scss"
import { useNavigate } from "react-router-dom";
import { getTotalQuantity } from "../../utils/common";
export const CartIcon = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state?.cart);
    return (
        <div className="cart-icon" onClick={() => navigate("/cart")}>
            {cart?.length ? <div className="cart-count">{getTotalQuantity(cart)}</div> : <></>}
            <svg viewBox="0 0 24 24" height={"50px"} width={"40px"} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
    )
}