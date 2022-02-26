import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation.js';
import Home from './Home.js';
import Form from './Form.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
