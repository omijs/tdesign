import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils'
import css from './style/index'

@tag('t-icon-logo-ie-filled')
export default class LogoIeFilled extends WeElement<IconProps> {
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
          d="M10.1294 22.257L9.53972 22.4882C8.21673 23.0575 6.92641 23.3994 5.76814 23.4229C4.60207 23.4466 3.48176 23.1447 2.66602 22.3224C1.88877 21.544 1.57783 20.4906 1.57045 19.3857C1.56311 18.2859 1.85223 17.0641 2.35373 15.81C3.35817 13.2982 5.28935 10.47 7.88406 7.88077C10.4778 5.29254 13.3053 3.36188 15.8152 2.35623C17.0683 1.85413 18.289 1.56382 19.3881 1.57017C20.4933 1.57656 21.5471 1.88723 22.3258 2.66591C23.1453 3.48536 23.4484 4.60314 23.4247 5.77041C23.4011 6.9323 23.0564 8.22569 22.4832 9.5537L22.4793 9.56263L22.0151 10.6098C22.1038 11.1526 22.1481 11.7039 22.1481 12.2684V13.7343H19.7164L7.81452 13.8463C8.08838 14.7324 8.53402 15.4876 9.12764 16.0469C9.84416 16.722 10.7992 17.1343 12.0003 17.1343C13.1257 17.1343 14.1592 16.7725 14.9864 16.1594L15.1191 16.0611H21.459L21.0972 16.7847C21.0083 16.9625 20.917 17.1342 20.8128 17.3081C20.6018 17.6743 20.3764 18.0242 20.1149 18.3655C18.2638 20.8359 15.3069 22.4269 11.9895 22.4269C11.3542 22.4269 10.7325 22.3686 10.1294 22.257ZM12.9397 6.22496C11.7315 7.06959 10.4952 8.10059 9.29676 9.29649C9.05165 9.54108 8.81348 9.78731 8.58245 10.0346L17.0625 10.0346L16.872 9.39239C16.4311 7.90635 14.869 6.64296 12.9397 6.22496ZM3.70941 18.1545C3.61327 18.602 3.56798 19.0098 3.5704 19.3723C3.57543 20.1252 3.78185 20.6098 4.08191 20.9098L4.08525 20.9132C4.3962 21.2271 4.91175 21.4399 5.72756 21.4233C6.15075 21.4148 6.63069 21.3437 7.15871 21.2067C5.78864 20.4646 4.60834 19.4167 3.70941 18.1545ZM21.056 7.68108C21.2935 6.94447 21.4138 6.28782 21.4251 5.72977C21.4416 4.91705 21.2297 4.39824 20.9116 4.08013C20.6117 3.78027 20.1282 3.57448 19.3765 3.57014C18.8823 3.56728 18.3038 3.65336 17.655 3.83628C19.0913 4.80346 20.2674 6.1277 21.056 7.68108Z"
          fill="currentColor"
        />
        <path
          d="M6.82087 6.81664C4.70281 8.93019 3.00981 11.2109 1.89009 13.3704C1.85103 13.0084 1.83099 12.6407 1.83099 12.2684C1.83099 6.6586 6.37973 2.10986 11.9895 2.10986C12.2955 2.10986 12.5983 2.1234 12.8974 2.14992C10.883 3.26455 8.78169 4.85999 6.82087 6.81664Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
