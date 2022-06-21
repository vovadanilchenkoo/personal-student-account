import './App.css';
import Main from './pages/Main';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Header from './components/Header';
import CourseDetails from './pages/CourseDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' index element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route 
          path='/' 
          element={<ProtectedRoute component={Main} />} 
          />
        <Route 
          path='/home' 
          element={<ProtectedRoute component={Home} />} 
          />
        <Route 
          path='/course-details' 
          element={<ProtectedRoute component={CourseDetails} />} 
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
