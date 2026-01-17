import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: 'Harshit', age: 23 }, //0
        { id: 2, name: 'Rohan', age: 25 }, //1
    ];

    //get all students
    getStudents(){
        return this.students;
    }

    //get student by id
    getStudentById(id : number){
         const student = this.students.find((s) => s.id === id );
         if(!student) throw new NotFoundException("Student is not found");
         return student;
    }

    //create new student
    // createStudent()


}
