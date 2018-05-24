export default {
  bind (fnKey) {
    this[fnKey] = this[fnKey].bind(this)
  }
}