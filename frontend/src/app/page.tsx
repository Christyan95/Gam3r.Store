import ProdutoItem from '@/components/produto/ProdutoItem';
import { produtos } from '@/core';

export default function Inicio() {
  return (
    <div className="grid grid-cols-4 gap-5 container">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
