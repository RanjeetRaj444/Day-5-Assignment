import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import "../styles/home.css";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setMaxPages(data.info.pages);
      });
  }, [page]);

  return (
    <div className="home">
      <h1>Rick and Morty Characters</h1>
      <div className="grid">
        {characters.slice(0, 6).map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Previous
        </button>
        <span>Page {page}</span>
        <button
          disabled={page === maxPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
