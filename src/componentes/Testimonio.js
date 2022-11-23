import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio (props) {
  return (
    <div className="contenedor-testimonio">
      <img 
        className= "imagen-testimonio"
        src={require(`../imagenes/imagen-${props.imagen}.png`)}
        alt="Foto de Perfil" />

      <div className="contenedor-texto-testimonio" >
        <p className="nombre-testimonio"><strong>{props.nick}</strong> ({props.nombre})</p>
        <p className="cargo-testimonio">{props.nacimiento} in {props.pais}</p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;