import { LitElement, html, css } from 'lit';
import '../components/nav-bar.js';

export default class AboutPage extends LitElement {

  static styles = css`
  `;
  
  render() {
    return html`
      <nav-bar></nav-bar>
      <h1>About Page</h1>
    `;
  }
}

customElements.define('about-page', AboutPage);