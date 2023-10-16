export default class Store {
  themeMode: string
  ui: object
  constructor(options) {
    this.themeMode = options.themeMode || 'light'
    // 挂载ui，用于手动精准更新
    this.ui = {}
  }
}
