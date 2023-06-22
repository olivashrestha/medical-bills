import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="header">
        <div class="container">
            <nav>
                <img src="images/a.png" class="logo"></img>
                <ul>
                    <li> <a href="#"> Home </a></li>
                    <li> <a href="#"> About </a></li>
                    <li> <a href="#"> Skills</a></li>
                    <li> <a href="#"> Projects</a></li>
                    <li> <a href="#"> Contact </a></li>
                </ul>
            </nav>
        </div>

        <div class="header-text">
            <p>CS Student @University of Rochester</p>
            <h1>Hi, I am <span>Oliva,</span> a rising junior at UofR.</h1>
        </div>
    </div>
  );
}

export default App;