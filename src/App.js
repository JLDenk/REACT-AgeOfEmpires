import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Mejores jugadores de Age of Empires 2:</h1>
        <Testimonio 
        nick="The Viper"
        nombre="Ørjan Larsen"
        imagen="TheViper"
        nacimiento="December 13, 1991"
        pais="Norway"
        testimonio= "TheViper is known for his late game capabilities, decision making, exceptional macro and unit control. Becoming an active player in 2010, TheViper has won more tournaments than any other AoE2 player in history and is often considered to be the best AoE2 player of all time. In May 2019 TheViper moved to Leipzig, Germany." />
        <Testimonio 
        nick="Daut"
        nombre="Darko Dautovic"
        imagen="Daut"
        nacimiento="July 30, 1985"
        pais="Serbia"
        testimonio="He was around 13/14 when he started playing Age of Empires II. DauT is known for his strong macro-oriented play and prepared strategies, while there are many jokes about the so-called 'DauT micro' . Since DauT became known for trying to build Castles, but not being able to finish them, unfinished Castles are called 'DauT castles'." />
       <Testimonio 
        nick="Hera"
        nombre="Hamzah El-Baher"
        imagen="Hera"
        nacimiento="October 14, 1999"
        pais="Canada"
        testimonio="Hera is of Palestinian origin. Hera is known for his very strong macro play and his love for Hussars. He chose the nick name 'Hera' because he 'liked the name, and it sounded good, and it was a mythological figure'." />
      </div>
    </div>
  );
}

export default App;
