import { OmiProps, WeElement, h, tag } from 'omi'
import { buttonState } from './index'

@tag('t-button-base')
export default class BaseCheckBox extends WeElement {

  render(props) {
    return (
      <>
        <h2>基础选项</h2>
        <label>
          <input type="checkbox" onChange={(e) => {
            buttonState.value.block = e.target.checked
            buttonState.update()
          }} />block
        </label>
        <label>
          <input type="checkbox" onChange={(e) => {
            buttonState.value.loading = e.target.checked
            buttonState.update()
          }} />loading
        </label>
        <label>
          <input type="checkbox" onChange={(e) => {
            buttonState.value.disabled = e.target.checked
            buttonState.update()
          }} />disabled
        </label>
        <label>
          <input id="loading" type="checkbox" onChange={(e) => {
            buttonState.value.ghost = e.target.checked
            buttonState.update()
          }} />ghost
        </label>
      </>
    )
  }

}