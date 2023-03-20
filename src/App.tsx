import { FC, useState, useEffect } from "react"
import { Header, Home, contextDarkMod } from "./components"
import "./components/styles/App.css"

const App: FC = () => {
  const [IsdarkMode, setIsDarkMode] = useState<boolean>(false)

  const toggleIsDarkMode = (): void => {
    localStorage.setItem("isDarkMode", JSON.stringify(!IsdarkMode))
    setIsDarkMode(!IsdarkMode)
  }

  useEffect(() => {
    const isDark: boolean = localStorage.getItem("isDarkMode") === "true"
    setIsDarkMode(isDark)
  }, [IsdarkMode])

  return (
    <contextDarkMod.Provider value={{ IsdarkMode, toggleIsDarkMode }}>
      <div className="App">
        <Header />
        <main>{/* <Home /> */}</main>
      </div>
    </contextDarkMod.Provider>
  )
}

export default App
