import { useState } from 'react'
import './App.css'
import courses from './data/data'
import Courses from './components/Courses';
import AddForm from './components/AddForm';
function App() {
  const [data, setData] = useState(courses);
  const [searchQuerry, setSearchQuerry] = useState("");
  const fileteredCourses = data.filter((q) => {
    return q.name.toLowerCase().trim().includes(searchQuerry.trim().toLowerCase())
  })
  return (
    <>
      <AddForm data={data} setData={setData} />
      <Courses data={fileteredCourses} />
    </>
  )
}

export default App
