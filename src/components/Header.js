import { useContext, useState } from "react";
import appLogo from "../assets/Hungarian2.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";




const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);


    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-28" src={appLogo} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li className="px-4"><Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link></li>
                    <li className="px-4"><Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery" style={{ textDecoration: 'none' }}>Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login"
                        onClick={() => {
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login")
                        }}>
                        {btnName}</button>
                        <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}


export default Header; 