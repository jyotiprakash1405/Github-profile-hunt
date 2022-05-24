import './App.css';
import {Routes , Route} from 'react-router-dom'
import Logo from './components/Logo';
import Users from './components/Routes/Users';
import UserInfo from './components/Routes/UserInfo';

function App() {
  return (
    <div className="App">
      <div className='inner-div'>
        <Logo/>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/:name' element={<UserInfo/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
