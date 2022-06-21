import data from '../data.json';
import { Link } from "react-router-dom";

const Home = () => {
  const courses = JSON.parse(JSON.stringify(data)).courses;
  
  return (
    <ul>
      {
        courses.map((course, i) => (
          <Link key={i} to='/course-details'>
            {course}
          </Link>
        ))
      }
    </ul>
)};

export default Home;