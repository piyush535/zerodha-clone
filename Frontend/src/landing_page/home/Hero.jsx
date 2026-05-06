import React from 'react';

function Hero() {
    return (
        <div className = 'container p-5 mb-5'>
            <div className='row' style = {{ textAlign: "center" }}>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h2 style = {{ color: "black" }} className='mt-5 fs-3'>Invest in everything</h2>
                <p className='lead mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{width: "20%", margin: "0 auto"}} className='p-2 btn btn-primary fs-5 mb-5' >Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;