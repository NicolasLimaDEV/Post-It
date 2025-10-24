import "./CardPost.css";

export default function CardPost() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>Nome do Post-it</h3>
          <button>Excluir</button>
        </div>
        <div className="card-text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            repellat voluptate nam porro impedit, optio iusto veritatis in quia
            odio exercitationem nisi eligendi expedita id nobis dolorem beatae
            at obcaecati!
          </p>
        </div>
      </div>
    </>
  );
}
