import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* globally sccessible */}
   <Provider store={store}> 
    <App />
    </Provider>
  </StrictMode>,
)
