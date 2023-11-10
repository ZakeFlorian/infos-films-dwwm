import './App.css';
import Home from './Home/Home'
import About from './About/About';
import Layout from './components/Layout/Layout';
import Search from './Search/Search';
import List from './List/List';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

          <Route path="/Search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/List/:data" element={<List />} />

      </Routes>
  );
} 
