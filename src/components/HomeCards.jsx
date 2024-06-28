import React from 'react'
import Card from './Card'
const HomeCards = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
            <h2 className="text-2xl font-bold">For Home Cooks </h2>
              <p className="mt-2 mb-4">
                Browse our recipes and start cooking up to your maximum potential today.
              </p>
              <a
                href="/jobs.html"
                className="inline-block bg-pink-400 text-white rounded-lg px-4 py-2 hover:bg-pink-700"
              >
                Browse Recipes
              </a>

            </Card>
            
            <Card bg='bg-pink-200'>
            <h2 className="text-2xl font-bold">For Chefs</h2>
              <p className="mt-2 mb-4">
                Submit your recipes to share your wonderful culinary creations.
              </p>
              <a
                href="/add-job.html"
                className="inline-block bg-pink-400 text-white rounded-lg px-4 py-2 hover:bg-pink-600"
              >
                Add Recipes
              </a>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default HomeCards
