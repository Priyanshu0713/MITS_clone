import logo from './logo.svg';
import './css_files/App.css';
import New_project from './js_files/new_project';
import './css_files/new_project.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<New_project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
