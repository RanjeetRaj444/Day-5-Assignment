import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/characterdetail.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="detail">
      <div className="image-container">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="info-container">
        <h2>{character.name}</h2>

        <p>
          <strong>Status:</strong>{" "}
          <span
            style={{
              color:
                `${character.status}` == "Alive"
                  ? "rgb(10, 242, 10)"
                  : "rgb(245, 14, 14)",
            }}
          >
            {character.status}
          </span>
        </p>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        {character.type && (
          <p>
            <strong>Type:</strong> {character.type}
          </p>
        )}
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <p>
          <strong>Origin:</strong> {character.origin.name}
        </p>
        <p>
          <strong>Location:</strong> {character.location.name}
        </p>
        <p>
          <strong>Episode Count:</strong> {character.episode.length}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
