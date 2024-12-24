import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./table";
import * as React from "react";
import dateformat from "dateformat";
import { Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CreateStudentForm from "./createStudent";
import { useSelector } from "react-redux";


export default function TableContainer({ studentFilterInput }) {
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const cohortFilterContainer = React.useRef();
  const courseFilterContainer = React.useRef();

  const students = useSelector((state) => state.student.students);
  return (
    <section className="p-4 bg-white rounded-xl mx-5 overflow-auto w-[96%]">
      <div className="flex justify-between mb-3 flex-wrap gap-1">
        <span className="flex gap-2">
          {/* Cohort filter container*/}
          <span ref={cohortFilterContainer}></span>
          {/* Course filter */}
          <span ref={courseFilterContainer}></span>
        </span>
        {/* Dialog box for adding a new student. */}
        <Dialog
          open={isDialogOpen}
          onOpenChange={() => setIsDialogOpen(!isDialogOpen)}
        >
          <DialogTrigger asChild>
            <button className="bg-[#e9ebee] text-slate-600 flex py-[0.35rem] px-3 rounded-md text-sm font-bold items-center gap-1">
              <Plus size={20} />
              <span className="font-bold">Add new Student</span>
            </button>
          </DialogTrigger>
          <CreateStudentForm setIsDialogOpen={setIsDialogOpen} />
        </Dialog>
      </div>

      <DataTable
        columns={columns}
        data={students}
        studentFilterInput={studentFilterInput}
        cohortFilterContainer={cohortFilterContainer}
        courseFilterContainer={courseFilterContainer}
      />
    </section>
  );
}

// This type is used to define the properties of the table rows.
export type Student = {
  student_id: string;
  name: string;
  cohort: Object;
  courses: Object[];
  dateJoined: string;
  lastLogin: string;
  status: boolean;
};

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "name",
    header: "Student Name",
    cell: ({ row }) => (
      <span className="text-slate-800">{row.getValue("name")}</span>
    ),
  },
  {
    accessorKey: "cohort",
    header: "Cohort",
    cell: ({ row }) => (
      <span className="text-slate-800">{row.getValue("cohort")["name"]}</span>
    ),
  },
  {
    accessorKey: "courses",
    header: "Courses",
    cell: ({ row }) => (
      <div className="flex ">
        {row.getValue("courses").map((course) => (
          <span
            key={course.course_id}
            className="mr-1 p-1 pr-4 pl-[0.15rem] bg-gray-100 rounded-sm text-slate-800 font-semibold text-xs flex items-center gap-1"
          >
            <span className="size-4 overflow-hidden rounded-sm">
              <img
                className="object-fill"
                src={course.course.taught_by.picture}
                alt="Not found."
              />
            </span>
            {course.course.name}
          </span>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "dateJoined",
    header: () => <div className="text-center">Date Joined</div>,
    cell: ({ row }) => (
      <div className="text-slate-800 text-center">
        {dateformat(row.getValue("dateJoined"), "dd. mmm. yyyy")}
      </div>
    ),
  },
  {
    accessorKey: "lastLogin",
    header: "Last Login",
    cell: ({ row }) => (
      <span className="text-slate-800">
        {dateformat(row.getValue("lastLogin"), "dd. mmm. yyyy h:MM TT")}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => (
      <div className="text-slate-800 text-center">
        {
          <span
            className={`${
              row.getValue("status") ? "bg-green-400" : "bg-red-500"
            } h-3 w-3 rounded-full inline-block`}
          ></span>
        }
      </div>
    ),
  },
];
