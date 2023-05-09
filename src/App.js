
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Homepage from './component/Homepage';
import Movie from './component/movie/Movie';
import Admin from './component/admin/Admin';
import User from './component/user/User';
import Auth from './component/auth/Auth';

function App() {
  return (
    <div className="App">
      {/* //header will be available in all pages */}
     <Header/>
     <section>
      <Routes>
        {/* default route */}
        <Route path='/' element={<Homepage/>}/>
        <Route path='/movie' element={<Movie />}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
     </section>
    </div>
  );
}

export default App;
