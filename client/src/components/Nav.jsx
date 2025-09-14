
// import React from "react";
// import { NavLink } from "react-router-dom";

// const navItems = [
//   { name: "HOME", to: "/" },
//   { name: "ABOUT US", to: "/about" },
//   { name: "MANUFACTURING", to: "/manufacturing" },
//   { name: "KOL TRUST", to: "/kol" },
//   { name: "GALLERY", to: "/gallery" },
//   { name: "PRODUCTS", to: "/products" },
//   { name: "KNOWLEDGE BOOSTER", to: "/knowledge" },
//   { name: "CONTACT US", to: "/contact" },
// ];

// const Nav = () => {
//   return (
//     <nav>
//       <ul className="flex flex-wrap justify-center space-x-8 text-sm font-semibold tracking-wide">
//         {navItems.map((item) => (
//           <li key={item.to}>
//             <NavLink
//               to={item.to}
//               end={item.to === "/"}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-green-600"
//                   : "text-gray-800 hover:text-green-600 transition"
//               }
//             >
//               {item.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Nav;


import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "HOME", to: "/" },
  { name: "ABOUT US", to: "/about" },
  { name: "CLASSIFICATION", to: "/classification" },
//   { name: "KOL TRUST", to: "/kol" },
  { name: "GALLERY", to: "/gallery" },
  { name: "PRODUCTS", to: "/products" },
  { name: "BLOGS", to: "/blogs" },
  { name: "CONTACT US", to: "/contact" },
  { name: "LOGIN", to: "/login" },
];

const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-wrap justify-center space-x-8 text-sm font-semibold tracking-wide">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600"
                  : "text-gray-800 hover:text-green-600 transition"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
