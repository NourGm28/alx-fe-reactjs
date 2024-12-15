import axios from 'axios';

const fetchUserData = async (username) => {
    try {
        const res = await axios.get('https://api.github.com/users/${username}');
        return res.data;
    } catch (error) {
        throw new Error(error,'User not found');
    }
}