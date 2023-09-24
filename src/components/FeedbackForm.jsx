import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() =>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null)
            // console.log('IF',text.length)
        }
        else if(text !== '' && text.trim().length <= 10){
            if(text.length <=1){
                setMessage(null)
            }
            else{
            setMessage('Text must be at least 10 characters')            
            setBtnDisabled(true)
            }
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
            // console.log('ELSE',text.length)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,rating
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            setText('');
        }
    }

  return (
    <>
      <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input type="text" onChange={handleTextChange} placeholder='Write a review'
                        value={text}
                    />
                    <Button type="submit" version="secondary" isDisabled={btnDisabled} >Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
      </Card>
    </>
  )
}

export default FeedbackForm
