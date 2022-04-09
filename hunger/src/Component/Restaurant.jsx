import "./Restaurant.css";
import Menu from "./Menu";
import MenuCard from "./MenuCard";
import { useState } from "react";


const Restaurant = () => {
    const [menuData , setMenuData] = useState(Menu)
    return(
        <>
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant