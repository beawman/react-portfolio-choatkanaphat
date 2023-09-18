import React from 'react'
import { services } from '../data/exampleData.js'

const CardAbout = ({ item }) => {
  return <div className="xs:w-[250px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img style={{ width: '100%', height: "200px" }} className="rounded-t-lg" src={item.image} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {item.points.map((p, i) =>
          <li key={i}>{p}</li>
        )}
      </p>
    </div>
  </div>
}
const About = () => {
  return (
    <div className='about-head'>
      <h2 className='sectionHeadText'>About Me</h2>
      <div className='about-text'>
        Choatkanaphat Dhitpakdekunanon<br />
        DevOps in Bangkok<br />
        • 14 Years of experience in financial business <br />
        • 10 years in IT service delivery field<br />
        • 1 year in native cloud environment<br />
        • Trained in ITIL, SOC2 and DevOps<br />
      </div>
      <h2 className='sectionHeadText'>Skills</h2>
      <div className='about-text'>I can say I'm good at</div>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((item, index) => <CardAbout key={index} item={item} />)}
      </div>
    </div>
  )
}

export default About