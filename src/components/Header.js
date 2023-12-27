import React, { useEffect, useRef } from 'react'
import styles from './Header.module.css'
import { TextField } from '@mui/material';

const Header = () => {

   const searchText = useRef(null); 

   useEffect(() => {
    console.log(searchText.current.focus())
   },)

  return (
    <div className={styles.header}>
        <div className={styles.headerWrapper}>
        <TextField autoFocus color='primary' size='small' label='Search' fullWidth inputRef={searchText} type='text' placeholder='Arama Yapabilirsiniz..'/>
        </div>
    </div>
  )
}

export default Header
