import { useState } from 'react'
function Search ({onSearch}) {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [location, setLocation] = useState('');
    const [repos, setRepos] = useState('');
    const [filters, setFilters] = useState({});
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);


    const onChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSearch = async (filters) => {
        setLoading(true);
        setError('');
        try {
          const users = await fetchUserData({ ...filters });
          setResults(users);
        } catch (err) {
          setError('looks like we cant find the user');
        } finally {
          setLoading(false);
        }
    }
    return (
        <div className="space-y-4" >
        <form onSubmit={onSubmit}  className="p-4 bg-gray-100 rounded-md shadow-md space-y-4">
            <div>
        <label className="block text-sm font-medium text-gray-700">GitHub Username</label>
            <input type='search' placeholder='Search a User' onChange={onChange} value={username} className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
        <input
          type="number"
          placeholder="Enter minimum repos"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" type='submit'>Search</button>
        </form>  
        
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500" >{error}</p>}
        {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((user) => (
            <div key={user.id} className="p-4 border rounded-md shadow-sm">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repos: {user.public_repos || 'N/A'}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
        {userData (
            <div>
                <img src={userData.avatar_url} alt={`${userData.login} avatar`} />
                <h2>{userData.name}</h2>
                <a href={userData.html_url} target='_blank' rel='noopener noreferrer'>
                    Visit Profile
                </a>
            </div>
        )}

        const loadMore = async () => {
            setLoading(true);
            try {
              const newResults = await fetchUserData({ ...filters, page: page + 1 });
              setResults((prevResults) => [...prevResults, ...newResults]);
              setPage(page + 1);
            } catch (err) {
              setError('Failed to fetch more results');
            } finally {
              setLoading(false);
            }
          };
          
          {results.length > 0 && <button onClick={loadMore}>Load More</button>}
          
        </div>
    )
}

export default Search;