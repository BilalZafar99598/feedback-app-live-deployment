import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {

  const {feedback, } = useContext(FeedbackContext)

  return (
    <>
        <div className="feedback-list">
        <AnimatePresence>
          {feedback.length > 0 ? feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}>
          <FeedbackItem key={item.id} item={item}/>
          </motion.div>
          )): 'No FeedBack Yet'}
        </AnimatePresence>
        </div>
    </>
  )

  
  // return (
  //   <>
  //       <div className="feedback-list">
  //           {feedback.length > 0 ? feedback.map((item) => (
  //           <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //           )): 'No FeedBack Yet'}
  //       </div>
  //   </>
  // )
}



export default FeedbackList
