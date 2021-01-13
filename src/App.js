import logo from "./logo.svg";
import "./App.css";
import Row from "./row";
import requests from "./request";
import Banner from "./banner";
import Nav from "./nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        isLargeRow
        title="NETFLIX Orginals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRate} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
