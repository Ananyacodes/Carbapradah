"use client";

import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

function Page() {
  return (
    <>
      <Navbar />
      <Link href="/transport" passHref>
        <div
          className="first h-screen bg-cover bg-center bg-no-repeat relative cursor-pointer"
          style={{ backgroundImage: "url('/b2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>{" "}
          {/* Semi-transparent overlay for readability */}
          <div className="flex flex-col justify-center items-center h-full relative z-10 px-4">
            <p className="text-5xl font-bold text-center text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Transport
            </p>
            <p className="text-white text-center max-w-3xl mx-auto text-xl px-6 animate__animated animate__fadeIn animate__delay-2s">
              Empowering farmers with real-time insights to detect and address
              plant stress for sustainable growth.
            </p>
          </div>
        </div>
      </Link>

      <div
        className="first h-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/b3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* Semi-transparent overlay for readability */}

        <div className="flex flex-col justify-center items-center h-full relative z-10 px-6 sm:px-10 md:px-20 lg:px-60 py-10">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Smart Soil Monitoring & Predictive Analytics
          </p>

          <div className="bg-white/30 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl backdrop-blur-md max-w-4xl mx-auto text-white text-base sm:text-lg md:text-xl px-4 sm:px-6 animate__animated animate__fadeIn animate__delay-2s">
            <strong>1. IoT-Based Real-Time Monitoring</strong>
            <br />
            Sensors: Soil Moisture, Temperature, MQ-135 VOC.
            <br />
            Connectivity: ESP32 transmits data via Wi-Fi to Firebase.
            <br />
            <br />

            <strong>2. Machine Learning Insights</strong>
            <br />
            Models: Crop Yield Prediction, Irrigation/Fertilization
            Optimization, VOC-Based Soil Health Assessment.
            <br />
            <br />

            <strong>4. Farmer’s Dashboard</strong>
            <br />
            Live Monitoring: Real-time soil data.
            <br />
            ML Predictions & Alerts: Recommendations based on analysis.
            <br />
            Interactive Graphs: Visualizes trends for informed decisions.
            <br />
            <br />

            <strong>5. Smart Alerts</strong>
            <br />
            Notifications: Alerts for interventions.
            <br />
            Customizable Thresholds: Set limits for early warnings.
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
