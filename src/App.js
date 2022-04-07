import './App.css';
import React, { useState } from 'react'

function App() {
  const [slides, setSlides] = useState(1)

  const onNext = () => { 
    let slide = slides + 1
    setSlides(slide)
  }

  const onPervious = () => {
    let slide = slides - 1
    setSlides(slide)
  }

  return (
    <div className="App">
      <div className="pic-box">
        <img className="img-app" src={slides === 1 ? './sample1.jpeg' : slides === 2 ? './sample2.jpeg' : slides === 3 ? './sample3.jpeg' : setSlides(1)} alt="pic"/>
      </div>
      <div className="desc-box">
        <h1>Reviews</h1>
        <hr/>
        <h3>Best Price</h3>
        <img src='./quotation.png' alt='quotations'/>
        <div className='review-box'>
          <img onClick={onPervious} src='./left.png' alt='pervious'/>
          {
            slides === 1 ?
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p><br/>
              <i>- Peter Amar</i>

              <div className='dot-box'>
                <div className='dot-bold'></div>
                <div></div>
                <div></div>
              </div>
            </div> : 

            slides === 2 ?
            <div>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p><br/>
              <i>- Peterpen</i>

              <div className='dot-box'>
                <div></div>
                <div className='dot-bold'></div>
                <div></div>
              </div>
            </div> : 

            slides === 3 ?
            <div>
              <p>
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,              
              </p><br/>
              <i>- Peter Parker</i>

              <div className='dot-box'>
                <div></div>
                <div></div>
                <div className='dot-bold'></div>
              </div>
          </div> : setSlides(1)
          }
          <img onClick={onNext} src='./right.png' alt='next'/>
        </div>    
      </div>
    </div>
  );  
}

export default App;
