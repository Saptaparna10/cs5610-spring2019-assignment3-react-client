import courses from '../resources/courses.json'
class CourseService {
    constructor() {
        this.courses = courses;
    }
    addCourse = course => {
        if(course === null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }
        }
        this.courses.push(course)
        return this.courses
    }

    findCourseById = courseId =>
        this.course = this.courses.find(
            course => course.id == courseId
        )


    findAllCourses = () =>
        this.courses;

    deleteCourse = deleteCourse =>
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        )
}
export default CourseService