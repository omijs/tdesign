import { h, tag, WeElement } from 'omi'
// import tdesign style
import css from '@common/style/web/docs.less'

// import site web components
import 'tdesign-site-components'
import css1 from 'tdesign-site-components/lib/styles/style.css'
import css2 from 'tdesign-site-components/lib/styles/prism-theme.less'
import css3 from 'tdesign-site-components/lib/styles/prism-theme-dark.less'
@tag('button-md')
export default class ButtonMd extends WeElement {
  static css = css + css1 + css2 + css3
  render(props: any) {
    return (
      <div>
        <div
          name="API"
          style="display: block;"
          unsafeHTML={{
            html: `
        <nav class="tdesign-toc_container">
          <ol class="tdesign-toc_list">
            <li class="tdesign-toc_list_item">
              <a class="tdesign-toc_list_item_a" href="#button-props">
                Button Props
              </a>
            </li>
          </ol>
        </nav>
        <h3 id="button-props">
          Button Props <a class="header-anchor" href="#button-props"></a>
        </h3>
        <table>
          <thead>
            <tr>
              <th>名称</th> <th>类型</th> <th>默认值</th> <th>说明</th> <th>必传</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>class</td> <td>String</td> <td>-</td> <td>类名</td> <td>N</td>
            </tr>
            <tr>
              <td>style</td> <td>Object</td> <td>-</td>
              <td>
                样式
              </td>
              <td>N</td>
            </tr>
            <tr>
              <td>block</td> <td>Boolean</td> <td>false</td> <td>是否为块级元素</td> <td>N</td>
            </tr>
            <tr>
              <td>children</td> <td>TNode</td> <td>-</td>
              <td>
                按钮内容，同 content。TS 类型：<code>string | TNode</code>。
                <a
                  href="https://github.com/omijs/tdesign/blob/main/src/common.ts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  通用类型定义
                </a>
              </td>
              <td>N</td>
            </tr>
            <tr>
              <td>content</td> <td>TNode</td> <td>-</td>
              <td>
                按钮内容。TS 类型：<code>string | TNode</code>。
                <a
                  href="https://github.com/omijs/tdesign/blob/main/src/common.ts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  通用类型定义
                </a>
              </td>
              <td>N</td>
            </tr>
            <tr>
              <td>disabled</td> <td>Boolean</td> <td>false</td> <td>禁用状态</td> <td>N</td>
            </tr>
            <tr>
              <td>ghost</td> <td>Boolean</td> <td>false</td> <td>是否为幽灵按钮（镂空按钮）</td> <td>N</td>
            </tr>
            <tr>
              <td>href</td> <td>String</td> <td>-</td>
              <td>
                跳转地址。href 存在时，按钮标签默认使用 <code>&lt;a&gt;</code> 渲染；如果指定了 <code>tag</code>
                则使用指定的标签渲染
              </td>
              <td>N</td>
            </tr>
            <tr>
              <td>icon</td> <td>TElement</td> <td>-</td>
              <td>
                按钮内部图标，可完全自定义。TS 类型：<code>TNode</code>。
                <a
                  href="https://github.com/omijs/tdesign/blob/main/src/common.ts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  通用类型定义
                </a>
              </td>
              <td>N</td>
            </tr>
            <tr>
              <td>loading</td> <td>Boolean</td> <td>false</td> <td>是否显示为加载状态</td> <td>N</td>
            </tr>
            <tr>
              <td>shape</td> <td>String</td> <td>rectangle</td>
              <td>按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle</td>
              <td>N</td>
            </tr>
            <tr>
              <td>size</td> <td>String</td> <td>medium</td>
              <td>
                组件尺寸。可选项：small/medium/large。TS 类型：<code>SizeEnum</code>。
                <a
                  href="https://github.com/omijs/tdesign/blob/main/src/common.ts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  通用类型定义
                </a>
              </td>
              <td>N</td>
            </tr>
            <tr>
              <td>suffix</td> <td>TElement</td> <td>-</td>
              <td>
                右侧内容，可用于定义右侧图标。TS 类型：<code>TNode</code>。
                <a
                  href="https://github.com/omijs/tdesign/blob/main/src/common.ts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  通用类型定义
                </a>
              </td>
              <td>N</td>
            </tr>
            <tr>
              <td>tag</td> <td>String</td> <td>-</td>
              <td>
                渲染按钮的 HTML 标签，默认使用标签 <code>&lt;button&gt;</code> 渲染，可以自定义为 <code>&lt;a&gt;</code>
                <code>&lt;div&gt;</code> 等。透传全部 HTML 属性，如：<code>href/target/data-*</code> 等。⚠️ 禁用按钮
                <code>&lt;button disabled&gt;</code>无法显示 Popup 浮层信息，可通过修改 <code>tag=div</code>
                解决这个问题。可选项：button/a/div
              </td>
              <td>N</td>
            </tr>
            <tr>
              <td>theme</td> <td>String</td> <td>-</td>
              <td>
                组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success
              </td>
              <td>N</td>
            </tr>
            <tr>
              <td>type</td> <td>String</td> <td>button</td> <td>按钮类型。可选项：submit/reset/button</td> <td>N</td>
            </tr>
            <tr>
              <td>variant</td> <td>String</td> <td>base</td>
              <td>按钮形式，基础、线框、虚线、文字。可选项：base/outline/dashed/text</td> <td>N</td>
            </tr>
            <tr>
              <td>onClick</td> <td>Function</td> <td></td>
              <td>
                TS 类型：<code>(e: MouseEvent) =&gt; void</code>
                <br />
                点击时触发
              </td>
              <td>N</td>
            </tr>
          </tbody>
        </table>`,
          }}
        ></div>
      </div>
    )
  }
}
