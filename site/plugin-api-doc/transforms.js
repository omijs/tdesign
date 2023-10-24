import path from 'path'
import fs from 'fs'

import mdToOmi from './md-to-omi'

let demoImports = {}
let demoCodesImports = {}

export default {
  before({ source, file }) {
    const resourceDir = path.dirname(file)
    const reg = file.match(/([\w-]+)\.?([\w-]+)?\.md/)
    const fileName = reg && reg[0]
    const componentName = reg && reg[1]
    const localeName = reg && reg[2]

    // 统一换成 common 公共文档内容
    if (fileName && source.includes(':: BASE_DOC ::')) {
      const localeDocPath = path.resolve(__dirname, `../../src/_common/docs/web/api/${fileName}`)
      const defaultDocPath = path.resolve(
        __dirname,
        `../../src/_common/docs/web/api/${localeName ? `${componentName}.${localeName}` : componentName}.md`,
      )
      let baseDoc = ''

      if (fs.existsSync(localeDocPath)) {
        // 优先载入语言版本
        baseDoc = fs.readFileSync(localeDocPath, 'utf-8')
      } else if (fs.existsSync(defaultDocPath)) {
        // 回退中文默认版本
        baseDoc = fs.readFileSync(defaultDocPath, 'utf-8')
      } else {
        console.error(`未找到 ${defaultDocPath} 文件`)
      }
      source = source.replace(':: BASE_DOC ::', baseDoc)
    }

    return source
  },
  render({ source, file, md }) {
    // console.log('source: ', source, ' file: ', file, ' md: ', md)
    const demoDefsStr = Object.keys(demoImports)
      .map((key) => demoImports[key])
      .join(';\n')
    const demoCodesDefsStr = Object.keys(demoCodesImports)
      .map((key) => demoCodesImports[key])
      .join(';\n')

    const demoInstallStr = Object.keys(demoImports).join(',')
    const demoCodeInstallStr = Object.keys(demoCodesImports).join(',')

    const sfc = mdToOmi({
      md,
      file,
      source,
      demoDefsStr,
      demoCodesDefsStr,
      demoInstallStr,
      demoCodeInstallStr,
    })

    return sfc
  },
}
