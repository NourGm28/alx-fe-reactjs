import { useState } from 'react'
function Search ({onSearch}) {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onChange = (e) => {
        setUsername(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError('Looks like this user does not exist');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <form onSubmit={onSubmit} >
            <input type='search' placeholder='Search a User' onChange={onChange} value={username} />
            <br />
            <button style={{margin:'20px'}} type='submit'>Search</button>
        </form>  
        
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && (
            <div>
                <img src={userData.avatar_url} alt={`${userData.login} avatar`} />
                <h2>{userData.name || userData.login}</h2>
                <a href={userData.html_url} target='_blank' rel='noopener noreferrer'>
                    Visit Profile
                </a>
            </div>
        )}
        </>
    )
}

export default Search