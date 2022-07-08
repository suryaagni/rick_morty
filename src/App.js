import "./App.css";
import ListCharacters from "./containers/ListCharacters/ListCharacters";
import DetailView from "./containers/ListCharacters/DetailView";
import StickyFooter from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
  <>
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<ListCharacters/>} />
          <Route path="/:id/details" element={<DetailView/>} />
        </Routes>
      </Router>
    </div>
    <StickyFooter/>
    </>
  );
}

export default App;
