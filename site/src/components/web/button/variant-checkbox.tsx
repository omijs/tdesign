import { OmiProps, WeElement, h, tag } from 'omi'
import { buttonState } from './index'

@tag('t-button-variant')
export default class BaseCheckBox extends WeElement {

  render(props: any, store: any) {
    return (
      <>
        <h2>按钮风格</h2>
        <label>
          <input name='variant' type="radio" onChange={() => {
            buttonState.value.variant = 'base'
            buttonState.update()
          }} /> 基本按钮
        </label>

        <label>
          <input name='variant' type="radio" onChange={(e) => {
            buttonState.value.variant = 'outline'
            buttonState.update()
          }} /> 填充按钮

        </label>

        <label>
          <input name='variant' type="radio" onChange={(e) => {
            buttonState.value.variant = 'dashed'
            buttonState.update()
          }} /> 虚线按钮

        </label>

        <label>
          <input name='variant' type="radio" onChange={(e) => {
            buttonState.value.variant = 'text'
            buttonState.update()
          }} /> 文本按钮

        </label>
      </>
    )
  }

}



