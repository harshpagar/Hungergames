import React from "react";
import "./Restaurant.css";

const MenuCard = ({menuData}) => {
    console.log(menuData);
    return(
        <>
        <section className="main-card--container">
        {menuData.map((currElem) => {
            return(
            <>
            <div className="card-container" key={currElem.id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{currElem.rating}</span>
                        <span className="card-author subtle">{currElem.votes} votes</span>
                        <span className="card-review subtle">{currElem.reviews} reviews</span>

                    </div>

                   
                    <h2 className="card-title">{currElem.restro}</h2>
                    <span className="card-description subtle">{currElem.categ}</span>
                    <div>
                        <span className="card-description subtle">Cost For One :{currElem.Cost_For_One}</span>
                    </div>
                    <div>
                        <span className="card-description subtlemain">Min ₹:{currElem.min_Order}  </span>
                        <span className="card-description subtlemain"> *Up to :{currElem.del_Time} min</span>
                    </div>
                    <div>
                        <p>Accepts{" "}
                        {currElem.payment_methods.cash
                            ? "online and cash on delivery both"
                            : "online payments only"
                      }
                    </p>
                    </div>
                   
                   
                    <div>
                            <img src={currElem.url} alt="images" className="card-media"    /> 
                    </div>
                    <div>
                    <span className="card-tag subtle ">Order Now</span>
                    </div>
                </div>
            </div>
           
            </>
            )
        })}
         </section>
        </>
    )
}

export default MenuCard