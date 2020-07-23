import { html, css, LitElement } from 'lit-element';
import '@material/mwc-button/mwc-button';
import '@material/mwc-textfield/mwc-textfield';

export class WhateverYouLikeKeypad extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--vwc-dialer-text-color, #000);
      }

      #container {
        width: 75vw;
        max-width: 300px;
      }

      .button-row {
        display: flex;
        justify-content: space-evenly;
      }

      .full-width {
        width: 100%;
      }

      mwc-button {
          margin: 10px;
      }

      mwc-textfield {
        --mdc-notched-outline-leading-width: 28px;
        --mdc-notched-outline-leading-border-radius: 28px 0 0 28px;
        --mdc-notched-outline-trailing-border-radius: 0 28px 28px 0;
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      noAsterisk: { attribute: 'no-asterisk', type: Boolean },
      noHash: { attribute: 'no-hash', type: Boolean },
      noDisplay: { attribute: 'no-display', type: Boolean },
      actionText: { type: String },
      cancelText: { type: String },
      actionStarted: { type: Boolean },
      digits: { type: String }
    };
  }

  constructor() {
    super();
    this.noAsterisk = false;
    this.noHash = false;
    this.noDisplay = false;
    this.digits = "";
    this.actionText = "Enter";
    this.cancelText = "Cancel"
    this.actionStarted = false;
  }

  __addDigit(digit){
    this.digits += digit;
    const digitAdded = new CustomEvent('digit-added', {
      detail: { digit },
      bubbles: true,
      composed: true });
    this.dispatchEvent(digitAdded);
  }

  __sendDigits(){
    const digitsSent = new CustomEvent('digits-sent', {
      detail: { digits: this.digits },
      bubbles: true,
      composed: true });
    this.dispatchEvent(digitsSent);
  }

  createAction(){
    this.actionStarted = true;
  }

  __endAction(){
    const actionEnded = new CustomEvent('action-ended', {
      detail: { },
      bubbles: true,
      composed: true });
    this.dispatchEvent(actionEnded);
    this.digits = "";
    this.actionStarted = false;
  }

  render() {
    return html`
        <div id="container">
            ${this.noDisplay ? "" : html`<mwc-textfield outlined label="" .value=${this.digits}></mwc-textfield>`}
            <div class="button-row">
                  <mwc-button unelevated @click=${()=>this.__addDigit('1')}>1</mwc-button>
                  <mwc-button unelevated @click=${()=>this.__addDigit('2')}>2</mwc-button>
                  <mwc-button unelevated @click=${()=>this.__addDigit('3')}>3</mwc-button>
            </div>
            <div class="button-row">
                  <mwc-button unelevated @click=${()=>this.__addDigit('4')}>4</mwc-button>
                  <mwc-button unelevated @click=${()=>this.__addDigit('5')}>5</mwc-button>
                  <mwc-button unelevated @click=${()=>this.__addDigit('6')}>6</mwc-button>
            </div>
            <div class="button-row">
                  <mwc-button unelevated @click=${()=>this.__addDigit('7')}>7</mwc-button>
                  <mwc-button unelevated @click=${()=>this.__addDigit('8')}>8</mwc-button>
                  <mwc-button unelevated @click=${()=>this.__addDigit('9')}>9</mwc-button>
            </div>
            <div class="button-row">
                  ${this.noAsterisk ?
      ""
      : html`<mwc-button unelevated @click=${()=>this.__addDigit('*')}>*</mwc-button>`
    }
                  <mwc-button unelevated @click=${()=>this.__addDigit('0')}>0</mwc-button>
                  ${this.noHash ?
      ""
      :html`<mwc-button unelevated @click=${()=>this.__addDigit('#')}>#</mwc-button>`
    }
            </div>
            <div class="button-row">
                ${this.actionStarted ?
      html`<mwc-button unelevated fullwidth @click=${this.__endAction}>${this.cancelText}</mwc-button>`
      :html`<mwc-button unelevated fullwidth @click=${this.__sendDigits}>${this.actionText}</mwc-button>`
    }
            </div>
        </div>
    `;
  }
}
