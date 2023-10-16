import { HorizontalAlignEnum, SizeEnum, StatusEnum, TNode } from '../common'

export type InputProps = {
  autoWidth: boolean
  showClearIconOnEmpty: boolean
  clearable: boolean
  align: HorizontalAlignEnum
  size: SizeEnum
  status: StatusEnum
  tips: TNode
  onChangeValue: (value: any) => void
} & HTMLInputElement
