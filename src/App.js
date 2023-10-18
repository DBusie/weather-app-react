import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="lisbon" />
        <footer>
          This project was coded by Busi Shumba and is {""}
          <a
            href="https://github.com/DBusie/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
