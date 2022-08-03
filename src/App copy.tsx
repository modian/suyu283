import React, { useState } from "react";
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
  ]);
  const navigate = useNavigate();

  const handleRemoveUser = (userId: string) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    navigate('/users');
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users users={users} />}>
          <Route
            path=":userId"
            element={<User onRemoveUser={handleRemoveUser} />}
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
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
        <NavLink to="/home" style={style}>Home</NavLink>
        <NavLink to="/users" style={style}>Users</NavLink>
      </nav>
      <main style={{ padding: '1rem 0' }}>
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

const Users = ({ users }: any) => {
  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <Link to={user.id}>
              {user.fullName}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

const User = ({ onRemoveUser }: any) => {
  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>
      <button type="button" onClick={() => onRemoveUser(userId)}>
        Remove
      </button>
      <Link to="/users">Back to Users</Link>
    </>
  );
};

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};

export default App;