import { Link } from 'react-router-dom';

export default function EmployeeListItem({ id, img, name, title }) {

  const employeeID = id;

  return (
    <Link to={`/employee/${employeeID}`} >
      <div className="EmployeeListItem">
        <div className="Employee">
          <img className="Profile" src={img} alt="img" />
          <h3 className="Name">{name} <br></br>{title}</h3>
          <p className="Title"></p>
        </div>
        <div >
        </div>
      </div>
    </Link>
  );
}
