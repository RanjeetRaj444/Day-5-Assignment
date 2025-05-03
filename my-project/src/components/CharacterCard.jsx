import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => (
  <div className="card">
    <Link to={`/character/${character.id}`} target="_blank">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Species:- {character.species}</p>
      <p>
        Status :-{" "}
        <span
          style={{ color: `${character.status}` == "Alive" ? "rgb(10, 242, 10)" : "rgb(245, 14, 14)" ,fontWeight:"bold"}}
        >
          {character.status}
        </span>
      </p>
    </Link>
  </div>
);

export default CharacterCard;
