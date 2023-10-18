import { h, OmiProps, tag, WeElement, classNames } from 'omi'
import css from './style'
import { TdButtonProps } from './type'
import { TdClassNamePrefix, parseTNode } from '../utils'
import '../loading'
import { StyledProps } from '../common'

export interface ButtonProps extends TdButtonProps, StyledProps {}

@tag('t-button')
export default class Button extends WeElement<ButtonProps> {
  static css = css

  static defaultProps = {
    block: false,
    disabled: false,
    ghost: false,
    loading: false,
    shape: 'rectangle',
    size: 'medium',
    type: 'button',
    variant: 'base',
  }

  static propTypes = {
    block: Boolean,
    content: Object,
    disabled: Boolean,
    ghost: Boolean,
    href: String,
    icon: Object,
    loading: Boolean,
    shape: String,
    size: String,
    suffix: Object,
    tag: String,
    theme: String,
    type: String,
    variant: String,
    onClick: Function,
  }

  // useRipple(ref?.current || btnDom);

  renderTag = () => {
    const { tag, href, disabled } = this.props
    if (!tag && href && !disabled) return 'a'
    if (!tag && disabled) return 'div'
    return tag || 'button'
  }

  renderTheme = () => {
    const { theme, variant } = this.props
    if (!theme) {
      if (variant === 'base') return 'primary'
      return 'default'
    }
    return theme
  }


  handleClick = (e: MouseEvent) => {
    const { disabled, loading } = this.props
    e.stopPropagation()
    if (!disabled && !loading) {
      this.props.onClick?.(e)
    }
  }
  render(props: OmiProps<ButtonProps>) {
    const { renderTag, renderTheme } = this
    const {
      type,
      theme,
      variant,
      icon,
      disabled,
      loading,
      size,
      block,
      ghost,
      shape,
      children,
      content,
      class: className,
      suffix,
      href,
      tag,
      onClick,
      ...buttonProps
    } = props

    const tagName = renderTag()
    const tempChildren = children as any
    const renderChildren = content ?? tempChildren.length > 0 ? children : null
 
    return h(
      tagName,
      {
        ...buttonProps,
        href,
        type,
        // ref,
        disabled: disabled || loading,
        class: classNames(
          props.class,
          [
            TdClassNamePrefix('button'),
            TdClassNamePrefix(`button--theme-${renderTheme()}`),
            TdClassNamePrefix(`button--variant-${variant}`),
          ],
          {
            [TdClassNamePrefix(`button--shape-${shape}`)]: shape !== 'rectangle',
            [TdClassNamePrefix('button--ghost')]: ghost,
            [TdClassNamePrefix('is-loading')]: loading,
            [TdClassNamePrefix('is-disabled')]: disabled,
            [TdClassNamePrefix('size-s')]: size === 'small',
            [TdClassNamePrefix('size-l')]: size === 'large',
            [TdClassNamePrefix('size-full-width')]: block,
          },
        ),
        onClick: this.handleClick,
      },
      <>
        {loading ? <t-loading size='small' loading={loading} inheritColor={true}></t-loading> : icon}
        {renderChildren && (
          <span className="t-button__text" style={(loading || icon) && { marginLeft: '8px' }}>
            {renderChildren}
          </span>
        )}
        {props.suffix && <span class={TdClassNamePrefix('button__suffix')}>{parseTNode(suffix)}</span>}
      </>,
    )
  }
}
