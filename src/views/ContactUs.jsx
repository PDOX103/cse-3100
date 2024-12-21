import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="contact-us container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <section className="contact-details mb-5">
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> Dhaka, Bangladesh
        </p>
        <p>
          <strong>Email:</strong> fahmidulkarimrafi@gamil.com
        </p>
        <p>
          <strong>Phone:</strong> +8801518951055
        </p>
      </section>

      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone" className="form-label">
              <strong>Phone Number</strong>
            </label>
            <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter your phone number" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
