import React, { useState } from 'react'
import styles from './square.models.css'

const Square= (props) =>{
   //  const [status, setStatus] = useState(false)
    return <button  className={styles.square} onClick={ props.handlePlay}>{props.value}</button>
}
export default Square