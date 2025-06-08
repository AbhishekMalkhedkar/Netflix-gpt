import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constatnts'

const GPTSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
                <img  src={BG_URL} width="auto" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
      
    </div>
  )
}

export default GPTSearchPage