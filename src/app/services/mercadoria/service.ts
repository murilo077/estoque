import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mercadoria } from '../../models/mercadoria';

@Injectable({
  providedIn: 'root'
})
export class MercadoriaService {
  private api = 'http://localhost:8080/mercadorias';

  constructor(private http: HttpClient) {}

  listar(): Observable<Mercadoria[]> {
    return this.http.get<Mercadoria[]>(this.api);
  }

  buscarPorId(id: number): Observable<Mercadoria> {
    return this.http.get<Mercadoria>(`${this.api}/${id}`);
  }

  salvar(mercadoria: Mercadoria): Observable<Mercadoria> {
    return this.http.post<Mercadoria>(this.api, mercadoria);
  }

  atualizar(id: number, mercadoria: Mercadoria): Observable<Mercadoria> {
    return this.http.put<Mercadoria>(`${this.api}/${id}`, mercadoria);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  listarPorFornecedor(id: number): Observable<Mercadoria[]> {
    return this.http.get<Mercadoria[]>(`http://localhost:8080/fornecedores/${id}/mercadorias`);
  }
}
