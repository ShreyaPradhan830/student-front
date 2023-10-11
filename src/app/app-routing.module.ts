import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
{ path: 'AllStudents', component: ShowStudentComponent},
  { path: 'AddStudent', component: AddStudentComponent},
  { path: 'details/:rollNumber', component: StudentDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
