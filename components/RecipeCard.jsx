import React from 'react'
import Link from 'next/link'

const RecipeCard = ({recipe}) => {

    const {title, slug, cookingTime, Thumbnail} = recipe.fields

  return (
    <div className='card'>
        <div className="featured">
            {/* iamge */}
        </div>
        <div className="content">
            <div className="info">
                <h4>{title}</h4>
                <p>Takes approx {cookingTime} mins to make</p>
            </div>
            <div className="actions">
               <Link href={'/recipes/' + slug}><a>Cook this</a></Link> 
            </div>
        </div>
    </div>
  )
}

export default RecipeCard