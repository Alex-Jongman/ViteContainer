import { LitElement, html, css } from 'lit';
import '../components/nav-bar.js';

export default class HomePage extends LitElement {

  static styles = css`
  `;

  render() {
    return html`
      <nav-bar></nav-bar>
      <h1>Home-Page</h1>
    `;
  }
}

customElements.define('home-page', HomePage);