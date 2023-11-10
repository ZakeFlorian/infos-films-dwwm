import './App.css';
import Home from './Home/Home'
import App from './About/About';
import App from './components/Layout/Layout'; 

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
      <Route path="/" element= {<Layout />} />
      <Route index element={<Home />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </div>
  );
}

export default App;
