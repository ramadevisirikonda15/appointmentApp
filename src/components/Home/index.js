import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
#this is index.js file
import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
