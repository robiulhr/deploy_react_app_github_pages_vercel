import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  return (
    <nav style={{ width: "200px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link style={{ background: location.pathname === "/" && "pink", padding: "4px" }} to={"/"}>
        Home
      </Link>
      <Link style={{ background: location.pathname === "/profile" && "pink", padding: "4px" }} to={"profile"}>
        Profile
      </Link>
    </nav>
  );
}
