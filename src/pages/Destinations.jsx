import React from 'react'
import varanasi from '../images/varanasi.jpg';
import prayagraj from '../images/prayagraj.jpg';
import ayodhya from '../images/ayodhya.jpg';


export default function Destinations() {
  return (
    <div>
      <h2>Popular Destinations</h2>

      <div className="card">
        <img src={varanasi} alt="Varanasi" />
        <div className="card-content">
          <h3>Varanasi</h3>
          <p>The city of temples and ghats on the sacred Ganges.</p>
        </div>
      </div>

      <div className="card">
        <img src={prayagraj} alt="Prayagraj" />
        <div className="card-content">
          <h3>Prayagraj</h3>
          <p>Famous for the Triveni Sangam and Kumbh Mela.</p>
        </div>
      </div>

      <div className="card">
        <img src={ayodhya} alt="Ayodhya" />
        <div className="card-content">
          <h3>Ayodhya</h3>
          <p>The birthplace of Lord Ram with rich cultural heritage.</p>
        </div>
      </div>
    </div>
  )
}
