import React from 'react'
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  // const handleClick = (id) => {
  //   console.log(id);
  // }

  return (
    <>
      <Card>
          <div className="num-display">{item.rating}</div>
          <button className="close" onClick={() => deleteFeedback(item.id)}>
            <FaTimes color="purple"/>
          </button>
          <button onClick={() => editFeedback(item)} className="edit">
            <FaEdit color='purple'/>
          </button>
          <div className="text-display">{item.text}</div>
      </Card>
      
    </>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
