import { Link } from "react-router-dom";
import Pelemele from "./Pelemele";

export default function Photos() {
  return (
    <div>
      <div className="gallerie-sous-title">
        <h2> Photos</h2>
      </div>
      <div className="photos">
        <Pelemele />

        <Link to="/photo" className="btn-photo">
          + de Photos
        </Link>
      </div>
    </div>
  );
}
