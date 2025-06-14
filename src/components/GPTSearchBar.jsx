import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constatnts';
import { addGptMovieResult } from '../utils/gptSlice';

const GPTSearchBar = () => {

  const dispatch = useDispatch();

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);


  const searchMocieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie  +'&include_adult=false&language=en-US&page=1', API_OPTIONS);

    const json = await data.json();

    return json.results;
  }

  const handleGptSearchClick = async () => {

    console.log(searchText.current.value);

    const gptQuery = "Act as Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + " only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Don, Golmaal, Krish, Hulk";

    const gptResults = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
      { role: 'user', content: gptQuery },
  ],
    });

    if(!gptResults.choices){
      //Should handle Error 
    }
    
    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    
    //Returns Promises
    const promiseArray = gptMovies.map(movie => searchMocieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    
    dispatch(addGptMovieResult({movieNames : gptMovies ,movieResults : tmdbResults}));

  }



  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 bg-white col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder} />
            <button className='py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3 cursor-pointer hover:bg-red-900' onClick={handleGptSearchClick} >{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar