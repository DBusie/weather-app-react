import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        fluid="sm"
        className="container"
        style={{ backgroundImage: "url(/namibia.jpg)" }}
      >
        <Weather defaultCity="lisbon" />
        <footer>
          This project was coded by Busi Shumba and is {""}
          <a
            href="https://github.com/DBusie/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on Github and hosted on{" "}
          <a
            href="https://voluble-bubblegum-59654e.netlify.app/"
            alt="netlify-link"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
