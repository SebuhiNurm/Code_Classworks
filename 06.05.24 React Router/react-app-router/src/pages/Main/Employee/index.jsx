import React, { useEffect, useState } from 'react'
import { endpoints } from '../../../services/constant';
import { getAll } from "../../../services/index"
function MainEmployee() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll(endpoints.employee).then((response) => {
      setData(response)
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])
  console.log(data);
  return (
    <>
      {/* {console.log(data)} */}
      <div>Employee</div>
    </>
  )
}

export default MainEmployee