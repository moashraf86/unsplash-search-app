import React from 'react'
import { fetchImages } from '../actions'
import { connect } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react';
import unslpash from '../api/unslpash';

const  SerachBar = (props) => {

  const [term, setTerm] = useState('mens womens baby landscapes')
  const [randomImgUrl, setRandomImgUrl] = useState('')

  async function randomPhoto() {
    const response = await unslpash.get('/photos/random', {
      params: {
        query: 'wallpapers'
      }
    })
    setRandomImgUrl(response.data.urls.full)
  }

  useEffect(() => {
    props.fetchImages(term);
     //get random photo
    randomPhoto()
  },[])


  //onsubmit function
  const onsubmit = (e) => {
    e.preventDefault()
    props.fetchImages(term)
  }

  const handleInput = (e) => {
    setTerm(e.target.value)
  }

  return (
    <div 
      style={{backgroundImage: `url(${randomImgUrl})`}}  
      className="relative h-[500px] bg-cover bg-no-repeat bg-center mb-10 after:content-[''] after:absolute after:w-full after:h-full after:bg-black/25 after:top-0 after:z-10 after:backdrop-blur-[2px]">
      <div className='flex justify-center items-center py-5 max-w-3xl lg:max-w-5xl mx-auto h-full'>
        <form className='w-full flex justify-between items-center gap-4' onSubmit={onsubmit}>
          <input type="text" placeholder='Search free high-resolution images' value={props.term} onChange={handleInput}
            className='px-3 py-2 outline-none border-none flex-1 focus-visible:border-none rounded-sm z-50' />
          <button type='submit' 
            className='px-3 py-2 bg-gray-900 text-gray-50 font-medium text-md z-50'>Search</button>
        </form>
      </div>
    </div>
    
  )
}

export default connect(null, {fetchImages})(SerachBar)
