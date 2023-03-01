import "./Navbar.css";
import "./Button.css";

export default function Button({ text, onClick, istrue }) {
  return (
    <button className={`${istrue ? "accept" : "reject"}`} onClick={onClick}>
      {text}
    </button>
  );
}
