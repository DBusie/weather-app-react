import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div fluid="sm" className="container">
        <Weather defaultCity="maseru" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/busi-doreen-b2a17a38"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Busi Shumba
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/DBusie/weather-app-react"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            open-sourced
          </a>{" "}
          on Github and hosted on{" "}
          <a
            href="https://voluble-bubblegum-59654e.netlify.app/"
            alt="netlify-link"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
