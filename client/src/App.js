import './App.css';
import {Router} from '@reach/router';
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      
      <Router>

        <AllAuthors path="/" />

        <NewAuthor path="/new" />
        <Error path="/error" />


        <EditAuthor path="/edit/:id" />


      </Router>



    </div>
  );
}

export default App;
