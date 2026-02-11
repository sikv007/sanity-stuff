import { getCourses } from '@/src/api/courses';

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <ul>
      {courses.map((course) => (
        <li key={course._id}>{course.title && <h2>{course.title}</h2>}</li>
      ))}
    </ul>
  );
}
