import axios from 'axios';

const fetchUserData = async ({ username, location,repos, minRepos }) => {
    try {
        let query = '';
        if (username) query += `${username}`;
        if (location) query += `+location:${location}`;
        if (repos) minRepos += `+repos:>${repos}`;
        const res = await axios.get('https://api.github.com/search/users?q');
        return res.data.items;
    } catch (error) {
        throw new Error(error,'User not found');
    }
}