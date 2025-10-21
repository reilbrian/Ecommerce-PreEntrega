import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav=()=>{
    const {getTotalItems}=useCartContext();



    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
            
                <li>
                    <Link to={"/category/Mangas"}>Mangas</Link>
                </li>
                <li>
                    <Link to={"/category/Accesorios"}>Accesorios</Link>
                </li>
                <li>
                    <Link to={"/category/Figuras"}>Figuras</Link>
                </li>
            
                <li>
                    <Link to={"/carrito"}>Carrito</Link>
                    {getTotalItems()>0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                    )}
                    <span></span>
                </li>

            </ul>
        </nav>
    )
}