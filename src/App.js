import React from 'react'
// import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import FeedbackItem from './components/FeedbackItem'
import AboutIconLink from './components/AboutIconLink'
// import FeedbackItem from './components/FeedbackItem'
// import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import PropTypes from 'prop-types'
import FeedbackList from './components/FeedbackList'
// import Card from './shared/Card'
import About from './pages/About'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  // const [feedback, setFeedBack] = useState(FeedbackData);

  // Comment out because it moves away towards Global Context Now 
  // const deleteFeedback = (id) => {
  //   if(window.confirm('Are you Sure to Delete this FeedBack Record ?')){
  //     setFeedBack(feedback.filter((items) => items.id !== id));
  //   }
  // }

  // Add New Feedback Data
  // Comment out because it moves away towards Global Context Now 
  // const addFeedback = (newFeedback) =>{
  //   newFeedback.id = uuidv4()
  //   setFeedBack(
  //     [newFeedback,...feedback]
  //   )
  // }

  return (
    <FeedbackProvider>
      <Router>
      <Header bgColor='yellow' textColor='blue'/>
      <div className="container"> 
          <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm/>
              <FeedbackStats/>
              <FeedbackList/>
            </>
          }>
            
          </Route>
          <Route path='/about' element={<About/>}>This is About Page Link</Route>
          </Routes>
      </div>
      <AboutIconLink/>
      {/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
      </Card> */}
      </Router>
      </FeedbackProvider>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes ={
  text: PropTypes.string,
}

export default App
