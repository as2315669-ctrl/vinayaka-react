import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Vinayaka Tour & Travels | Explore Varanasi, Prayagraj, Ayodhya</title>
        <meta
          name="description"
          content="Vinayaka Tour & Travels offers customizable travel packages, modern fleet, and experienced drivers for spiritual journeys across Varanasi, Ayodhya, Prayagraj, and beyond."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="hero bg-orange-500 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold">Explore the Spiritual Heart of India</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Your trusted travel partner for Varanasi, Prayagraj, Ayodhya & beyond.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-lg">🚐 Modern Fleet</h3>
            <p className="mt-2 text-gray-600">
              Our vehicles are clean, air-conditioned, and designed for maximum comfort during long journeys.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-lg">👨‍✈️ Experienced Drivers</h3>
            <p className="mt-2 text-gray-600">
              Our local drivers are professional, friendly, and deeply familiar with spiritual destinations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-lg">🎯 Custom Packages</h3>
            <p className="mt-2 text-gray-600">
              Choose from ready-made packages or design your own itinerary to match your interests.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="mt-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Vinayaka Tour & Travels</h2>
        <p className="text-gray-700 leading-relaxed">
          At <strong>Vinayaka Tour & Travels</strong>, we specialize in providing memorable spiritual and cultural journeys across North India.
          Whether you are planning a <em>family trip to Ayodhya</em>, a <em>spiritual exploration in Varanasi</em>, or a <em>cultural visit to Prayagraj</em>,
          we ensure a smooth and comfortable experience. With a modern fleet, reliable service, and affordable pricing, 
          we are committed to making your travel truly meaningful.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-orange-100 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Plan Your Journey Today</h2>
        <p className="text-gray-700 mb-6">
          Let Vinayaka Tour & Travels take care of your travel needs. Contact us for customized packages, 
          group bookings, and spiritual tours across Uttar Pradesh and beyond.
        </p>
        {/* <a
          href="/contact"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600"
        >
          Contact Us
        </a> */}
      </div>
    </div>
  );
}
