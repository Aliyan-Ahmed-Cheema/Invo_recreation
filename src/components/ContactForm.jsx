import React from 'react';
import './ContactForm.css';
const ContactForm = () => {
return (
<section className="contact-section">
<div className="container contact-container">
<div className="form-wrapper">
<h2>Your Vision, Our Expertise</h2>
<p>Submit your information to drive success forward.</p>
<form>
<div className="input-group">
<input type="text" placeholder="Full name*" required />
<input type="tel" placeholder="Contact Number" />
</div>
<input type="email" placeholder="Email*" required />
<input type="text" placeholder="Enter your preferred tech stack..." />
<textarea placeholder="Tell us how we can help.*" required rows="4"></textarea>
<div className="checkbox-group">
<label><input type="checkbox" /> Get NDA</label>
<label><input type="checkbox" /> I agree with T&Cs</label>
</div>
<button type="submit" className="submit-button">Send Message →</button>
</form>
</div>
<div className="stats-wrapper">
<h3>Company's Stats</h3>
<div className="stats-grid">
<div className="stat-item"><strong>300+</strong><span>Successful Projects</span></div>
<div className="stat-item"><strong>97%</strong><span>Success Rate</span></div>
<div className="stat-item"><strong>500+</strong><span>Developers & Engineers</span></div>
<div className="stat-item"><strong>10+</strong><span>Years of Experience</span></div>
</div>
{/* Award logos can be added here */}
</div>
</div>
</section>
);
};
export default ContactForm;