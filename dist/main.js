"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
let courses = [];
let gradebook = [];
var Course;
(function (Course) {
    Course["Programacion"] = "Programacion Visual";
    Course["BaseDatos"] = "Base de Datos";
    Course["Metodologias"] = "Metodologias";
})(Course || (Course = {}));
var area;
(function (area) {
    area["Desarrollo"] = "Desarrollo de software";
    area["Marketing"] = "Marketing";
    area["Turismo"] = "Turismo";
})(area || (area = {}));
function addStudent() {
    let currentStudent = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    };
    students.push(currentStudent);
    console.log(students);
}
;
function addTeacher() {
    let currentTeacher = {
        name: readFromHtml("name-teachers"),
        identification: parseInt(readFromHtml("identification-teachers")),
        gmail: readFromHtml("mail-teachers"),
        adress: readFromHtml("adress-teachers"),
        title: readFromHtml("title"),
        gradeLevel: readFromHtml("gradeLevel"),
        area: readFromHtml("area"),
    };
    teachers.push(currentTeacher);
    console.log(teachers);
}
;
initArea();
function addactivities() {
    let currentActivity = {
        name_activity: readFromHtml("name_activity")
    };
    activities.push(currentActivity);
    console.log(activities);
}
;
initCouse();
function addcourses() {
    let currentCourse = {
        name_courses: readFromHtml("name_courses"),
        number_hours: parseInt(readFromHtml("number_hours")),
        parallel: readFromHtml("parallel")
    };
    courses.push(currentcourse);
    console.log(courses);
}
;
function addgradebook() {
    let currentGradebook = {
        value: readFromHtml("value"),
        course: readFromHtml("Couse"),
        activity: readFromHtml("Activity"),
        maximunGrade: parseInt(readFromHtml("maximunGrade"))
    };
    gradebook.push(currentGradebook);
    console.log(gradebook);
}
function readFromHtml(id) {
    return document.getElementById(id).value;
}
function initCouse() {
    let coursegradebook = document.getElementById("course_greadebook");
    let courses = Object.values(Course);
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        coursegradebook.add(option);
    });
}
;
function initArea() {
    let areas = document.getElementById("Area");
    let area = Object.values(areas);
    area.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        areas.add(option);
    });
}
