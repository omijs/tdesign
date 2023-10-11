import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-wechat-stroke')
export default class LogoWechatStroke extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 4.25C4.85689 4.25 2 6.88401 2 9.79408C2 11.3943 2.83472 12.8796 4.25197 13.9231C4.54488 14.1387 4.69759 14.4964 4.65074 14.8571L4.58136 15.3913L5.41173 14.9745C5.65098 14.8543 5.9284 14.8352 6.1819 14.9212C6.97088 15.1891 7.8375 15.3382 8.75 15.3382C9.00377 15.3382 9.254 15.3266 9.5 15.3042C9.50387 12.0935 12.1736 9.6258 15.4462 9.10286C15.0367 6.47982 12.332 4.25 8.75 4.25ZM17.4568 9.03026C21.0029 9.33461 24 11.9035 24 15.3112C24 16.9476 23.2887 18.413 22.1671 19.5096V21.4591C22.1671 21.8163 21.9765 22.1465 21.6671 22.3251C21.3577 22.5037 20.9765 22.5037 20.6671 22.3251L18.9424 21.3293C18.2488 21.5201 17.5119 21.6224 16.75 21.6224C13.6277 21.6224 10.8262 19.8749 9.85702 17.2784C9.49411 17.3179 9.12461 17.3382 8.75 17.3382C7.77222 17.3382 6.82917 17.2 5.94709 16.9436L3.79583 18.0236C3.4652 18.1896 3.06995 18.1595 2.76828 17.9454C2.46661 17.7312 2.30783 17.368 2.35547 17.0011L2.59463 15.1598C1.0185 13.8152 0 11.9258 0 9.79408C0 5.47576 4.0827 2.25 8.75 2.25C13.1377 2.25 17.0088 5.10087 17.4568 9.03026ZM5.24609 7.49609C5.24609 6.94381 5.69381 6.49609 6.24609 6.49609H6.25C6.80228 6.49609 7.25 6.94381 7.25 7.49609V7.5C7.25 8.05228 6.80228 8.5 6.25 8.5H6.24609C5.69381 8.5 5.24609 8.05228 5.24609 7.5V7.49609ZM10.25 7.50732C10.25 6.95504 10.6977 6.50732 11.25 6.50732H11.2539C11.8062 6.50732 12.2539 6.95504 12.2539 7.50732V7.51123C12.2539 8.06352 11.8062 8.51123 11.2539 8.51123H11.25C10.6977 8.51123 10.25 8.06352 10.25 7.51123V7.50732ZM16.75 11C16.6763 11 16.6029 11.0013 16.53 11.0037C13.5817 11.1038 11.5 13.1303 11.5 15.3112C11.5 15.5359 11.521 15.7559 11.5612 15.9704C11.9293 17.9298 14.0076 19.6224 16.75 19.6224C17.4593 19.6224 18.1322 19.5066 18.7446 19.2989C19.0172 19.2064 19.3165 19.2359 19.5658 19.3798L20.1671 19.727V19.0687C20.1671 18.7751 20.2962 18.4964 20.52 18.3064C21.4616 17.507 22 16.4444 22 15.3112C22 13.0766 19.8083 11 16.75 11ZM13.5561 13.656C13.5561 13.1037 14.0038 12.656 14.5561 12.656H14.56C15.1123 12.656 15.56 13.1037 15.56 13.656V13.6599C15.56 14.2122 15.1123 14.6599 14.56 14.6599H14.5561C14.0038 14.6599 13.5561 14.2122 13.5561 13.6599V13.656ZM17.9361 13.6599C17.9361 13.1076 18.3838 12.6599 18.9361 12.6599H18.94C19.4923 12.6599 19.94 13.1076 19.94 13.6599V13.6638C19.94 14.2161 19.4923 14.6638 18.94 14.6638H18.9361C18.3838 14.6638 17.9361 14.2161 17.9361 13.6638V13.6599Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
