export interface ToggleSwitchProps {
  id?: string
  name?: string
  checked: boolean
  onChange: (checked: boolean) => void
  optionLabels?: [string, string]
  small?: boolean
  disabled?: boolean
}
