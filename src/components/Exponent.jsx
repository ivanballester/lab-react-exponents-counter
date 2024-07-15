import React from "react";

const Exponent = ({ num, exponent }) => {
  const result = Math.pow(num, exponent);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {num} ^ {exponent} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;
