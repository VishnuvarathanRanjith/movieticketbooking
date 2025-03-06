import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTelegram, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-item">
          <i className="icon">🎧</i>
          <p>24/7 CUSTOMER CARE</p>
        </div>
        <div className="footer-item">
          <i className="icon">🎟️</i>
          <p>RESEND BOOKING CONFIRMATION</p>
        </div>
        <div className="footer-item">
          <i className="icon">📩</i>
          <p>SUBSCRIBE TO THE NEWSLETTER</p>
        </div>
      </div>

      <div className="footer-middle">
        <div>
          <h3>Movies now in Chennai</h3>
          <p>Game Changer | Mufasa The Lion King | Madhagajaraja | Vidaamuyarchi | Dragon | Kudumbasthan</p>
        </div>
        <div>
          <h3>Events in Chennai</h3>
          <p>Ungal Deva Music Concert | Vijay Antony 3.0 | KS Chitra live in Concert | Vineeth Sreenivasan live with Band</p>
        </div>
        <div>
          <h3>Standup Comedies</h3>
          <p>Toxic | Porikki Pasanga | Yaaruda Evanga</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-title">Show Time</div>
        <div className="social-icons">
          <FaLinkedin />
          <FaTelegram />
          <FaYoutube />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}
