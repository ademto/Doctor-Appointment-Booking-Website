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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam totam similique tempora vel veritatis ipsum exercitationem nesciunt obcaecati sunt illo, corrupti eligendi error incidunt illum commodi qui beatae inventore eius laudantium optio nihil ratione dicta fugiat enim. Iusto consectetur quidem culpa vel molestias quibusdam veritatis optio dolore quo rerum fugit ea odit, nobis ipsam at rem, ex perspiciatis sit qui voluptatibus quod hic voluptates corporis. Molestiae esse repudiandae totam vel, officia exercitationem tenetur odio consequatur perspiciatis perferendis expedita facere asperiores eos voluptate voluptas saepe! Aut beatae dolor tempora eveniet corrupti quos reiciendis in culpa error, reprehenderit nesciunt quae consequatur excepturi?
      </div>
    </div>
  )
}

export default Doctors