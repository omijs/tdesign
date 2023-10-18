import { OmiProps, WeElement, h, tag } from 'omi'
import { buttonState } from './index'

@tag('t-button-color')
export default class BaseCheckBox extends WeElement {

  onChange(theme) {
    buttonState.value.theme = theme
    buttonState.update()
  }

  render(props: any, store: any) {
    return (
      <>
        <h2>按钮颜色</h2>
        <label>
          <input name='theme' type="radio" onChange={e => this.onChange('default')} /> default
        </label>
        <label>
          <input name='theme' type="radio" onChange={e => this.onChange('primary')} /> primary
        </label>
        <label>
          <input name='theme' type="radio" onChange={e => this.onChange('danger')} /> danger
        </label>
        <label>
          <input name='theme' type="radio" onChange={e => this.onChange('warning')} /> warning
        </label>
        <label>
          <input name='theme' type="radio" onChange={e => this.onChange('success')} /> success
        </label>
      </>
    )
  }

}