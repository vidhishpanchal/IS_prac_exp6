import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useSelector  } from "react-redux";

const CourseTable = () => {

  const allCourses = useSelector((state)=> state.admin.allCourses)
  const [textVal, setTextVal] = useState('')
  const [filteredCourses, setFilteredCourses] = useState([])

  console.log("ac", allCourses)

  useEffect(()=> {
    setFilteredCourses(allCourses)
  },[allCourses])
   
  const onChange = (value) => {
    const searchVal = value.toLowerCase();
    let regex = new RegExp(searchVal, "g");
    const byName = allCourses.filter((course) => {
      if(course.course.name) {
        return course.course.name.toLowerCase().match(regex)
      }
    })
    const byInstructor = allCourses.filter((course) => {
      if(course.course.instructorId.name) {
        return course.course.instructorId.name.toLowerCase().match(regex)
      }
    })
    const byType = allCourses.filter((course) => {
        if(course.course.type) {
          return course.course.type.toLowerCase().match(regex)
        }
      }
    );
    const byPrice = allCourses.filter((course) => {
        if(course.course.price) {
            course.course.price.toString().toLowerCase().match(regex)
        }
      }
    );
    setFilteredCourses([...new Set([...byName, ...byInstructor, ...byType, ...byPrice])]);
  };

  const columns = [
    {
      name: "Name",
      selector: row => row.course.name,
      sortable: true,
    },
    {
      name: "Instructor",
      selector: row=> row.course.instructorId.name,
      sortable: true,
    },
    {
        name: "Type",
        selector: row=> row.course.type
    },
    {
        name: "Price(₹)",
        selector: row=> row.course.price
    },
    {
        name: "Enrollments",
        selector: row=> row.count
    },
    {
      name: "Revenue(₹)",
      selector: row=> row.course.price*row.count
    },
    {
      name: "Course",
      cell: (row) => (
        <Link to={`/courseLink`}>View</Link>
      ),
    },
  ];

  return (
    <div className="listTable">
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="outlined-search"
          placeholder="Search by Name/Instructor/Type/Price"
          fullWidth
          size="small"
          type="search"
          variant="outlined"
          value={textVal}
          onChange={(e) => {
            setTextVal(e.target.value);
            onChange(e.target.value)
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchOutlinedIcon/></InputAdornment>,
          }}
        />
      </form>
      <DataTable
        title="Courses"
        columns={columns}
        data={filteredCourses}
        highlightOnHover={true}
        pointerOnHover={true}
        pagination={true}
        paginationPerPage={8}
      />
    </div>
  );
};

export default CourseTable;
