import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <img src={imageURL} />
        </div>
        <div className="col-6 mt-5 p-5" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ color: "#000" }}>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              {" "}
              {tryDemo}{" "}
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              {" "}
              {learnMore}{" "}
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appStoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
