import React, { useState } from 'react';    

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');


    const handleChange = (e) => {
        const { name , value} =e.target;
        setFormData((prev) => ({...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, email, password} = formData;

        if(!username || !email || !password) {
            setError('All fields are required');
            return;
        }
        if (!username || !email || !password) {
            setError('All fields are required');
            return;
        }
        setError('');
        alert("Form submitted successfully");
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2>Regestiration Form</h2>
            {error && <p>{error}</p>}
            <label>
                Username:
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
            </label>
        <br />
        <label>
            Email:
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange} 
            />
                </label>
            <br />
            <label>
                Password:
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Register</button>
            </form>
    );
};

export default RegistrationForm;