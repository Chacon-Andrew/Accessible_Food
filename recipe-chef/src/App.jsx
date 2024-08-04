import './App.css'
import Ingredients from './components/Ingredients'
import Title from './components/Title'
import Tools from './components/Tools'

function App() {

  return (
    <div style={{width: '100vw', height: '100vh', position: 'absolute', left: 0, top: 0, display: 'flex', flexDirection: 'row', gap: '1em'}}>
      <div style={{display: 'flex', position: 'relative', marginTop: '2em', marginLeft: '1em', flexDirection: 'column', gap: '1em', width: "45%"}}>
        <Title />
        <div className='recipeBanner'>Ingredients Needed</div>
        <Ingredients />
        <div className='recipeBanner'>Tools Needed</div>
        <Tools />
      </div>
      <div style={{position: 'relative', width: '50%', height: '100%', marginRight: '1em', overflowX: 'hidden'}}>
        <div className="gcse-searchbox" data-enableimagesearch={true} data-defaulttoimagesearch={true} data-disablewebsearch={true}></div>
        <div className="gcse-searchresults" data-enableimagesearch={true} data-defaulttoimagesearch={true} data-disablewebsearch={true}></div>
      </div>
    </div>
  )
}

export default App
