// HomePage.jsx
import React from "react";
import "../styles/Home2.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Welcome to FutureTech</h1>
      <p>Innovating Tomorrow, Today.</p>
      <a href="#features" className="hero-btn">
        Explore More
      </a>
    </div>
  </section>
);

const About = () => (
  <section className="about" id="about">
    <div className="about-container">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          FutureTech is redefining the boundaries of innovation by integrating
          the latest technological advancements with everyday solutions. Our
          mission is to build a smarter, more connected world.
        </p>
        <p>
          Join us on this extraordinary journey to transform ideas into
          revolutionary realities.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="About Us"
        />
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="features" id="features">
    <h2>Our Features</h2>
    <div className="features-container">
      <div className="feature-card">
        <h3>AI Integration</h3>
        <p>
          Revolutionizing industries through Artificial Intelligence and machine
          learning applications.
        </p>
      </div>
      <div className="feature-card">
        <h3>Blockchain Security</h3>
        <p>
          Empowering decentralized systems for ultimate transparency and data
          protection.
        </p>
      </div>
      <div className="feature-card">
        <h3>IoT Connectivity</h3>
        <p>
          Creating smarter homes, businesses, and cities with seamless IoT
          solutions.
        </p>
      </div>
      <div className="feature-card">
        <h3>Cloud Computing</h3>
        <p>
          Robust, scalable, and secure cloud services to future-proof your
          operations.
        </p>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section className="gallery" id="gallery">
    <h2>Gallery</h2>
    <div className="gallery-container">
      <img
        src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc"
        alt="Gallery 1"
      />
      <img
        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf5b3"
        alt="Gallery 2"
      />
      <img
        src="https://images.unsplash.com/photo-1611429339144-1eaf6e7fe4d4"
        alt="Gallery 3"
      />
      <img
        src="https://images.unsplash.com/photo-1618005198919-d3d7c8aa9c86"
        alt="Gallery 4"
      />
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <h2>What Our Clients Say</h2>
    <div className="testimonials-container">
      <div className="testimonial-card">
        <p>
          "FutureTech helped us transform our business operations through
          cutting-edge AI solutions."
        </p>
        <h4>- Sarah Lee, CEO</h4>
      </div>
      <div className="testimonial-card">
        <p>"Exceptional innovation and professionalism. Highly recommended!"</p>
        <h4>- James Miller, CTO</h4>
      </div>
      <div className="testimonial-card">
        <p>
          "The blockchain integration provided by FutureTech secured our
          transactions like never before."
        </p>
        <h4>- Linda Garcia, CFO</h4>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact Us</h2>
    <form className="contact-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2025 FutureTech. All rights reserved.</p>
    <div className="footer-links">
      <a href="#about">About</a>
      <a href="#features">Features</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </div>
  </footer>
);

export default HomePage;
