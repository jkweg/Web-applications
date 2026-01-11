import { Link } from 'react-router-dom';

function Home(){
  return (
    <div className="card" style={{ textAlign: 'center' }}>
        
      <h1>Witaj na naszym Blogu!</h1>
      
      <p>Poczytaj se jakies artykuły </p>

      <Link to="/blog" className="btn-link" style={{ marginTop: '20px' }}>
        Przejdź do Bloga
      </Link>

    </div>
  );
};

export default Home;