import './App.css';
import Loading from '../../components/News/Loading';
import News from '../../components/News/News';
import Button from '../../components/News/Button';

function App() {
  return (
    <div className="App">
        <h1>Welcome to Redux Saga Module</h1>
        <Button />
        <Loading />
        <News />
    </div>
  );
}

export default App;
