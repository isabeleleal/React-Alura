import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const background = { backgroundColor: props.corSecundaria };
  const border = { borderBottomColor: props.corPrimaria };

  return (
    (props.colaboradores.lenght > 0) ? <section className="time" style={background}>
      <h3 style={border}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => 
          <Colaborador
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        )}
      </div>
    </section>
    :''
  );
};

export default Time;
