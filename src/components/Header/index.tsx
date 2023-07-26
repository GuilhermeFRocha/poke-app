import { useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import ToggleSwitch from '../ToggleSwitch'
import LogoDark from '@/../public/assets/logo.svg'
import LogoLight from '@/../public/assets/logoLight.svg'
import styles from './header.module.scss'

const Header = () => {
  const [checked, setChecked] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked)
    toggleTheme()
  }

  const logoTheme = theme === 'light' ? LogoLight : LogoDark

  return (
    <div className={styles.headerContainer}>
      <Image src={logoTheme} alt="logo escrito pokemon" />
      <ToggleSwitch
        id="darkOfLight"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  )
}

export default Header
