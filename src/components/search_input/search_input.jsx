import React, { memo } from 'react';
import { useRef } from 'react';
import styles from './search_input.module.css'

const SearchInput = memo(({onSearch}) => {
    const inputRef = useRef()
  
    const handleSearch = () => {
      const keyword = inputRef.current.value
      onSearch(keyword)
    }
    
    const onSubmit = () => {
      handleSearch() 
    }
  
    const onKeyPress = event => {
      if (event.key === 'Enter') {
        handleSearch()
      }
    }
  
    return (
      <header className={styles.header}>
        <span className={styles.title}>Youtube</span>
        <input className={styles.input} ref={inputRef} onKeyPress={onKeyPress}/>
        <button type='submit' className={styles.button} onClick={onSubmit}>
          <i className="fas fa-search"></i>
        </button>
      </header>
    )
  }
)

export default SearchInput;