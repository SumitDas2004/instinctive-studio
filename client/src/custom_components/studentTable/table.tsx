"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import * as React from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Student } from "./container";
import { Input } from "../../components/ui/input";
import { createPortal } from "react-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useSelector } from "react-redux";

interface DataTableProps {
  columns: ColumnDef<Student>[];
  data: Student[];
  studentFilterInput: any;
  courseFilterContainer: any;
  cohortFilterContainer: any;
}

export function DataTable({
  columns,
  data,
  studentFilterInput,
  courseFilterContainer,
  cohortFilterContainer,
}: DataTableProps) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });
  const cohorts = useSelector((state: any) => state.course.cohorts);
  const courses = useSelector((state: any) => state.course.courses);
  console.log(cohorts);
  return (
    <div className="overflow-auto">
      <div className="flex items-center ">
        {/* Input element to filter students based on name */}
        {studentFilterInput &&
          studentFilterInput.current &&
          createPortal(
            <Input
              placeholder="Search student here"
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table
                  .getColumn("name")
                  ?.setFilterValue(event.target.value.trim())
              }
              className="bg-white py-5 px-9 outline-none border-none shadow-none rounded-xl w-full"
            />,
            studentFilterInput.current
          )}

        {/* Cohort based filteration */}
        {cohortFilterContainer &&
          cohortFilterContainer.current &&
          createPortal(
            <Select>
              <SelectTrigger className="bg-[#e9ebee] text-slate-600 flex py-[0.35rem] px-3 rounded-md text-sm font-bold items-center gap-1 outline-0">
                <SelectValue placeholder="Cohort filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cohorts</SelectLabel>
                  <SelectItem value=" ">None</SelectItem>
                  {cohorts.map((cohort: any) => (
                    <SelectItem key={cohort.name} value={cohort.name}>
                      {cohort.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>,
            cohortFilterContainer.current
          )}

        {/* Course based filteration */}
        {courseFilterContainer &&
          courseFilterContainer.current &&
          createPortal(
            <Select>
              <SelectTrigger className="bg-[#e9ebee] text-slate-600 flex py-[0.35rem] px-3 rounded-md text-sm font-bold items-center gap-1 outline-0">
                <SelectValue placeholder="Course filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Course</SelectLabel>
                  <SelectItem value=" ">None</SelectItem>
                  {courses.map((course: any) => (
                    <SelectItem key={course.name} value={course.name}>
                      {course.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>,
            courseFilterContainer.current
          )}
      </div>
      <Table className="overflow-auto">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-black font-bold text-xs"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-xs">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
