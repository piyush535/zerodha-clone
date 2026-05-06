import React from 'react';
import CreateTicket from './CreateTicket';
import SupportPage from './SupportPage';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href=" ">Track Tickets</a>
            </div>
            <div className="row p-3 m-3">
            <div className="col-6 p-3">
                <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder="Eg: how do I activate F&O, why is my order getting rejected.."/> <br/>
                <a href=" " >Track account opening</a>
                <a href=" " >Track segment activation</a>
                <a href=" " >Intraday margins</a> 
                <a href=" " >Kite user manual</a>
            </div>
            <div className="col-6 p-3">
                <h1 className='fs-3'>Featured</h1>
                <ol style={{lineHeight: '1.8'}}>
                    <li><a href=" ">Current takeovers and Delisting - April 2026</a></li>
                    <li><a href=" ">Latest Intraday leverages - MIS & CO</a></li>
                </ol>
            </div>
            </div>
        </section>
    );
}

export default Hero;