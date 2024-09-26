import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  
  return (
    <div>
      <p>Browse through the Doctos specialist</p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque saepe dolores laboriosam. Assumenda omnis iste asperiores ullam velit quod dolorem quibusdam voluptate magni facilis amet nobis delectus, ad est fuga nisi alias placeat quis repudiandae quos perspiciatis. Quis praesentium molestiae distinctio! Consequatur eveniet necessitatibus quos soluta sed consectetur <accusamus className="lorem50"></accusamus>
      </div>
    </div>
  )
}

export default Doctors