import styles from "./Comanda.module.css";

function Comanda({ pedidos }) {
    
  // Lógica do valor total ficará aqui
   let valorTotal = pedidos.reduce((acc, item) => {
    return acc + (item.precoUnitario * item.quantidade);
  }, 0);
  const taxaDeservico = valorTotal * 0.1

  valorTotal += taxaDeservico


  return (
    <>
    <div className={styles.recibo}>
      {<div className={styles.cabecalho}>
        <h2>🧾 Resumo do Pedido</h2>
        <p>Mesa 04 - Atendente: João</p>
      </div>
}
    </div>
    <ul className={styles.lista}>
        {/* Usando .map() para exibir cada item da lista */}
        {pedidos.map((item) => {
          const subtotal = item.precoUnitario * item.quantidade;
          
          return (
            <li key={item.id} className={styles.itemLista}>
              <div className={styles.nomeQuantidade}>
                <span>{item.quantidade}x</span>
                <span>{item.nome}</span>
              </div>
              {/* O .toFixed(2) garante que mostre sempre 2 casas decimais (ex: 25.50) */}
              <span>R$ {subtotal.toFixed(2)}</span>
            </li>
          );
        })}
      </ul>
      <hr className={styles.linhaDivisoria} />
      <span>Taxa de serviço:</span>
      <span className={styles.valorTotal}>R$ {taxaDeservico.toFixed(2)}</span>
      <div className={styles.totalDiv}>
        <span>Total a Pagar:</span>
        <span className={styles.valorTotal}>R$ {valorTotal.toFixed(2)}</span>
      </div>

</>
  );
}

export default Comanda