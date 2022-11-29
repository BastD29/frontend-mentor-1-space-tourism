import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/destinations">Destinations</Link>{" "}
        <Link to="/crew">Crew</Link>{" "}
        <Link to="/technology">Technology</Link>
    </nav>
  )
}
