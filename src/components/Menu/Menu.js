import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <div className="solarSystem">
        <div className="solar">
          <img className="home" src="" alt="" />
        </div>
        <div className="earth">
          <img src="" alt="" />
        </div>
        <div className="mars">
          <img src="" alt="" />
        </div>
        <div className="saturn">
          <img src="" alt="" />
        </div>
        <div className="uranus">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}