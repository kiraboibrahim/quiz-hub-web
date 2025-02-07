import { CssBaseline, CssVarsProvider } from '@mui/joy'
import Router from './routes/router'

function App() {
  return (
  <CssBaseline>
    <CssVarsProvider>
      <Router />
    </CssVarsProvider>
  </CssBaseline>
  );
}

export default App
