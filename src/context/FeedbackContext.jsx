import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedBack] = useState([
        {
            id: 1,
            text: 'This is context item 1',
            rating: 7
        },
        {
            id: 2,
            text: 'This is context item 2',
            rating: 5
        },
        {
            id: 3,
            text: 'This is context item 3',
            rating: 6
        },])

    const [feedbackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false
    })

    // Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you Sure to Delete this FeedBack Record ?')){
          setFeedBack(feedback.filter((items) => items.id !== id));
        }
      }

    // Add Feedback
    const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedBack(
        [newFeedback,...feedback]
    )
    }
    
    // set the item to be updated
    const editFeedback = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        })
    }

    // Update Feedback Item
    const updateFeedback = (id, updItem) => {
        setFeedBack(
            feedback.map((item) => (item.id === id) ? 
            { ...item, ...updItem}: item)
        )
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;