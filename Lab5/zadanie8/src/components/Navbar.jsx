import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <nav>
      <ul>
        <li><Link to="/">Strona Główna</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/dodaj">Dodaj Artykuł</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;