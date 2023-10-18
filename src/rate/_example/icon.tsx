import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space/index'
import 'tdesign-icons-omi/star'
import 'tdesign-icons-omi/logo-github'
import 'tdesign-icons-omi/heart-filled'

@tag('rate-icon')
export default class RateIcon extends WeElement {
  render() {
    return (
      <t-space direction="vertical">
        <t-rate default-value={1} icon={<t-icon-star />}></t-rate>
        <t-rate default-value={2} icon={<t-icon-logo-github />}></t-rate>
        <t-rate default-value={2.5} allowHalf icon={<t-icon-heart-filled />} color={'var(--td-error-color-7'}></t-rate>
      </t-space>
    )
  }
}
