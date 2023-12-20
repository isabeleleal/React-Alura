import banner from "../../image/banner.png";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      <img src={banner} alt="Aqui temos um banner" />
    </header>
  );
}

export default Banner;
