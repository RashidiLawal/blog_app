import { Link } from "react-router-dom"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import About from "./About"
import Missing from "./Missing"

const Home = () => {
  return (
    <>
    <main>
        <h3>
            Home
        </h3>
    </main>
        <NewPost>
          <Link to="newpost">newpost</Link>
        </NewPost>
        <PostPage>
           <Link to="postpage">postpage</Link>
        </PostPage>
        <About>
          <Link to="about">about</Link>
        </About>
        <Missing>
          <Link to="missing">missing</Link>
        </Missing>
  </>
  )
}

export default Home