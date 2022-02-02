class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get count() {
    return this.getAttribute("count");
  }

  set count(val) {
    this.setAttribute("count", val);
  }
  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop == "count") {
      this.render();
      let btn = this.shadow.querySelector("#btn");
      btn.addEventListener("click", this.increment.bind(this));
    }
  }

  increment() {
    this.count++;
    console.log("111");
  }

  connectedCallback() {
    this.render();
    let btn = this.shadow.querySelector("#btn");
    btn.addEventListener("click", this.increment.bind(this));
  }

  render() {
    this.shadow.innerHTML = `
        <h1>test</h1>
        ${this.count}
        <button id="btn">Add + 1</button>
        `;
  }
}

customElements.define("my-counter", MyCounter);
