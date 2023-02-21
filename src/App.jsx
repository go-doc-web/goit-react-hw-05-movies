import { BrowserRouter } from 'react-router-dom';

import NavBar from 'modules/NavBar';
import UserRoutes from 'UserRoutes/UserRotes';

const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <NavBar />
      <UserRoutes />
    </BrowserRouter>
  );
};

export default App;
