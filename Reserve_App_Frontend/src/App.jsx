import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/home';
import BereaCollege from './components/Pages/berea-college';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berea-college" element={<BereaCollege />} />
       </Routes>
    </>
 );
};

export default App;