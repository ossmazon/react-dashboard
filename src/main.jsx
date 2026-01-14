import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import store from "./store/store.js"
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community"
import { ThemeProvider } from "./context/ThemeContext.jsx"
ModuleRegistry.registerModules([AllCommunityModule])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
