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
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://voluble-bubblegum-59654e.netlify.app/"
            alt="netlify-link"
            target="_blank"
            rel="noreferrer"
          >
            netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
