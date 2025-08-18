import React from 'react'

export default function Packages() {
  return (
    <div>
      <h2>Tour Packages</h2>

      <div className="card">
        <img src="/images/kashi-tour.jpg" alt="Kashi Tour" />
        <div className="card-content">
          <h3>Kashi Darshan</h3>
          <p>Half-day city tour of Varanasi including Kashi Vishwanath Temple & Ganga Aarti.</p>
          <p><strong>₹2000</strong></p>
        </div>
      </div>

      <div className="card">
        <img src="/images/prayagraj-tour.jpg" alt="Prayagraj Tour" />
        <div className="card-content">
          <h3>Prayagraj Sangam Visit</h3>
          <p>Full-day trip to the holy Sangam and nearby temples.</p>
          <p><strong>₹2500</strong></p>
        </div>
      </div>
    </div>
  )
}
