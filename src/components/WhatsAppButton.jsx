import React from "react";
import "./WhatsAppButton.css";
import whatsapp from '../images/whatsapp.png';


export default function WhatsAppButton() {
  const phoneNumber = "918604563567"; // your WhatsApp number with country code (India = 91)
  const message = "Hello Vinayaka Tour & Travels, I’d like to enquire about a trip.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <img src={whatsapp} alt="WhatsApp" />
    </a>
  );
}
