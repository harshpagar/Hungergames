import "./Restaurant.css";
import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";

const Restaurant = () => {
  const [menuData, setMenuData] = useState([]);
  const [filterData, setfilterData] = useState([]);

  const payfilter = (payment) => {
    console.log(menuData);
    const updatedList = menuData.filter((curElem) => {
      return curElem.payment_methods === payment;
    });
    setfilterData(updatedList);
    console.log(filterData);
  };

  const filterItem = (rating) => {
    const updatedList = menuData.filter((curElem) => {
      return curElem.rating >= rating;
    });
    setfilterData(updatedList);
  };

  const htolItem = () => {
    const HtoL = menuData.sort((a, b) => {
      return b.Cost_For_One - a.Cost_For_One;
    });
    setfilterData(HtoL);
  };

  const ltohItem = () => {
    const LtoH = menuData.sort((a, b) => {
      return a.Cost_For_One - b.Cost_For_One;
    });
    setfilterData(LtoH);
  };

  const getData = () => {
    fetch("http://localhost:8000/menu")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMenuData(res);
        setfilterData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(menuData);

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => {
              filterItem(1.0);
            }}
          >
            1 Star
          </button>
          <button
            className="btn-group__item"
            onClick={() => {
              filterItem(2.0);
            }}
          >
            2 Star
          </button>
          <button
            className="btn-group__item"
            onClick={() => {
              filterItem(3.0);
            }}
          >
            3 Star
          </button>
          <button
            className="btn-group__item"
            onClick={() => {
              filterItem(4.0);
            }}
          >
            4 Star
          </button>
        </div>
      </nav>
      <nav className="navbar">
        <div className="btn-group1">
          <button className="btn-group__item" onClick={() => payfilter("Cash")}>
            Cash
          </button>
          <button className="btn-group__item" onClick={() => payfilter("Card")}>
            Card
          </button>
          <button
            className="btn-group__item"
            onClick={() => payfilter("Card & Cash Both")}
          >
            All
          </button>
        </div>
      </nav>
      <nav className="navbar">
        <div className="btn-group2">
          <button
            className="btn-group__item"
            onClick={() => {
              ltohItem();
            }}
          >
            Low To High
          </button>
          <button
            className="btn-group__item"
            onClick={() => {
              htolItem();
            }}
          >
            High To Low
          </button>
        </div>
      </nav>

      <MenuCard filterData={filterData} />
    </>
  );
};

export default Restaurant;
