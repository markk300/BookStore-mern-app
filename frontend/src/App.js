import "./App.css";
import AddBook from "./components/AddBook.js";
import Books from "./components/Book/Books.js";
import Header from "./components/Header.js";
import About from "./components/About.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Book/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="/:id" element={<Details />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
