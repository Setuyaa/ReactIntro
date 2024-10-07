// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { updateNewPostText } from './redux/state';


const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route exact path='/dialogs' element={< Dialogs store={props.store}/>} />
            <Route path='/profile' element={< Profile profilePage={props.state.messagesPage} 
                                   dispatch={props.dispatch} />}  />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' Component={Settings} />

          </Routes>
          {/* <Dialogs /> */}
        </div>
        {/* <Profile /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
