import { useTheme } from '@/contexts/ThemeContext'
import Header from '@/components/Header'
import Tabs from '@/components/Tabs'
import '@/styles/app.module.scss'

const Home = () => {
  const { theme } = useTheme()

  return (
    <div
      className={theme === 'dark' ? 'app-container dark-mode' : 'app-container'}
    >
      <Header />
      <Tabs />
    </div>
  )
}

export default Home
