
import './App.css';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />

          <Route path="/DetailsPage" element={<DetailsPage></DetailsPage>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
