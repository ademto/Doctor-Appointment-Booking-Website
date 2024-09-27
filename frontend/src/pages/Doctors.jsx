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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, incidunt! Exercitationem esse id iste, reprehenderit ut dicta optio sint quisquam, corrupti sequi consequatur magni quidem neque vero doloribus saepe. Non, veritatis dolorum dicta nam sed quos doloribus impedit dolor neque, accusamus maxime doloremque iure perferendis odio incidunt obcaecati temporibus, ut accusantium modi nisi sit expedita cum. Nisi, maiores quibusdam. Voluptates quam totam molestiae voluptatum nemo obcaecati dolor dignissimos recusandae impedit quasi ducimus numquam nostrum quis accusamus, fugit repellat corporis illum eos. Error, a laudantium? Ut esse maiores eaque minima nihil vel, placeat aperiam iusto in omnis debitis sunt, rem, cupiditate ipsum error architecto explicabo veritatis eos voluptatem accusamus quidem. Aperiam sint id voluptatem facilis quibusdam fuga maiores quaerat saepe rerum laudantium possimus et, dicta placeat dolor? Excepturi aliquam corrupti necessitatibus deleniti eum incidunt molestias alias, cum tempore vero ipsam! Dicta architecto consectetur esse dignissimos. Ullam fugit cumque suscipit, quisquam deserunt ipsam inventore nesciunt similique ex error quidem provident et quam. Voluptatem sequi unde sapiente ab, cumque esse, iure expedita porro minima perferendis rerum, excepturi eligendi incidunt tempore? Fugit recusandae, nemo adipisci vero minima odio debitis eos esse non asperiores, dolore nisi aliquid optio sint quam ducimus ullam possimus ad consequatur?
      </div>
    </div>
  )
}

export default Doctors