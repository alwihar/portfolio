import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import styles from './style'
import { Nav, Home, Portfolio, Footer, Art } from './components'

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Nav/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route exact path='/portfolio'  element={<Portfolio/>}/>
            <Route exact path='/art'  element={<Art/>}/>
          </Routes>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
  </Router>
)

export default App;