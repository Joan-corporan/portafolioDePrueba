/* Este es un componente dinamico  */
import React from 'react'

export const page = ({params}) => {
  return (
    <div>
        {params.dinamica}
    </div>
  )
}
export default page
