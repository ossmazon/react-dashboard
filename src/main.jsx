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
import { ToastContainer } from "react-toastify"
ModuleRegistry.registerModules([AllCommunityModule])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLost
            draggable
            pauseOnHover
            theme="colored"
          />
          <App />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
