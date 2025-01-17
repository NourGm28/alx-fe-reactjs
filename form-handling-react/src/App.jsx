import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PostsComponent } from './components/PostsComponent'; 


// Components
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
    </>
  );
}


export default App;
