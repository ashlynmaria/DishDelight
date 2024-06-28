import React from 'react'

const Hero = ({ title = 'Cook up joy with our irresistible recipes.', subtitle = "From quick weekday meals to gourmet delights, we've got something for every taste bud."}) => {
  return (
    <>  
        <section className="bg-indigo-900 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h3
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </h3>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero
