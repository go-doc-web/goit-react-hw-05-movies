import { BrowserRouter } from 'react-router-dom';

import NavBar from 'modules/NavBar';
import UserRoutes from 'UserRoutes/UserRotes';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <UserRoutes />
    </BrowserRouter>
  );
};

export default App;
