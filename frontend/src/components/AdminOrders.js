import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useSelector  } from "react-redux";

const OrdersTable = () => {

  const allCourses = useSelector((state)=> state.admin.allOrders)
  const [textVal, setTextVal] = useState('')
  const [filteredCourses, setFilteredCourses] = useState([])

  useEffect(()=> {
    setFilteredCourses(allCourses)
  },[allCourses])
   
  const onChange = (value) => {
    const searchVal = value.toLowerCase();
    let regex = new RegExp(searchVal, "g");
    const byCourseName = allCourses.filter((course) => {
        if(course.courseId.name) {
            return course.courseId.name.toLowerCase().match(regex)
        }
    }
    );
    const byUser = allCourses.filter((course) => {
      if(course.userId.name) {
        return course.userId.name.toLowerCase().match(regex)
      }
    }
    );
    const byRazorpayId = allCourses.filter((course) => {
        if(course.razorpay_payment_id) {
          return course.razorpay_payment_id.toLowerCase().match(regex)
        }
      }
      );
    setFilteredCourses([...new Set([...byCourseName, ...byUser, ...byRazorpayId])]);
};

const columns = [
    {
      name: "Course",
      selector: (row)=> row.courseId.name,
      sortable: true,
    },
    {
      name: "Student",
      selector: (row)=> row.userId.name,
      sortable: true,
    },
    {
      name: "Order Date",
      selector: (row) => new Date(row.date).toLocaleDateString()
    },
    {
      name: "Price",
      selector: (row) => row.courseId.price
    },
    {
      name: "Razorpay Id",
      selector: (row) => row.razorpay_payment_id
    },
    {
      name: "Details",
      cell: (row) => (
        <Link to={`/order/:${row._id}`}>View</Link>
      ),
    },
  ];

  return (
    <div className="listTable">
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="outlined-search"
          placeholder="Search by Course/Student/PaymentId"
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
        title="Orders"
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

export default OrdersTable;
