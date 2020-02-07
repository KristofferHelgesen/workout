import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorkoutcardComponent } from "./workoutcard/workoutcard.component";
import { ListComponent } from "./workoutcard/list/list.component";
import { SinglecardComponent } from "./singlecard/singlecard.component";

const routes: Routes = [
  { path: "exersises", component: ListComponent, pathMatch: "full" },
  { path: "exersises/:id", component: SinglecardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
