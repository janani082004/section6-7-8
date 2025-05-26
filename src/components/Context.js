import { useContext } from "react"
import { EmployeeContext } from './CourseProvider';

export default function Context() {
  return (
    <>
      <ContextChildA />
    </>
  )
}
function ContextChildA() {
  const { setEmploy } = useContext(EmployeeContext);
  return (
    <>
      <ContextChildB />
      <button style={{ border: "1px solid red", padding: "10px" }} onClick={() => setEmploy("Context link with state was change by using setState - Changed")}>CLick to Change The course Name - Context link with state</button>
    </>
  )
}
function ContextChildB() {
  const { employ } = useContext(EmployeeContext);
  return (
    <>
      <h1>The course Name is : {employ}</h1>
    </>
  )
}