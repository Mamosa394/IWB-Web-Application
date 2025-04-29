import React from "react";
import "../styles/Home2.css";
import Navbar from "./Nav";

const HomePage = () => {
  return (
    <div className="iwb-homepage">
      <Navbar />
      <IwbAbout />
      <IwbFeatures />
      <IwbGallery />
      <IwbTestimonials />
      <Founders />
      <IwbContact />
      <IwbFooter />
    </div>
  );
};

// About Section
const IwbAbout = () => (
  <section className="iwb-about-section" id="iwb-about">
    <div className="iwb-about-container">
      <div className="iwb-about-text">
        <h2>About IWB Technologies</h2>
        <p>
          Founded in 2024 with a capital of M100,000 <br />
          IWB Technologies is aLesotho-based company <br />
          focused on recycling computer parts such as RAM,
          <br />
          hard drives, and motherboards.
        </p>
        <p>
          Co-founded by and later joined by , <br />
          IWB became a leader in eco-friendly e-waste <br />
          recycling across Lesotho.
        </p>
      </div>
      <div className="iwb-about-img">
        <img src="/images/logo.jpg" alt="IWB Technologies" />
      </div>
    </div>
  </section>
);

// Features Section
const IwbFeatures = () => (
  <section className="iwb-features-section" id="iwb-features">
    <h2>Our Core Services</h2>
    <div className="iwb-features-container">
      <FeatureCard
        title="RAM Recycling"
        text="Eco-friendly extraction and repurposing of memory modules."
      />
      <FeatureCard
        title="Hard Drive Destruction"
        text="Secure disposal and data-erased recycling."
      />
      <FeatureCard
        title="Motherboard Recovery"
        text="Reusing and reselling salvaged motherboard components."
      />
      <FeatureCard
        title="Consulting & Partnerships"
        text="Helping scale sustainable tech across Africa."
      />
    </div>
  </section>
);

const FeatureCard = ({ title, text }) => (
  <div className="iwb-feature-card">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

// Gallery Section
const IwbGallery = () => (
  <section className="iwb-gallery-section" id="iwb-gallery">
    <h2>Our Work in Action</h2>
    <div className="iwb-gallery-container">
      <img
        src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc"
        alt="Recycling Process"
      />
      <img
        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf5b3"
        alt="Tech Lab"
      />
      <img
        src="https://images.unsplash.com/photo-1611429339144-1eaf6e7fe4d4"
        alt="Team at Work"
      />
      <img
        src="https://images.unsplash.com/photo-1618005198919-d3d7c8aa9c86"
        alt="Recycled Parts"
      />
    </div>
  </section>
);

// Testimonials Section
const IwbTestimonials = () => (
  <section className="iwb-testimonials-section" id="iwb-testimonials">
    <h2>Voices of IWB</h2>
    <div className="iwb-testimonials-container">
      <Testimonial
        quote="Lesotho now leads in e-waste recycling thanks to IWB."
        author="Thabo Tlou"
      />
      <Testimonial
        quote="Innovation at IWB is driving change across Southern Africa."
        author="Mamosa Motsie"
      />
      <Testimonial
        quote="They helped us merge sustainability with technology."
        author="Keletso Hato"
      />
      <Testimonial
        quote="Proud to be part of this green tech movement."
        author="Thato Chelane"
      />
    </div>
  </section>
);

const Testimonial = ({ quote, author }) => (
  <div className="iwb-testimonial-card">
    <p>"{quote}"</p>
    <h4>- {author}</h4>
  </div>
);

// Founders Section
const Founders = () => (
  <section className="founders-section" id="iwb-founders">
    <h2>Meet the Founders</h2>
    <div className="founders-container">
      <FounderCard name="Kenneth" role="Co-founder & CEO" />
      <FounderCard name="Shadrack" role="Co-founder & CTO" />
      <FounderCard name="Thabo" role="Co-founder & CMO" />
      <FounderCard name="Keletso" role="Co-founder & CFO" />
    </div>
  </section>
);

const FounderCard = ({ name, role }) => (
  <div className="founder-card">
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

// Contact Section
const IwbContact = () => (
  <section className="iwb-contact-section" id="iwb-contact">
    <h2>Contact Us</h2>
    <form className="iwb-contact-form">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  </section>
);

// Footer Section
const IwbFooter = () => (
  <footer className="iwb-footer">
    <p>© 2025 IWB Technologies. All rights reserved.</p>
    <div className="iwb-footer-links">
      <a href="#iwb-about">About</a>
      <a href="#iwb-features">Services</a>
      <a href="#iwb-gallery">Gallery</a>
      <a href="#iwb-contact">Contact</a>
    </div>
  </footer>
);

export default HomePage;
