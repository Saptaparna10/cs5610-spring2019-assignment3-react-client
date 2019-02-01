import courses from '../resources/courses.json'

class CourseService {
    constructor() {
        this.courses = courses;
    }
    addCourse = course => {
        if(course === null) {
            course = {
                title: 'New Course'
            }
        }
        course.id = (new Date()).getTime()
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

    updateCourse = updateCourse => {
        var foundIndex =  this.courses.findIndex(x => x.id == updateCourse.id);
        this.courses[foundIndex] = updateCourse;
        return this.coursesl
    }
}
export default CourseService