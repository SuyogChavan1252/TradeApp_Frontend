import React from "react";
function Awards(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                 <img src="media/images/largestBroker.svg"></img>
                </div>
                <div className="col-6 p-5 ">
                 <h1>Largest Stock Broker In India</h1>
                 <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing it:</p>
                 <div className="row">
                 <div className="col-6">
                 <ul>
                    <li>
                        <p>Future and options</p>
                    </li>
                    <li>
                        <p>Commodity Derivatives</p>
                    </li>
                    <li>
                        <p>Currency Derivatives</p>
                    </li>
                 </ul>
                 </div>
                 <div className="col-6">
                 <ul>
                    <li>
                        <p>Stocks and IPO's </p>
                    </li>
                    <li>
                        <p>Direct Mutual Funds</p>
                    </li>
                    <li>
                        <p>Bonds & direct security</p>
                    </li>
                 </ul>
                 </div>
                    
                 </div>
                <img src="media/images/pressLogos.png" style={{width:"90%"}}></img>
                </div>
            </div>

        </div>
        
    )
}
export default Awards;