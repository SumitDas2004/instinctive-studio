import { NotFoundException } from "../exceptions/NotFoundException.js";
import { prismaClient } from "../utils/prisma.js";

const createStudent = async (student) => {
  return await prismaClient.student.create({
    data: {
      name: student.name,
      last_login: student.lastLogin,
      cohort: {
        connect: {
          cohort_id: student.cohortId,
        },
      },
      courses: {
        create: [{
          course: {
            connect: {
              course_id: student.courseId
            }
          }
        }],
      },
      status: student.status,
    },
    include: {
      cohort: true,
      courses: {
        include: {
          course: {
            include: {
              taught_by: true
            }
          },
        }
      },
    },
  });
};

const getStudents = async () => {
  return await prismaClient.student.findMany({
    include: {
      courses: {
        include: {
          course: {
            include: {
              taught_by: true,
            },
          },
        },
      },
      cohort: true,
    },
  });
};

const deleteStudent = async (rollNumber) => {
  if (!(await doesStudentExist(rollNumber)))
    throw new NotFoundException("Student not found.");

  await prismaClient.student.delete({
    where: {
      roll_number: rollNumber,
    },
  });
};

const doesStudentExist = async (rollNumber) => {
  const count = await prismaClient.student.count({
    where: {
      roll_number: rollNumber,
    },
  });
  return count > 0;
};

export { getStudents, deleteStudent, createStudent };
