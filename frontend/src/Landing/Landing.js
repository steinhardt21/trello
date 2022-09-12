import './Landing.scss';
import CardBoard from '../components/CardBoard/CardBoard'

function App() {
  return (
    <div className='landingPage'>
      <h1>Trello clone</h1>
      <div className='boardContainer'>
        <CardBoard />
        <CardBoard />
        <CardBoard />
        <CardBoard />
        <CardBoard />
        <CardBoard />
        <CardBoard />
        <CardBoard />
      </div>
    </div>
  );
}

export default App;
