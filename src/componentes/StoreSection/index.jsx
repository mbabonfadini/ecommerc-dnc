import "./index.scss";
import { Link } from "react-router-dom";

const StoreSection = ({ data }) => {
  return (
    <div className="home__card">
      <img src={data.imgPath}></img>
      <div className="card__titles">
        <p>{data.title}</p>
        <Link className="card__titles__link" to={`/produto/${data.id}`}>Ver Mais</Link>
      </div>
    </div>
  );
};
export default StoreSection;
