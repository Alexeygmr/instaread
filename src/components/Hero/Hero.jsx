import React from 'react';
import {ReactComponent as NewPaperFolder} from '../../icons/svg/folded-newspaper.svg'
import {ReactComponent as HeadPhones} from '../../icons/svg/audio-headphones.svg'
import {ReactComponent as BookMark} from '../../icons/svg/Group 2254.svg'
import {ReactComponent as ShopBox} from '../../icons/svg/Group 2275.svg'

const Hero = () => {
  return (
    <div className='hero-section container'>
        <div className='hero-main-image-container'>
          <picture>
            <source srcSet={'images/rastr-images/Astrophysics-for-People-in-a-Hurry-eBook.webp, images/rastr-images/Astrophysics-for-People-in-a-Hurry-eBook@2x.webp'} type="image/webp" />
            <img src={'images/rastr-jpeg/Astrophysics-for-People-in-a-Hurry-eBook.jpg'} alt={'hello'} />
          </picture>
        </div>
      <div className='hero-main-info-container'>
        <h2 className='hero-main-title'>Astrophysics for People in a Hurry’s Summary</h2>
        <p className='hero-sub-title'>Key Insights & Analysis</p>
        <p className='hero-sub-description'>Kelly Brogan, MD with Kristin Loberg</p>
        <div className='hero-secondary-info-container'>
          <span className='hero-secondary-info-container-item'>
            <NewPaperFolder/>
            18 min read</span>
          <span className='hero-secondary-info-container-item'>
            <HeadPhones/>
            14 min listen</span>
          <span className='hero-secondary-info-container-item'>
            <BookMark/>
            Add to Library</span>
          <span className='hero-secondary-info-container-item'>
            <ShopBox/>
            Buy book</span>
        </div>
        <div className='hero-secondary-info-genre-container'  >
          <span className='hero-secondary-info-genre-item'>Business & Finance</span>
          <span className='hero-secondary-info-genre-item'>Business & Finance</span>
        </div>

      </div>




    </div>
  )
}

export default Hero;