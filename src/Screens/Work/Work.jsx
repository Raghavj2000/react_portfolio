import React from 'react'
import './work.css'

const Work = () => {
    const work=[
        {
            index:1,
            name:'Ziniosedge',
            from:'2023',
            to:'Present',
            role:'Frontend Developer',
            description:'Working as a Front-end Developer, I have been responsible for developing and designing the ZD viewer webpage, I have also worked on portal dashboard.'
        },
        {
            index:2,
            name:'Oslash',
            from:'2022',
            to:'2023',
            role:'Frontend Developer',
            description:'Worked as a Front-end Developer, I was responsible for developing and designing the Oslash user handle, also worked on activity panel and UI/UX.'
        }
    ]
  return (
    <div className='work-screen'>
       {work.map((item)=>{
            return(
                <div className='work-container'>
                <div className='mac-design'>
                    <div className="red"></div>
                    <div className="green"></div>
                </div>
                <div className='padding-box'>
                <div className="cd-contact-form">
                <span className="green-span">raghav $</span> {item.name}
              </div>
              <div className="about-contact-form">
                <span className="green-span">
                  {item.name} <span className="light-green">(main)</span> $
                </span> 
              </div>
              <div className='role'>{item.role}</div>
              <div className='timeline'>{item.from} - {item.to} </div>
              <div className='description'>{item.description}</div>
              </div>
            </div>

            )
       })}
      

    </div>
  )
}

export default Work