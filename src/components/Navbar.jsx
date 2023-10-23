import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {

  const { cart } = useSelector((state) => state.cart);

  return (
    <nav>
      <Link to={"/"}>
        <h1 className="logo">Fashion.Store</h1>
      </Link>
      <ul className="nav-links">

      <Link to={"/electronic"}><li className="list-group-item">Electronics</li></Link>
        <Link to={"/Jwellery"}><li className="list-group-item">Jwellery</li></Link>
        <Link to={"/men"}><li className="list-group-item">Men's Wear</li></Link>
        <Link to={"/women"}><li className="list-group-item">Women's Wear</li></Link>
        <Link to={"/cart"}>
        <li>
          
          <button className="cart"><FaCartShopping/>CART({cart.length})</button>
        </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
