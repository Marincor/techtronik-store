import { Link } from "react-router-dom";
import { Li } from "./styles";

export default function Items(props) {
  return (
    <Link className="link" to={props.url}>
      <Li>{props.text}</Li>
    </Link>
  );
}
