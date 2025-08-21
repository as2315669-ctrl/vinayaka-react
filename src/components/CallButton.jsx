// import React from "react";
// import "./CallButton.css";
// import callIcon from "../images/call.png"; // add your call PNG in public/images or src/images

// export default function CallButton() {
//   const phoneNumber = "918604563567"; // Your number with country code

//   return (
//     <a
//       href={`tel:${phoneNumber}`}
//       className="whatsapp-float"
//       title="Call Now"
//     >
//       <img src={callIcon} alt="Call" />
//       <span className="tooltip">Call Us</span>
//     </a>
//   );
// }

import React from "react";
import "./CallButton.css";
import call from "../images/call.png"; // use your PNG

export default function CallButton() {
  const phoneNumber = "tel:+918604563567"; // your number

  return (
    <a href={phoneNumber} className="call-float">
      <img src={call} alt="Call" />
    </a>
  );
}


