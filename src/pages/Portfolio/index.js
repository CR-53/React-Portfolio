import React from "react";
import "./style.css";
import PortfolioCard from "../../components/PortfolioCard"

function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="page-heading">Portfolio</h2>
                </div>
            </div>
            <PortfolioCard />   
        </div>
    )
}

export default Portfolio;