import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return (
        <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ color: "#000" }}>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3">
            <a
              href={learnMore}
              style={{textDecoration: "none" }}
            >
              {learnMore}
            </a>
          </div>
        </div>
        <div className="col-6 mt-5 p-5" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <img src={imageURL} />
        </div>
      </div>
    </div>
    );
}

export default RightSection;