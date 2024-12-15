import axios from 'axios';

const fetchUserData = async ({ username, location, repos }) => {
    try {
        let query = '';
        if (username) query += `${username}`;
        if (location) query += `+location:${location}`;
        if (repos) query += `+repos:>${repos}`;
        const res = await axios.get('https://api.github.com/users/${query}');
        return res.data.items;
    } catch (error) {
        throw new Error(error,'User not found');
    }
}