import React from 'react'
import { Oval } from 'react-loader-spinner'
import { connect } from 'react-redux'
import { fetchImages } from '../actions'
import ImageCard from './ImageCard'


const ImageList = (props) => {
  if(!props.images.images) {
    return <div className='flex h-full justify-center items-center'>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  }

  const images = props.images.images.results.map(image => {
    return <ImageCard key={image.id} image={image}/>
  })

  return (
    <div className='grid grid-cols-auto-fill gap-2 px-4 max-w-sm sm:max-w-3xl lg:max-w-5xl mx-auto'>
      {images}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {images: state.images}
}

export default connect(mapStateToProps, {fetchImages})(ImageList)