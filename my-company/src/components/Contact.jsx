import { useState } from 'react';

function Contact() {
    const [formData , setformData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setformData({
            ...formData, [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={{display: 'black', margin: '10px 0', padding: '8px'}}/>

                <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={{ display: 'block', margin: '10px 0', padding: '8px' }}/>
                <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={{ display: 'block', margin: '10px 0', padding: '8px' }}/>
                <button type="submit" style={{ display: 'block', margin: '10px 0', padding: '8px', cursor: 'pointer'}}>Send Message</button>
                </form>
                </div>
    );
}

export default Contact;