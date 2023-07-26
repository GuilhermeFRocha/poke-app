import { KeyboardEvent, ChangeEvent } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from '@/contexts/ThemeContext'
import styles from './toggleSwitch.module.scss'
import { ToggleSwitchProps } from './type'

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const {
    id,
    name,
    checked,
    onChange,
    optionLabels = ['Dark', 'Light'],
    small,
    disabled,
  } = props
  const { theme } = useTheme()

  const handleKeyPress = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.keyCode !== 32) return
    e.preventDefault()
    onChange(!checked)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  }

  return (
    <div
      className={`${styles['toggle-switch']}${
        small ? ` ${styles['small-switch']}` : ''
      }`}
    >
      <input
        type="checkbox"
        name={name}
        className={styles['toggle-switch-checkbox']}
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      {id ? (
        <label
          className={styles['toggle-switch-label']}
          tabIndex={disabled ? -1 : 1}
          onKeyDown={handleKeyPress}
          htmlFor={id}
        >
          <span
            className={
              disabled
                ? `${styles['toggle-switch-inner']} ${styles['toggle-switch-disabled']}`
                : styles['toggle-switch-inner']
            }
            data-dark={optionLabels[0]}
            data-light={optionLabels[1]}
            tabIndex={-1}
          />
          <span
            className={
              disabled
                ? `${styles['toggle-switch-switch']} ${styles['toggle-switch-disabled']}`
                : styles['toggle-switch-switch']
            }
            tabIndex={-1}
          >
            {theme === 'dark' ? (
              <MdDarkMode style={{ color: '#174b82' }} size={16} />
            ) : (
              <MdLightMode style={{ color: '#aa8000' }} size={16} />
            )}
          </span>
        </label>
      ) : null}
    </div>
  )
}

export default ToggleSwitch
