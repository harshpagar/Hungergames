import "./Restaurant.css";
import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
// import Menu from "./hunger/db.json"


const Restaurant = () => {

    const [menuData , setMenuData] = useState([])

    // const filterItem = (category) => {
    //   const updatedList = Menu.filter((curElem) => {
    //   return curElem.category === category
    //   });
    // }

    const getData = () => {
        fetch('http://localhost:8000/menu')
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            setMenuData(res)
          })
      }
    
      useEffect(() => {
        getData()
      }, [])
    

    console.log(menuData);
    
    return(
        <>
        <nav className="navbar">
          <div className="btn-group">
            <button className="btn-group__item">1 Star</button>
            <button className="btn-group__item">2 Star</button>
            <button className="btn-group__item">3 Star</button>
            <button className="btn-group__item">4 Star</button>
          </div>
        </nav>
        <nav className="navbar">
          <div className="btn-group1">
            <button className="btn-group__item">Cash</button>
            <button className="btn-group__item">Card</button>
            <button className="btn-group__item">All</button>
          </div>
        </nav>
        <nav className="navbar">
          <div className="btn-group2">
            <button className="btn-group__item">Low To High</button>
            <button className="btn-group__item">High To Low</button>
          </div>
        </nav>
        
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant