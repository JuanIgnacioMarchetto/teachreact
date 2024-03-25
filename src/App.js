import React, { useState } from 'react';
import './App.css';

function App() {
  const ejercicios = [
    {
      pregunta: '¿Cómo se crea un componente funcional en React?',
      respuesta: 'function NombreComponente() { return <div></div>; }',
    },
    {
      pregunta: '¿Cómo se renderiza un componente en React?',
      respuesta: '<NombreComponente />',
    },
    {
      pregunta: '¿Cómo se define un estado en un componente de clase en React?',
      respuesta: 'this.state = { /* estado inicial */ };',
    },
    {
      pregunta: '¿Cómo se actualiza el estado en un componente de clase en React?',
      respuesta: 'this.setState({ /* nuevo estado */ });',
    },
    {
      pregunta: '¿Cómo se pasa props a un componente en React?',
      respuesta: '<MiComponente nombreProp={valorProp} />',
    },
    {
      pregunta: '¿Cómo se accede a las props dentro de un componente en React?',
      respuesta: 'this.props.nombreProp',
    },
    {
      pregunta: '¿Cómo se manejan los eventos en React?',
      respuesta: 'onClick={this.handler}',
    },
    {
      pregunta: '¿Qué es JSX en React?',
      respuesta: 'Una extensión de sintaxis similar a XML que permite escribir código HTML dentro de JavaScript en React.',
    },
    {
      pregunta: '¿Qué es un componente en React?',
      respuesta: 'Una pieza reutilizable de interfaz de usuario que puede contener HTML, lógica y estilos.',
    },
    {
      pregunta: '¿Cuál es el ciclo de vida de un componente en React?',
      respuesta: 'Montaje, Actualización y Desmontaje.',
    },
  ];

  const [indexEjercicio, setIndexEjercicio] = useState(0);
  const [respuestaUsuario, setRespuestaUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');

  const verificarRespuesta = () => {
    if (respuestaUsuario.trim() === ejercicios[indexEjercicio].respuesta) {
      setMensaje('¡Correcto! Sigue así.');
      if (indexEjercicio < ejercicios.length - 1) {
        setIndexEjercicio(indexEjercicio + 1);
      } else {
        setMensaje('¡Vas muy bien! Pronto te daremos más ejercicios para seguir aprendiendo.');
      }
    } else {
      setMensaje('Respuesta incorrecta. Sigue intentándolo.');
    }
  };

  return (

    <div className="App">
      <div>
        <div>
          <h2>Conceptos Básicos de React</h2>
          <p></p>
          <h3>1. Componente Funcional y de Clase:</h3>
          En React, un componente es una pieza reutilizable de interfaz de usuario que puede contener HTML, lógica y estilos. Los componentes pueden ser de dos tipos principales: funcionales y de clase. Los componentes funcionales son simples funciones de JavaScript que devuelven elementos de React, mientras que los componentes de clase son clases de JavaScript que extienden la clase React.Component.
          <p><h3>2. Estado en Componentes de Clase:</h3>
            El estado en React es un objeto que contiene datos que pueden cambiar con el tiempo. En un componente de clase, el estado se define en el constructor usando this.state. El estado se actualiza usando el método setState.
          </p>
          <p> <h3>3. Props:</h3>
            Las props son objetos que permiten pasar datos de un componente a otro en React. Se utilizan para pasar información de padre a hijo y son de solo lectura en el componente hijo. Las props se pasan como atributos a los componentes.
          </p>
          <p> <h3>4. Acceso a las Props:</h3>
            Dentro de un componente de clase en React, las props están disponibles a través de this.props. Se accede a las props como propiedades del objeto props.
          </p>
          <p> <h3>5. Manejo de Eventos:</h3>
            En React, los eventos se manejan utilizando props especiales que comienzan con on. Por ejemplo, onClick, onChange, etc. Puedes definir manejadores de eventos en tus componentes y pasarlos como props a elementos de React.
          </p>
          <p> <h3>6. JSX:</h3>
            JSX es una extensión de sintaxis similar a XML que permite escribir código HTML dentro de JavaScript en React. Facilita la creación de interfaces de usuario en React al proporcionar una sintaxis familiar y declarativa.
          </p>
          <p> <h3>7. Ciclo de Vida del Componente:</h3>
            Los componentes en React tienen un ciclo de vida que consta de tres fases principales: montaje, actualización y desmontaje. Durante estas fases, se ejecutan métodos específicos del ciclo de vida que te permiten realizar tareas como inicializar el estado, realizar operaciones cuando el componente se actualiza o limpiar recursos cuando el componente se desmonta.
          </p>
          <p>Estos conceptos básicos son fundamentales para comprender y trabajar eficazmente con React. Al dominar estos conceptos, podrás construir aplicaciones web modernas de manera más efectiva y escalable.
          </p>


        </div>

      </div>


      <h1>Repasemos Básicos de React</h1>
      <div className="ejercicio">
        <p>{ejercicios[indexEjercicio].pregunta}</p>
        <input
          type="text"
          value={respuestaUsuario}
          onChange={(e) => setRespuestaUsuario(e.target.value)}
        />
        <button onClick={verificarRespuesta}>Comprobar</button>
        <p>{mensaje}</p>
      </div>
    </div>
  );
}

export default App;
