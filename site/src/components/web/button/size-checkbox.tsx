import { OmiProps, WeElement, h, tag } from 'omi'
import { buttonState } from './index'

@tag('t-button-size')
export default class BaseCheckBox extends WeElement {

  render(props: any, store: any) {
    return (
      <>
        <h2>不同大小</h2>
        <label>
          <input name='size' type="radio" onChange={() => {
            buttonState.value.size = 'small'
            buttonState.update()
          }} /> 小按钮
        </label>

        <label>
          <input name='size' type="radio" onChange={() => {
            buttonState.value.size = 'medium'
            buttonState.update()
          }} /> 中按钮
        </label>

        <label>
          <input name='size' type="radio" onChange={() => {
            buttonState.value.size = 'large'
            buttonState.update()
          }} /> 大按钮
        </label>

      </>
    )
  }

}



