import { WeElement, define, h, createRef } from 'omi'
import '../common/index'

import 'tdesign-icons-omi/star-filled'
import 'tdesign-icons-omi/activity'
import 'tdesign-icons-omi/add-and-subtract'
import 'tdesign-icons-omi/add-circle'
import 'tdesign-icons-omi/add-rectangle'
import 'tdesign-icons-omi/add'
import 'tdesign-icons-omi/address-book'
import '../../../../../src/space/index'
import * as marked from 'marked'
import '../../../../code-box/index.tsx'
import 'tdesign-icons-omi/_example/icons'
import 'tdesign-icons-omi/bookmark'

import { tw } from 'omi-twind'
const docsHTML = marked.parse(`

## API
### Icon Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
style | Object | - | 样 | N
size | String | undefined | 图标尺寸，支持 'small', 'medium', 'large'，'35px', '3em' 等 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击时触发 | N

`)
interface Props {
  tab: string
}

define(
  'page-icon',
  class extends WeElement<Props> {
    static defaultProps = {
      tab: 'demo',
    }

    static css = `t-link { margin: 5px }`

    tab = ['demo', 'api', 'design']
    tdDocHeader = createRef()
    tdDocTabs = createRef()

    static propTypes = {
      tab: String,
    }

    updateTab = (t: string) => {
      this.updateProps({
        tab: t,
      })
    }

    isShow(tabStr: string) {
      return this.props.tab === tabStr ? { display: 'block' } : { display: 'none' }
    }

    installed() {
      const tdDocTabsEl = this.tdDocTabs.current as HTMLElement
      tdDocTabsEl.onchange = ({ detail: currentTab }: CustomEvent) => {
        this.updateTab(currentTab)
      }
    }

    render() {
      return (
        <>
          <td-doc-tabs ref={this.tdDocTabs} tab={this.props.tab} style="display:block"></td-doc-tabs>
          <div style={this.isShow('demo')} name="DEMO">
            <h3 id="Icon图标">
              Icon图标 <a class="header-anchor" href="#Icon图标"></a>
            </h3>
            <h4 id="按需引入图标（推荐）">
              按需引入图标 <a class="header-anchor" href="#按需引入图标"></a>
            </h4>
            <code-box
              title="按需引入图标"
              describe={`可以通过
              import 'tdesign-icons-omi/bookmark'
              的方式按需引入图标`}
              code={`
\`\`\`html
import 'tdesign-icons-omi/bookmark'
import 'tdesign-icons-omi/star-filled'
import 'tdesign-icons-omi/activity'
import 'tdesign-icons-omi/add-and-subtract'
import 'tdesign-icons-omi/add-circle'
import 'tdesign-icons-omi/add-rectangle'
import 'tdesign-icons-omi/add'
import 'tdesign-icons-omi/address-book'

<div>
    <t-space>
        <t-icon-activity />
        <t-icon-add-and-subtract />
        <t-icon-add-circle />
        <t-icon-add-rectangle />
        <t-icon-add />
        <t-icon-bookmark />
        <t-icon-bookmark/>
    </t-space>
</div>
\`\`\`
          `}
            >
              <div slot="demo" class={tw`px-5 py-5`}>
                <t-space>
                  <t-icon-activity />
                  <t-icon-add-and-subtract />
                  <t-icon-add-circle />
                  <t-icon-add-rectangle />
                  <t-icon-add />
                  <t-icon-bookmark />
                </t-space>
              </div>
            </code-box>
            <h4 id="样式自定义">
              样式自定义 <a class="header-anchor" href="#样式自定义"></a>
            </h4>
            <code-box
              title="样式自定义"
              describe={`图标尺寸单位支持多种， 'small', 'medium', 'large', '35px', '3em' 等。 图标颜色使用 CSS 控制，如：
              style={{color: "red"}} 或者 style={{fill: "red"}}`}
              code={`
\`\`\`html
import { t-icon-star-filled } from 'tdesign-icons-omi/index'
<div>
    <t-space direction="vertical">
        <h4>Size: small | medium | large | 1.5em | 2em | 40px</h4>
        <t-space align="center">
            <t-icon-star-filled size="small"></t-icon-star-filled>
            <t-icon-star-filled size="medium"></t-icon-star-filled>
            <t-icon-star-filled size="large"></t-icon-star-filled>
            <t-icon-star-filled size="1.5em"></t-icon-star-filled>
            <t-icon-star-filled size="2em"></t-icon-star-filled>
            <t-icon-star-filled size="40px"></t-icon-star-filled>
        </t-space>
        <h4>Color</h4>
        <t-space align="center">
            <t-icon-star-filled></t-icon-star-filled>
            <t-icon-star-filled style={{ color: '#0d5bdb' }}></t-icon-star-filled>
            <t-icon-star-filled style={{ color: '#d54941' }}></t-icon-star-filled>
            <t-icon-star-filled style={{ color: '#e47922' }}></t-icon-star-filled>
            <t-icon-star-filled style={{ color: '#2ba471' }}></t-icon-star-filled>
        </t-space>
    </t-space>
</div>
\`\`\`
          `}
            >
              <div slot="demo" class={tw`px-5 py-5`}>
                <t-space direction="vertical">
                  <h4>Size: small | medium | large | 1.5em | 2em | 40px</h4>
                  <t-space align="center">
                    <t-icon-star-filled size="small"></t-icon-star-filled>
                    <t-icon-star-filled size="medium"></t-icon-star-filled>
                    <t-icon-star-filled size="large"></t-icon-star-filled>
                    <t-icon-star-filled size="1.5em"></t-icon-star-filled>
                    <t-icon-star-filled size="2em"></t-icon-star-filled>
                    <t-icon-star-filled size="40px"></t-icon-star-filled>
                  </t-space>
                  <h4>Color</h4>
                  <t-space align="center">
                    <t-icon-star-filled></t-icon-star-filled>
                    <t-icon-star-filled style={{ color: '#0d5bdb' }}></t-icon-star-filled>
                    <t-icon-star-filled style={{ color: '#d54941' }}></t-icon-star-filled>
                    <t-icon-star-filled style={{ color: '#e47922' }}></t-icon-star-filled>
                    <t-icon-star-filled style={{ color: '#2ba471' }}></t-icon-star-filled>
                  </t-space>
                </t-space>
              </div>
            </code-box>
            <h4 id="全局引入图标">
              全局引入图标 <a class="header-anchor" href="#全局引入图标"></a>
            </h4>
            <p>可以通过 import 'tdesign-icons-omi' 的方式全局引入图标，直接调用需要的Icon组件</p>
            <h3 id="图标总览">
              图标总览 <a class="header-anchor" href="#图标总览"></a>
            </h3>
            <demo-wrapper>
              <icon-icons></icon-icons>
            </demo-wrapper>
          </div>
          <div style={this.isShow('api')} name="API">
            <div
              style="margin-bottom:76px"
              unsafeHTML={{
                html: docsHTML,
              }}
            ></div>
          </div>
          <div style={this.isShow('design')} name="DESIGN"></div>
        </>
      )
    }
  },
)
