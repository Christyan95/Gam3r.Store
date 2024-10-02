'use client';
import { Produto } from '@/core';
import useProdutos from '@/data/hooks/useProdutos';
import { useEffect, useState } from 'react';

export default function PaginaProduto(props: any) {
  const { obterProdutosPorId } = useProdutos();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    obterProdutosPorId(+props.params.id).then(setProduto);
  }, [props.params.id, obterProdutosPorId]);

  return produto ? (
    <div>{produto?.nome}</div>
  ) : (
    <div>Produto não encontrado</div>
  );
}
