import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);    
  }
  //  Ele vai me retornar uma string HTML, no futuro, com a HTML que eu quero mais os dados que eu quero, fundidos nesse HTML.
  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
    <thead>
    <tr>
    <th>Data</th>
    <th>Quantidade</th>
    <th>Valor</th>
    </tr>
    </thead>
    <tbody>
    ${model.lista().map(negociacao => {
      return`
      <tr>
      <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
      <td>${negociacao.quantidade}</td>
      <td>${negociacao.valor}</td>
      </tr>
      `;
    }).join('')}
    </tbody>
    </table>
    `;
  }
  update(model: Negociacoes): void {
    const template = this.template(model);
    console.log(template);
    this.elemento.innerHTML = template;
  }
}