import { Fornecedor } from './fornecedor';

export interface Mercadoria {
  id?: number;
  nome: string;
  descricao: string;
  dataValidade: string;
  dataCadastro?: string;
  quantidade: number;
  fornecedor: Fornecedor;
}
