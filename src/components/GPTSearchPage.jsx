import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constatnts'

const GPTSearchPage = () => {
  return (
    <>
      <div className='fixed -z-10'>
          <img className='h-screen object-cover' src={BG_URL} width="auto" />
      </div>
      <div className=''>
      
      <GPTSearchBar />
      <GPTMovieSuggestion />
      
    </div>
    </>
    
  )
}

export default GPTSearchPage