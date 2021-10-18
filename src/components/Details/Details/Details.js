import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const {servicecareId} = useParams();
    const [newDetails, setNewDetails] = useState([]);
    const [singleDetail, setSingleDetail] = useState({});

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setNewDetails(data.doctors))
    }, [])

    useEffect(() => {
        const foundDetails = newDetails.find
        (doctors => parseInt(doctors.id) === parseInt(servicecareId));
        
        setSingleDetail(foundDetails)       
        console.log(foundDetails)       
      },[newDetails])

    return (
        <div className="container-fluid details">
            <h1>This is detail page: {servicecareId}</h1>
            <h1>Service Name :{singleDetail?.name}</h1>
            <img src={singleDetail?.img} alt="" />
        </div>
    );
};

export default Details;




// const SingleEmployee = () => {
//     let { id } = useParams();
  
//     const [employeesDetails, setEmployeesDetails] = useState([]);
  
//     const [singleEmployee, setSingleEmployee] = useState({});
  
//     //  data load howa
//     useEffect(() => {
//       fetch("/employeeDetails.json")
//         .then((res) => res.json())
//         .then((data) => setEmployeesDetails(data.employee));
//     }, []);
  
//     // call hbe jokon amar shob data load hye state e set hbe
//     useEffect(() => {
//       const foundEmployee = employeesDetails.find(
//         (employee) => employee.login.id === id
//       );
//       setSingleEmployee(foundEmployee);
//     }, [employeesDetails]);