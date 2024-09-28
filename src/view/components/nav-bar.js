import { LitElement, html, css } from 'lit';

export default class NavBar extends LitElement {

  static styles = css`
  `;
  
  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);