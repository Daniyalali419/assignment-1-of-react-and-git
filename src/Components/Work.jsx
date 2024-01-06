import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'

    const Work = () => {
    const WorkInfoData = [
        { 
            image: PickMeals,
            title:"Pick Meals",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Nihilhic"
        },
        { 
            image: ChooseMeals,
            title:"Choose how often",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Nihilhic"
        },
        { 
            image: DeliveryMeals,
            title:"Fast Deliveries",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit Nihilhic"
        }
    ]
    return (
        
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How it works</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quis voluptas, commodi harum quasi nemo?
            </p>
        </div>

       <div className='work-section-bottom'>
        {
            WorkInfoData.map((data) => (
              <div className='work-section-info '> <img src={data.image} alt="" />
               <h2>{data.title}</h2>
               <p>{data.text}</p>

              </div>
            ))
         


            

        }

       </div>
 </div>

  );
}

export default Work