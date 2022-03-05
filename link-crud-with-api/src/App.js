import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>Links App</h1>
      <nav
        style={{
          borderBottom:'1px solid'
        }}
        >
          <Link to='/'>Links</Link> - {' '}
          <Link to='/about'>About</Link> - {' '}
          <Link to='/links/new'>New link</Link> - {' '}
          <Link to='/links/home'>Home</Link> - {' '}
        </nav>
        <p>Outlet component here</p>
        <Outlet />
    </div>
  );
}

export default App;