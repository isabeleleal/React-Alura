import "./Rodape.css";
import Fb from "../../image/fb.png";
import Ig from "../../image/ig.png";
import Tw from "../../image/tw.png";
import Logo from "../../image/logo.png";

const Rodape = () => {
  return (
    <div className="rodape">
      <footer>
        <div className="rodape_icons">
          <img src={Fb} alt={" Rodapé "} />

          <img src={Ig} alt={" Rodapé "} />

          <img src={Tw} alt={" Rodapé "} />
        </div>
        <div className="rodape_logo">
          <img src={Logo} alt={" Rodapé "} />
        </div>
        <div>
            <h3>Desenvolvido por Isabele Leal</h3>
        </div>
      </footer>
    </div>
  );
};

export default Rodape;
