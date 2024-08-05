import './App.css'
import Ingredients from './components/Ingredients'
import Steps from './components/Steps'
import Title from './components/Title'
import Tools from './components/Tools'
import Button from '@mui/material/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {

  const handleDownloadPDF = () => {
    const input = document.getElementById('pdf-content');
    const height = input.clientHeight
    console.log(input) 
    html2canvas(input, {useCORS: true}).then(function(canvas){
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', [height / 4, 228])
      pdf.addImage(imgData, 'PNG', 0, 0)
      pdf.save('downloaded-recipe.pdf')
    })
  }

  return (
    <div style={{width: '100vw', height: '100vh', position: 'absolute', left: 0, top: 0, display: 'flex', flexDirection: 'row', gap: '1em'}}>
      <div style={{display: 'flex', position: 'relative', marginTop: '2em', marginLeft: '1em', flexDirection: 'column', gap: '1em', width: "45%"}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}} id='pdf-content'>
          <Title />
          <div className='recipeBanner'>Ingredients Needed</div>
          <Ingredients />
          <div className='recipeBanner'>Tools Needed</div>
          <Tools />
          <div className='recipeBanner'>Steps</div>
          <Steps />
        </div>
        <Button variant='contained' onClick={handleDownloadPDF}>Download PDF</Button>
      </div>
      <div style={{position: 'relative', width: '50%', marginRight: '1em', overflowX: 'hidden'}}>
        <div className="gcse-searchbox" data-enableimagesearch={true} data-defaulttoimagesearch={true} data-disablewebsearch={true}></div>
        <div className="gcse-searchresults" data-enableimagesearch={true} data-defaulttoimagesearch={true} data-disablewebsearch={true}></div>
      </div>
    </div>
  )
}

export default App
