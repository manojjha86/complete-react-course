import logo from './logo.svg';
import Demo from './Components/Demo';
import DemoContext from './DemoContext'
import ErrorBoundary from './Components/ErrorBoundaries'
import './App.css';

function App() {
  return (
    <DemoContext.Provider value={{value: "This value is coming from demo context"}}>
      <div className="App">
        <ErrorBoundary>
          <Demo name={'Hello World!'}>Setting Children props from App component</Demo>
        </ErrorBoundary>
      </div>
    </DemoContext.Provider>
    
  );
}

export default App;
