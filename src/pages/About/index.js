import React from "react";
import "./style.css";
import { Button } from 'react-bootstrap';

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="page-heading">About Page Coming Soon</h2>
                    <a href="/portfolio"><Button>View Portfolio</Button></a>
                </div>
            </div>
        </div>
    )
}

export default About;