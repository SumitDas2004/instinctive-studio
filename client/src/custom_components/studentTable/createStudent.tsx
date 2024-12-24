import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import SelectionList from "../select";
import { addStudent, getCohorts, getCourses } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import {addStudents} from '../../redux/studentSlice.js'
import { Loader2 } from "lucide-react";

export default function CreateStudentForm({setIsDialogOpen}) {
  const dispatch = useDispatch()
  // Stores the list of courses
  const [courses, setCourses] = React.useState([]);
  // Stores the list of cohorts.
  const [cohorts, setCohorts] = React.useState([]);

  const[course, setCourse] = React.useState<string>("")
  const[cohort, setCohort] = React.useState<string>("")
  const[name, setName] = React.useState<string>("")

  const[creatingStudent, setCreatingStudent] = React.useState<boolean>(false)

  const selectCourse = (course: string)=>{
    setCourse(course)
  }

  const selectCohort = (cohort: string)=>{
    setCohort(cohort)
  }

  React.useEffect(() => {
    getCourses().then((res) =>
      setCourses(res.map((course) => ({ ...course, id: course.course_id, picture: course.taught_by.picture })))
    );
    getCohorts().then((res) =>
      setCohorts(res.map((cohort) => ({ ...cohort, id: cohort.cohort_id })))
    );
    setName("")
    setCourse("")
    setCohort("")
  }, []);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Student</DialogTitle>
      </DialogHeader>
      <form className="flex gap-5 flex-col" onSubmit={async(e)=>{
        e.preventDefault()
        setCreatingStudent(true)
        const student = await createStudent({
          name,
          course,
          cohort
        })
        if(student)dispatch(addStudents(student))
          setCreatingStudent(false)
        setIsDialogOpen(false)
      }}>
        {/* Student name input */}
        <span>
          <Label htmlFor="studentName">Student Name</Label>
          <Input type="text" placeholder="Student Name" id="studentName" value={name} onChange={e=>setName(e.target.value)}/>
        </span>

        {/* Select Course */}
        <span className="flex gap-2 items-center">
          <Label>Course:</Label>
          <SelectionList
            placeHolder={"Select Course"}
            options={courses}
            setValue={selectCourse}
          />
        </span>

        {/* Select Cohort */}
        <span className="flex gap-2 items-center">
          <Label>Cohort:</Label>
          <SelectionList placeHolder={"Select Cohort"} options={cohorts} setValue={selectCohort}/>
        </span>
        <Button type="submit" disabled={creatingStudent}>
          {creatingStudent?<Loader2 className="animate-spin"/>:"Save"}
        </Button>
      </form>
    </DialogContent>
  );
}

const createStudent = async(student) => {
  const data = {
    name: student.name,
    cohortId: student.cohort,
    courseId: student.course,
    status: false,
    lastLogin: new Date().toISOString()
  }
  return await addStudent(data)
}