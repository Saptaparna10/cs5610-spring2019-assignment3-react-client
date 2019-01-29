let _singleton = Symbol();

export default class CourseService{

    constructor(singletonToken) {
        if (_singleton != singletonToken)
            throw new Error('Cannot instantiate');
    }

    static get instance(){
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton];
    }

    findAllCourses() {
        //var data = require('../resources/courses');
        const courses = [
            {
                "id": "123",
                "title": "Course 1",
                "modules": [
                    {
                        "id": "123",
                        "title": "Module 1 1",
                        "lessons": [
                            {
                                "id": "123",
                                "title": "Lesson 1 1 1",
                                "topics": [
                                    {"title": "Topic 1 1 1 1"}
                                ]
                            },
                            {
                                "id": "234",
                                "title": "Lesson 1 1 2",
                                "topics": [
                                    {"title": "Topic 1 1 2 1"}
                                ]
                            }
                        ]
                    },
                    {
                        "id": "234",
                        "title": "Module 1 2",
                        "lessons": [
                            {
                                "id": "345",
                                "title": "Lesson 1 2 1",
                                "topics": [
                                    {"title": "Topic 1 2 1 1"}
                                ]
                            },
                            {
                                "id": "456",
                                "title": "Lesson 1 2 2",
                                "topics": [
                                    {"title": "Topic 1 2 2 1"}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "234",
                "title": "Course 2",
                "modules": [
                    {
                        "id": "345",
                        "title": "Module 2 1",
                        "lessons": [
                            {
                                "id": "567",
                                "title": "Lesson 1 3 1"
                            },
                            {
                                "id": "678",
                                "title": "Lesson 1 3 2"
                            }
                        ]
                    },
                    {
                        "id": "456",
                        "title": "Module 2 2"
                    }
                ]
            },
            {
                "id": "345",
                "title": "Course 3",
                "modules": [
                    {
                        "id": "567",
                        "title": "Module 3 1"
                    },
                    {
                        "id": "678",
                        "title": "Module 3 2"
                    }
                ]
            },
            {
                "id": "456",
                "title": "Course 4"
            }
        ];
        return courses;
    }

}