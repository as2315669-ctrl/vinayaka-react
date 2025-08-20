// import React from 'react'
// export default function Contact() {
//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <p>Phone: 8604563567</p>
//       <p>Email: as2315669@gmail.com</p>
//       <a href="https://wa.me/918604563567" target="_blank" rel="noopener noreferrer">
//         Book via WhatsApp
//       </a>
//     </div>
//   )
// }

import LeadForm from "../components/LeadForm";

export default function Contact() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Contact Us</h2>
      <p>Fill in your details and we’ll get back to you soon.</p>
      <LeadForm />
    </div>
  );
}
