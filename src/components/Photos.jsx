import { Link } from "react-router-dom";
import Pelemele from "./Pelemele";

export default function Photos() {
  return (
    <div>
      Photos
      <div className="photos">
        <Pelemele />

        <Link to="/photo" className="btn-photo">
          + de Photos
        </Link>
      </div>
    </div>
  );
}
