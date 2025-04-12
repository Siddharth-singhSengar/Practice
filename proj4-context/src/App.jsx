import './App.css'
import {  ThemeProvider } from "./Themecontext";
import ThemeSwitcher from "./Themeswitcher";
function App() {

  return (
    <>
      <ThemeProvider>
      <div>
        <h2>React Context API Demo</h2>
        <ThemeSwitcher />  {/* ThemeSwitcher can consume the context */}
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
