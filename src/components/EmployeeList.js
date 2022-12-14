import Data from "../data";
import EmployeeItem from "./EmployeeItem"

const employeeData = Data.map((ele) => {
  return <EmployeeItem key={ele.id} {...ele}/>
})

export default function EmployeeList(props) {
    return (
      <div className="EmployeeList">
      
        {employeeData}
      </div>
    );
  }