import { LitElement, html, css } from 'lit';
import '../components/nav-bar.js';

export default class ContactPage extends LitElement {

  static styles = css`
  `;
  
  render() {
    return html`
      <nav-bar></nav-bar>
      <h1>Contact Page</h1>
    `;
  }
}

customElements.define('contact-page', ContactPage);