import { useParams, Link } from "react-router-dom"
import Title from "./Title"

export default function ProductDetail() {

    let Params = useParams()

  return (
    <div>
        <Title mainTitle={Params.id + 'GloveDetails'} />
    
    


      <Link to="/">Back to list</Link>
    </div>
  )
}
