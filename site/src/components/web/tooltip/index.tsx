import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/tooltip/_example/base'
import '../../../../../src/tooltip/_example/arrow'
import '../../../../../src/tooltip/_example/duration'
import '../../../../../src/tooltip/_example/mouse'
import '../../../../../src/tooltip/_example/no-arrow'
import '../../../../../src/tooltip/_example/trigger'
import '../../../../../src/tooltip/_example/theme'

import * as marked from 'marked'

const docsHTML = marked.parse(`
## API
### Tooltip Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
delay | Number | - | 【议案讨论中】延迟出现提示，用于异步加载提示信息需要延迟显示的业务场景下 | N
destroyOnClose | Boolean | true | 是否在关闭浮层时销毁浮层 | N
duration | Number | - | 用于设置提示默认显示多长时间之后消失，初始第一次有效，单位：毫秒 | N
placement | String | top | 浮层出现位置。TS 类型：\`'mouse' \\| PopupPlacement\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/tooltip/type.ts) | N
showArrow | Boolean | true | 是否显示浮层箭头 | N
theme | String | default | 文字提示风格。可选项：default/primary/success/danger/warning/light | N
\`Omit<PopupProps, 'placement'>\` | \- | - | 继承 \`Omit<PopupProps, 'placement'>\` 中的全部 API | N

### TooltipLite Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot / Function | - | 文字提示内容。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
placement | String | top | 提示浮层出现的位置。可选项：top/bottom | N
showArrow | Boolean | true | 是否显示箭头 | N
showShadow | Boolean | true | 文字提示浮层是否需要阴影 | N
theme | String | default | 组件风格，有亮色模式和暗色模式两种。可选项：light/default | N
triggerElement | String / Slot / Function | - | 触发元素。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
`)

interface Props {
  tab: string
}

define(
  'page-tooltip',
  class extends WeElement<Props> {
    static defaultProps = {
      tab: 'demo',
    }

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
            <h3 id="基础用法">
              基础用法 <a class="header-anchor" href="#基础用法"></a>
            </h3>
            <demo-wrapper>
              <tooltip-base></tooltip-base>
            </demo-wrapper>
            <h3 id="带箭头的文字提示">
              带箭头的文字提示 <a class="header-anchor" href="#带箭头的文字提示"></a>
            </h3>
            <p>带箭头的文字提示有较明确的指向性。常用于有多个需要提示的信息并列放置时，对某个具体信息进行提示。</p>
            <demo-wrapper>
              <tooltip-arrow></tooltip-arrow>
            </demo-wrapper>
            <h3 id="不带箭头的文字提示">
              不带箭头的文字提示 <a class="header-anchor" href="#不带箭头的文字提示"></a>
            </h3>
            <p>不带箭头的文字提示没有明确指向性。常用于不需要针对性提示的场景中。</p>
            <demo-wrapper>
              <tooltip-no-arrow></tooltip-no-arrow>
            </demo-wrapper>
            <h3 id="带主题色的文字提示">
              带主题色的文字提示 <a class="header-anchor" href="#带主题色的文字提示"></a>
            </h3>
            <p>提供浅灰色、蓝色、绿色、红色、黄色主题的文字提示。</p>
            <demo-wrapper>
              <tooltip-theme></tooltip-theme>
            </demo-wrapper>
            <h3 id="不同触发方式的文字提示">
              不同触发方式的文字提示 <a class="header-anchor" href="#不同触发方式的文字提示"></a>
            </h3>
            <p>支持常见元素事件触发文字提示。</p>
            <demo-wrapper>
              <tooltip-trigger></tooltip-trigger>
            </demo-wrapper>
            <h3 id="模拟超出省略原生属性">
              模拟超出省略原生属性 <a href="#模拟超出省略原生属性" class="header-anchor"></a>
            </h3>
            <demo-wrapper>
              <tooltip-mouse></tooltip-mouse>
            </demo-wrapper>
            <h3 id="轻量文字提示">
              轻量文字提示 <a href="#轻量文字提示" class="header-anchor"></a>
            </h3>
            <p>
              悬浮元素出现文字提示，不依赖 Popup，具体 API 请参考 <code>TooltipLite Props</code>
            </p>
            <h3>DEMO (🚧建设中)...</h3>
            <h3 id="定时消失">
              定时消失 <a href="#定时消失" class="header-anchor"></a>
            </h3>
            <demo-wrapper>
              <tooltip-duration></tooltip-duration>
            </demo-wrapper>
          </div>
          <div style={this.isShow('api')} name="API">
            <div
              style="margin-bottom:76px"
              dangerouslySetInnerHTML={{
                __html: docsHTML,
              }}
            ></div>
          </div>
          <div style={this.isShow('design')} name="DESIGN"></div>
        </>
      )
    }
  },
)
