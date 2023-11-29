import { Link } from "react-router-dom";
import logo from "../assets/imgs/Logo.svg";
import clock from "../assets/imgs/clock.png";
import list from "../assets/imgs/list.png";

export default function Header() {
  return (
    <header className="flex justify-between pt-10 pb-16 px-10">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav className="flex gap-2">
        <Link to="/">
          <img src={clock} alt="" />
        </Link>
        <Link to="history">
          <img src={list} alt="" />
        </Link>
      </nav>
    </header>
  );
}
