import { useState } from "react"

export default function PropsDrilling() {
  const [course, setCourse] = useState("React Js");
  return (
    <>
      <h1>Parent Component - </h1>
      <ChildA course={course} />
    </>
  )
}
function ChildA({ course }) {
  return (
    <>
      <h1>ChildA Component - </h1>
      <ChildB course={course} />
    </>
  )
}
function ChildB({ course }) {
  return (
    <>
      <h1>ChildB Component - </h1>
      {course}
    </>
  )
}