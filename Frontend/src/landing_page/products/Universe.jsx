import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 style={{ color: "#000" }} className='fs-4'>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 text-center">
            <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse Logo" style={{width: "55%"}}/>
            <p class='text-small text-muted mt-3'>Our asset management venture <br/>
                that is creating simple and transparent index <br/>
                funds to help you save for your goals.
            </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
            <img src="media/images/sensibullLogo.svg" alt="Sensibull Logo" style={{width: "70%"}}/>
            <p class='text-small text-muted mt-3'>Options trading platform that lets you <br/>
                that helps you invest in diversified <br/>
                baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
            <img src="media/images/tijori.svg" alt="Tijori Logo" style={{width: "40%"}}/>
            <p class='text-small text-muted mt-2'>Investment research platform <br/>
                that offers detailed insights on stocks, <br/>
                sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
            <img src="media/images/streakLogo.png" alt="Streak Logo" style={{width: "40%"}}/>
            <p class='text-small text-muted mt-4'>Systematic trading platform <br/>
                that allows you to create and backtest <br/>
                strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png" alt="Small Case Logo" style={{width: "60%"}}/>
            <p class='text-small text-muted mt-3'>Thematic investing platform <br/>
                that helps you invest in diversified <br/>
                baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="media/images/dittoLogo.png" alt="ditto Logo" style={{width: "40%"}}/>
            <p class='text-small text-muted mt-3'>Personalized advice on life <br/>
                and health insurance. No spam <br/>
                and no mis-selling.</p>
        </div>
        <button style={{width: "20%", margin: "0 auto"}} className=' btn btn-primary fs-5 mt-5 mb-5' >Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
