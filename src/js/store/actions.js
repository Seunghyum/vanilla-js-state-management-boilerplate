export default {
  /**
   *
   * @param {Store(Class)} context
   * @param {*} payload
   */
  addItem(context, payload) {
    context.commit("addItem", payload);
  },
  clearItem(context, payload) {
    context.commit("clearItem", payload);
  },
};
