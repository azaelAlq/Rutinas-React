import React from "react";
import { useState } from "react";

function Entrada() {
  const [valor, setvalor] = useState("");
  const verEntrenamiento = (e) => {
    e.preventDefault();
    if (valor === "") {
      alert("Selecciona un entrenamiento");
    } else {
      alert(`Iniciando entrenamiento de ${valor}`);
    }
  };
  return (
    <div>
      <div>
        <h2>Editar rutinas</h2>
        <p>Editar rutinas de ejercicios</p>
      </div>
      <div>
        <h2>Comenzar a hacer ejercicio</h2>
        <form onSubmit={verEntrenamiento}>
          <select defaultValue="" onChange={(e) => setvalor(e.target.value)}>
            <option value="" disabled>
              Selecciona que trabajaras
            </option>
            <option value="Brazo">Brazo</option>
            <option value="Pierna">Pierna</option>
            <option value="Espalda pecho">Espalda</option>
          </select>
          <button>Iniciar entrenamiento</button>
        </form>
      </div>
    </div>
  );
}

export default Entrada;
