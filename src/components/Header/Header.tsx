import Search from "../../assets/icon_Search.svg";
import "./styles.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>HOME</li>
          <li>PAGES</li>
          <li>DOCS</li>
        </ul>
      </nav>
      <h1>Carrinho de Compras</h1>
      <div className="div_main">
        <span>LOG IN</span>

        <img src={Search} alt="search icon " />

        <div className="info_card">
          <div>CARD</div>
          <div>3</div>
        </div>
      </div>
    </header>
  );
}
