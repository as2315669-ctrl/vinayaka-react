import React from 'react'

export default function Destinations() {
  return (
    <div>
      <h2>Popular Destinations</h2>

      <div className="card">
        <img src="/images/varanasi.jpg" alt="Varanasi" />
        <div className="card-content">
          <h3>Varanasi</h3>
          <p>The city of temples and ghats on the sacred Ganges.</p>
        </div>
      </div>

      <div className="card">
        <img src="/images/prayagraj.jpg" alt="Prayagraj" />
        <div className="card-content">
          <h3>Prayagraj</h3>
          <p>Famous for the Triveni Sangam and Kumbh Mela.</p>
        </div>
      </div>

      <div className="card">
        <img src="/images/ayodhya.jpg" alt="Ayodhya" />
        <div className="card-content">
          <h3>Ayodhya</h3>
          <p>The birthplace of Lord Ram with rich cultural heritage.</p>
        </div>
      </div>
    </div>
  )
}
