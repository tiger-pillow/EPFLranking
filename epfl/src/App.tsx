import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation.tsx';
import Home from './Home.tsx';
import Form from './Form.tsx';
import Form2 from './Form2.tsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/form2" element={<Form2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
