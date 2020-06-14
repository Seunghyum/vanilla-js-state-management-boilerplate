export default class PubSub {
  constructor() {
    this.events = {};
  }

  /**
   *
   * @param {String} event
   * @param {Function} callback
   */
  subscribe(event, callback) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }

    return this.events.push(callback);
  }

  /**
   *
   * @param {String} event
   * @param {Object} data
   */
  publish(event, data = {}) {
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }

    return this.events[event].map((callback) => callback(data));
  }
}
