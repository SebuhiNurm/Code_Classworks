import { useState } from "react"
import { nanoid } from "nanoid";
function AddForm({ data, setData }) {
    const [courseName, setCourseName] = useState("")
    const [coursePrice, setCoursePrice] = useState(0)
    const [courseImage, setCourseImage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        let newCourse = {
            id: nanoid(),
            name: courseName,
            price: coursePrice,
            img: courseImage,
        }
        setData([...data, newCourse]);
        setCourseName("")
        setCoursePrice(0)
        setCourseImage("")
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" onChange={(e) => setCourseName(e.target.value)} value={courseName} placeholder="name" />
            <input type="text" onChange={(e) => setCourseImage(e.target.value)} value={courseImage} placeholder="image" />
            <input type="number" onChange={(e) => setCoursePrice(e.target.value)} value={coursePrice} placeholder="price" />
            <button type="submit">Add Course</button>
        </form>
    )
}

export default AddForm