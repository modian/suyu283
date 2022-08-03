import Kiwitter from 'kiwitter/Kiwitter';
import Kokoa from 'kokoa/Kokoa';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='kiwitter/*' element={<Kiwitter />} />
        <Route path='kokoa/*' element={<Kokoa />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  return (
    <>
      <h1>React Router</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <ul>
          <li>
            <NavLink to='home' style={style}>Home</NavLink>
          </li>
          <li>
            <NavLink to='users' style={style}>Users</NavLink>
          </li>
          <li>
            <NavLink to='kiwitter' style={style}>Kiwitter</NavLink>
          </li>
          <li>
            <NavLink to='kokoa' style={style}>Kokoa</NavLink>
          </li>
        </ul>
      </nav>
      <main
        style={{ padding: '1rem 0' }}
      >
        <Outlet />
      </main>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const Users = () => {
  return (
    <>
      <h2>Users</h2>
    </>
  );
};

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};

export default App;