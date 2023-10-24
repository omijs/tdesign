/* eslint-disable */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getGitTimestamp } from '../../src/_common/docs/compile'
import { transformSync } from '@babel/core'

const DEFAULT_TABS = [
  { tab: 'demo', name: '示例' },
  { tab: 'api', name: 'API' },
  { tab: 'design', name: '指南' },
]

const DEFAULT_EN_TABS = [
  { tab: 'demo', name: 'DEMO' },
  { tab: 'api', name: 'API' },
  { tab: 'design', name: 'Guideline' },
]

export default async function mdToOmi(options) {
  const mdSegment = await customRender(options)

  const omiSource = `
    import { h, tag, WeElement } from 'omi'

    export default class ButtonMd extends WeElement {
      render() {
        return <div style={isShow('api')} name="API" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(
          mdSegment.apiMd,
        )} }}></div>
      }
    }
    `

  const result = transformSync(omiSource, {
    babelrc: false,
    configFile: false,
    sourceMaps: true,
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    plugins: [[require('@babel/plugin-transform-react-jsx'), { isTSX: true }]],
  })

  return { code: result.code, map: result.map }
}

// 解析 markdown 内容
async function customRender({ source, file, md }) {
  const { content, data } = matter(source)
  const lastUpdated = (await getGitTimestamp(file)) || Math.round(fs.statSync(file).mtimeMs)
  // console.log('data', data);
  const isEn = file.endsWith('en-US.md')

  // md top data
  const pageData = {
    spline: '',
    toc: true,
    title: '',
    description: '',
    isComponent: false,
    tdDocHeader: true,
    tdDocTabs: !isEn ? DEFAULT_TABS : DEFAULT_EN_TABS,
    apiFlag: /#+\s*API/,
    docClass: '',
    lastUpdated,
    designDocLastUpdated: lastUpdated,
    ...data,
  }

  // md filename
  const reg = file.match(/([\w-]+)\.?([\w-]+)?\.md/)
  const componentName = reg && reg[1]

  // split md
  let [demoMd = '', apiMd = ''] = content.split(pageData.apiFlag)

  const mdSegment = {
    ...pageData,
    componentName,
    apiMd: '<td-doc-empty></td-doc-empty>',
  }

  mdSegment.apiMd = md.render.call(md, `${pageData.toc ? '[toc]\n' : ''}${apiMd.replace(/<!--[\s\S]+?-->/g, '')}`).html

  return mdSegment
}
