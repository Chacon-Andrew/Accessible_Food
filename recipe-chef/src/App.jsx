import './App.css'
import Title from './components/Title'

function App() {

  return (
    <div style={{width: '100vw', height: '100vh', position: 'absolute', left: 0, top: 0}}>
      <div style={{position: 'fixed', top: 0, right: 0, width: '50%', height: '100%', marginRight: '1em', overflowX: 'hidden'}}>
        <div className="gcse-searchbox" data-enableimagesearch={true} data-defaulttoimagesearch={true} data-disablewebsearch={true}></div>
        <div className="gcse-searchresults" data-enableimagesearch={true} data-defaulttoimagesearch={true} data-disablewebsearch={true}></div>
      </div>
      <div style={{display: 'flex', position: 'absolute', left: 0, marginTop: '2em', marginLeft: '1em'}}>
        <Title />
      </div>
    </div>
  )
}

export default App
