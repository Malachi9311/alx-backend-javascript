const updateStudentGradeByCity = (studentList, city, grades) => {
  if (!Array.isArray(studentList) || !Array.isArray(grades)) {
    return [];
  }
  const cityStudents = studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const newArr = grades.find((student2) => student.id === student2.studentId);
      return { ...student, grade: newArr ? newArr.grade : 'N/A' };
    });
  return cityStudents;
};

export default updateStudentGradeByCity;
