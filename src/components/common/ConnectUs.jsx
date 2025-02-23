import React from "react";
import { useNavigate } from "react-router-dom";

const ConnectUs = () => {
  return (
    <section className="container">
      <div className="connect-us">
        <h1>
          Reliable <span className="white-shine">Tech Solutions</span> at Your
          Fingertips
        </h1>

        <p>We provide cost-effective tech solutions to keep you going.</p>

        <button
          className="black-btn"
          onClick={() => {
            setTimeout(() => {
              window.location.href = "/contact-us";
            }, 500);
          }}
        >
          <div className="text">Connect With Us</div>
        </button>
      </div>
    </section>
  );
};

export default ConnectUs;
