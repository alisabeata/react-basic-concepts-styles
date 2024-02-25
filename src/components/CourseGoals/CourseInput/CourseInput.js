import React, { useState } from 'react'
import Button from '../../Utils/Button/Button'
import styles from './CourseInput.module.css'

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)
    setIsValid(true)
  }

  const formSubmitHandler = (event) => {
    const val = enteredValue.trim()

    event.preventDefault()

    setIsValid(true)

    if (val.length === 0) {
      setIsValid(false)
      return
    }

    props.onAddGoal(enteredValue)
    setEnteredValue('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-container']} ${
          !isValid ? styles.invalid : ''
        }`}
      >
        <label>TODO LIST</label>
        <input
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  )
}

export default CourseInput
