import { OmiProps, WeElement, h, tag } from 'omi'
import { buttonState } from './index'

@tag('t-button-shape')
export default class BaseCheckBox extends WeElement {

  render(props: any, store: any) {
    return (
      <>
        <h2>不同形状按钮</h2>
        <label>
          <input name='shape' type="radio" onChange={() => {
            buttonState.value.shape = 'rectangle'
            buttonState.update()
          }} /> 正常
        </label>

        <label>
          <input name='shape' type="radio" onChange={() => {
            buttonState.value.shape = 'square'
            buttonState.update()
          }} /> 方形
        </label>

        <label>
          <input name='shape' type="radio" onChange={() => {
            buttonState.value.shape = 'round'
            buttonState.update()
          }} /> 椭圆
        </label>

        <label>
          <input name='shape' type="radio" onChange={() => {
            buttonState.value.shape = 'circle'
            buttonState.update()
          }} /> 圆形
        </label>

      </>
    )
  }

}