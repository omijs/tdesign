import { h, tag, WeElement } from 'omi'

import '../index'

@tag('tooltip-mouse')
export default class TooltipMouse extends WeElement {
  render() {
    return (
      <t-tooltip content="文案比较长长长确实很长" placement="mouse">
        <a href="#">文案比较长...</a>
      </t-tooltip>
    )
  }
}
