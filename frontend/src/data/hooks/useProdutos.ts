'use client'
import { Produto } from "@/core"
import { useCallback, useEffect, useState } from "react"

const urlBase = 'http://localhost:4000'

export default function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  async function obterProdutos(): Promise<Produto[]> {
    const resp = await fetch(`${urlBase}/produtos`)
    const produtos = await resp.json()
    return produtos ?? []
  }

  const obterProdutosPorId = useCallback(async function obterProdutosPorId(id: number): Promise<Produto | null> {
    const resp = await fetch(`${urlBase}/produtos/${id}`)
    const produtos = await resp.json()
    return produtos ?? null
  }, [])

  useEffect(() => {
    obterProdutos().then(setProdutos)
  }, [])

  return {
    produtos,
    obterProdutosPorId
  }
}