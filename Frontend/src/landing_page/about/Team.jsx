import React from 'react';

function Team() {
    return (
                <div className='container'>
                    <div className="row p-3 mt-5 border-top">
                        <h1 className='mt-5 text-center' style={{color: "#000"}}>
                            People
                        </h1>
                    </div>
                    <div className="row p-3 text-muted" style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
                        <div className="col-6 p-3 text-center">
                            <img src='media/images/nithinKamath.jpg' alt="Nitin Kamath" style={{borderRadius: "100%", width:"60%"}}/>
                            <h4 className='mt-3'>Nithin Kamath</h4>
                            <h6>Founder, CEO</h6>
                        </div>
                        <div className="col-6 p-3">
                            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p> <br/>
                            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p> <br/>
                            <p>Playing basketball is his zen.</p>
                            <p>Connect on <a href="" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Homepage</a> / <a href="" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>TradingQnA</a> / <a href="" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Twitter</a></p>
                        </div>
                    </div>
                </div>
            );
        }
        
     ;

export default Team;