import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";

export default function HomePage(props) {
  return (
    <div>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}