import React from 'react'
import styles from  './Button.module.css'

// CSS-Modules and Styled Components comparison

// import styled from 'styled-components'

// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #53709a;
//   color: white;
//   background: #53709a;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover,
//   &:active {
//     background: #496286;
//     border-color: #496286;
//   }
// `


const Button = (props) => {
  return (
    // className={styles.button} calls style
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
