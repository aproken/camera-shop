import { Link } from 'react-router-dom';
import './style.css';

function NotFoundPage(): JSX.Element {
  return (
    <main className="not-found-container">
      <div className="not-found-content">
        <h1 className="title not-found-h1">404</h1>
        <h2 className="title not-found-h2">page not found</h2>
        <Link className="btn btn--purple" rel="stylesheet" to="/" >Вернуться на главную</Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
