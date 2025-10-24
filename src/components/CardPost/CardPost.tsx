import "./CardPost.css";
import type { PostProps } from '../../App';

interface CardPostProps extends PostProps{
  onDelete: ()=> void
}

export default function CardPost({nome, mensagem, onDelete}: CardPostProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>{nome}</h3>
          <button onClick={onDelete}>Excluir</button>
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
