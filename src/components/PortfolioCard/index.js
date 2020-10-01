import React from "react";
import "./style.css";
import { Button, Card } from 'react-bootstrap';
import portfolioItems from "../../data/portfolio.json"

function PortfolioCard() {
    return (
      <div className="row portfolio-row">
        {portfolioItems.map(portfolio => {
          return(
          <div className="col-md-4">
            <Card className="portfolio-card">
              <a href={portfolio.repo}>
                <Card.Img className="portfolio-img portfolio-img img-hover-zoom" variant="top" src={portfolio.image} alt={portfolio.appName} />
              </a>
              <Card.Body className="card-btns">
                <Button className="card-btn-1" href={portfolio.deployed} variant="primary">Deployed App</Button>
                <Button className="card-btn-2" href={portfolio.repo}variant="primary">GitHub Repo</Button>
              </Card.Body>
            </Card>
          </div>
          );
        })}
      </div>
    );
  }
  
  export default PortfolioCard;