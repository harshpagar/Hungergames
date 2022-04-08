import "./Restaurant.css";

const Restaurant = () => {
    return(
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle">Breakfast</span>
                    <h2 className="card-title">Sevenin</h2>
                    <span className="card-description subtle">
                        Pizza,Chines.
                    </span>
                    <div className="card-read">Read</div>
                </div>
                
                <span className="card-tag subtle ">Order Now</span>
            </div>
        </div>
    )
}

export default Restaurant