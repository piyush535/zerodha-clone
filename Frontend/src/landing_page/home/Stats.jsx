import React from 'react';

function Stats() {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-12 col-md-6 col-sm-6 col-sm-6 p-5'>
                    <h1 className='fs-2 mb-5' style={{ color: 'black' }}>Trust with confidence</h1>
                    <h2 className='fs-4' style={{ color: 'black' }}>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-4 ' style={{ color: 'black' }}>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4' style={{ color: 'black' }}>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4' style={{ color: 'black' }}>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-12 col-md-6 col-sm-6 col-sm-6 p-5'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{ width: "100%" }}></img>
                    <div className='text-center p-5'>
                        <a href='' style={{textDecoration: 'none'}}>Explore products <i class="fa-solid fa-arrow-right"></i></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='' style={{textDecoration: 'none'}}>Try Kite Demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;