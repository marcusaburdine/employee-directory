
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Data from "../data";

export default function Employee(props) {

    const [employeeInfo, setEmployeeInfo] = useState(null);

    const { employeeID } = useParams();
    console.log(employeeID)




    useEffect(() => {

        const getEmployeeInfo = async () => {
            try {
                const data = Data.find(eachEmployee => eachEmployee.id === employeeID);
                console.log(data)
                setEmployeeInfo(data);
            } catch (error) {
                console.error(error);
            }
        }
        getEmployeeInfo();
    }, [employeeID]);

    const loaded = () => {
        return (
            <div className='EmployeeList'>
                <div className='Profile'>

                    <h1>Employee</h1>
                </div>
                <div className='details detailsMain'>
                    <img src={employeeInfo.img} alt="img" />
                    <div >
                        <h2>{employeeInfo.name}</h2>
                        <p>{employeeInfo.title}</p>
                    </div>
                </div>
                <div className='Employee'>
                    <h3>Office</h3>
                    <p className='Name'>{employeeInfo.Office}</p>
                </div>
                <div className='Employee'>
                    <h3>Mobile</h3>
                    <p className='Name'>{employeeInfo.Mobile}</p>
                </div>
                <div className='Employee'>
                    <h3>SMS</h3>
                    <p className='Name'>{employeeInfo.SMS}</p>
                </div>
                <div className='Employee'>
                    <h3>Email</h3>
                   
                    <p className='Name'>{employeeInfo.email}</p>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading Employee ...</h1>
    }

    return (
        employeeInfo ? loaded() : loading()
    )
}