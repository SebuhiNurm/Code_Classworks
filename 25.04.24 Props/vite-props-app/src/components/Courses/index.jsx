// import courses from "../../data/data"
import Course from "../Course"
function Courses({ data }) {
    return (
        <>
            {data && data.map((i) => {
                return <Course key={i.id} product={i} />
            })}
        </>
    )
}

export default Courses