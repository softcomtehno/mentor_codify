import { Route, Routes } from 'react-router-dom';
import App from './App';
import PlansPage from './pages/plans';


function Application() {
  return (
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<PlansPage />} path="/plans" />
    </Routes>
  );
}

export default Application;
