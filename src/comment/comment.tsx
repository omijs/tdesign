import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { TdCommentProps } from './type'
import css from './style/index'
import '../button'
import { StyledProps } from '../common'
export interface CommentProps extends TdCommentProps, StyledProps {}

@tag('t-comment')
export default class Comment extends WeElement<CommentProps> {
  static css = css as string
  static defaultProps = {}
  static propTypes = {
    actions: Object,
    author: Object,
    avatar: Object,
    content: Object,
    datetime: Object,
    reply: Object,
    quote: Object,
  }
  render(props: OmiProps<CommentProps>) {
    const classPrefix = 't'
    const { class: className } = props

    const avatarElement = props.avatar ? (
      <div class={`${classPrefix}-comment__avatar`}>
        {typeof props.avatar === 'string' ? (
          <img src={props.avatar} alt="" class={`${classPrefix}-comment__avatar-image`} />
        ) : (
          props.avatar
        )}
      </div>
    ) : null

    const authorDatetimeContent = (props.author || props.datetime) && (
      <div class={`${classPrefix}-comment__author`}>
        {props.author && <span class={`${classPrefix}-comment__name`}>{props.author}</span>}
        {props.datetime && <span class={`${classPrefix}-comment__time`}>{props.datetime}</span>}
      </div>
    )

    const quoteElement = props.quote ? <div class={`${classPrefix}-comment__quote`}>{props.quote}</div> : null

    const actionsElement =
      props.actions && props.actions.length ? (
        <div class={`${classPrefix}-comment__actions`}>
          {props.actions.map((action, index) => (
            <t-button key={`action-${index}`} size="small" variant="text">
              {action}
            </t-button>
          ))}
        </div>
      ) : null

    const contentElement = (
      <div class={`${classPrefix}-comment__content`}>
        {authorDatetimeContent}
        <div class={`${classPrefix}-comment__detail`}>{props.content}</div>
        {quoteElement}
        {actionsElement}
      </div>
    )

    const replyElement = props.reply ? (
      <div class={classNames(`${classPrefix}-comment__reply`)}>{props.reply}</div>
    ) : null

    return (
      <div ref={props.ref} style={props.style} className={classNames(`${classPrefix}-comment`, className)}>
        <div class={`${classPrefix}-comment__inner`}>
          {avatarElement}
          {contentElement}
        </div>
        {replyElement}
      </div>
    )
  }
}
