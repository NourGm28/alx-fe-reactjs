const Home = () => {
    const login = () => localStorage.setItem("isAuthenticated", "true");
    const logout = () => localStorage.setItem("isAuthenticated", "false");
  
    return (
      <div>
        <h1>Home</h1>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    );
  };
  
  export default Home;
  