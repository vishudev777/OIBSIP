import { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? " " : "dot"}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
// ======BELOW CREATED FOR NAVBAR HIDING EFFECTS ======

// import React, { useState, useEffect } from "react"; // Import useEffect for scroll tracking
// import "./Navbar.css";
// import { assets } from "../../assets/frontend_assets/assets";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const [showNavbar, setShowNavbar] = useState(true); // State for showing/hiding navbar
//   let lastScrollTop = 0;

//   // Effect for handling scroll behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;

//       if (scrollTop > lastScrollTop) {
//         setShowNavbar(false); // Scrolling down: hide navbar
//       } else {
//         setShowNavbar(true); // Scrolling up: show navbar
//       }

//       lastScrollTop = scrollTop;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="navbar" style={{ top: showNavbar ? "0" : "-70px" }}>
//       <img src={assets.logo} alt="" className="logo" />
//       <ul className="navbar-menu">
//         <link
//           onClick={() => setMenu("home")}
//           className={menu === "home" ? "active" : ""}
//         >
//           Home
//         </link>
//         <li
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           Menu
//         </li>
//         <li
//           onClick={() => setMenu("mobile-app")}
//           className={menu === "mobile-app" ? "active" : ""}
//         >
//           Mobile-App
//         </li>
//         <li
//           onClick={() => setMenu("contact-us")}
//           className={menu === "contact-us" ? "active" : ""}
//         >
//           Contact-Us
//         </li>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="search icon" />
//         <div className="navbar-search-icon">
//           <img src={assets.basket_icon} alt="basket icon" />
//           <div className="dot"></div>
//         </div>
//         <button>Sign In</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;\

// ======UPPER CREATED FOR NAVBAR HIDING EFFECTS ======
