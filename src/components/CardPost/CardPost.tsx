import "./CardPost.css";
import type { PostProps } from '../../App';

export default function CardPost({nome, mensagem}: PostProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>{nome}</h3>
          <button>Excluir</button>
        </div>
        <div className="card-text">
          <p>
            {mensagem}
          </p>
        </div>
      </div>
    </>
  );
}
