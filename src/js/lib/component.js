import Store from "../store/store.js";

export default class Component {
  constructor(props = {}) {
    this.render = this.render || console.error("render function not exist");

    if (props.store instanceof Store) {
      props.store.events.subscribe("stateChange", () => this.render());
    }

    if (props.hasOwnProperty("element")) {
      this.element = props.element;
    }
  }
}
