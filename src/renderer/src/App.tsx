import { ipcRenderer } from 'electron'
import './assets/App.css'

function App() {
  function handleClick() {
    ipcRenderer.invoke('removeFolders')
  }

  return (
    <div>
      <h1 className="title">Visual Studio Code Cleaner</h1>

      <div className="button-1-container">
        <button>Borrar carpetas</button>
      </div>
    </div>
  )
}

export default App
