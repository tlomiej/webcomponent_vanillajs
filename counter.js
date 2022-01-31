class MyCounter extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML = `
        <h1>test</h1>
        `
    }
}


customElements.define("my-counter", MyCounter)