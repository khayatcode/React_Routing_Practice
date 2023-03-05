import './App.css';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<h1>Welcome</h1>}/>
          <Route path='/:title' element={<Word/>}/>
          <Route path='/:title/:textClr/:bgClr' element={<Word/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
