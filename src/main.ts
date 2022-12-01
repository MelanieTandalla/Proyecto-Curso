//MELANIE TANDALLA
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Gradebooks } from "./entities/gradebook";


let students: Student[] = [];
let teachers: Teacher[] = [];
let activities : activity [] = [];
let courses : Course [] = [];
let gradebook : Gradebooks [] = [];

enum Course{ 
    Programacion = "Programacion Visual",
    BaseDatos =  "Base de Datos",
    Metodologias= "Metodologias"
}

enum area{
    Desarrollo = "Desarrollo de software",
    Marketing= "Marketing",
    Turismo = "Turismo"
}

function addStudent():void{

    let currentStudent : Student = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    }
    students.push(currentStudent);
    console.log(students);
};


function addTeacher(){

    let currentTeacher : Teacher = {
        name: readFromHtml("name-teachers"),
        identification: parseInt(readFromHtml("identification-teachers")),
        gmail: readFromHtml("mail-teachers"),
        adress: readFromHtml("adress-teachers"),
        title: readFromHtml("title"),
        gradeLevel: readFromHtml("gradeLevel"),
        area: readFromHtml("area"),
    }
    teachers.push(currentTeacher);
    console.log(teachers);
};
initArea();


function addactivities (){

    let currentActivity : activity = {
        name_activity : readFromHtml("name_activity")
    }
    activities.push(currentActivity);
    console.log(activities);
};
initCouse();

function addcourses (){

    let currentCourse :course = {
         name_courses : readFromHtml("name_courses"),
         number_hours : parseInt(readFromHtml("number_hours")),
         parallel : readFromHtml("parallel")
    }
    courses.push(currentcourse);
    console.log(courses);
};

function addgradebook (){

    let currentGradebook : Gradebooks = {
        value : readFromHtml("value"),
        course: readFromHtml("Couse"),
        activity: readFromHtml("Activity"),
        maximunGrade: parseInt(readFromHtml("maximunGrade"))
    }
    gradebook.push(currentGradebook);
    console.log(gradebook);

}


function readFromHtml(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;

}

function initCouse(): void{
    let coursegradebook = document.getElementById("course_greadebook") as HTMLSelectElement;
    let courses =Object.values(Course);

courses.forEach(
    (value)=>{
        let option = document.createElement("option")
        option.value = value;
        option.text = value;
        coursegradebook.add(option)
    }
)
};

function initArea(): void{
    let areas = document.getElementById("Area") as HTMLSelectElement;

    let area =Object.values(areas);

    area.forEach(
    (value)=>{
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        areas.add(option)
    }
)
}
