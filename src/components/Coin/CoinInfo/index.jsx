import React, { useState } from "react";
import "./style.css";
function CoinInfo({ title, desc }) {
  const shortDesc =
    desc.slice(0, 300) +
    "<br/><p style='color:var(--grey);cursor:pointer;'>Read More...</p>";
  const longDesc =
    desc + "<br/><p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";

  const [toggle, setToggle] = useState(false);

  return (
    <div className="grey-wrapper info-component">
      <h1>{title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: desc.length >= 300 ? (toggle ? longDesc : shortDesc) : desc,
        }}
        className="info-p"
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}

export default CoinInfo;