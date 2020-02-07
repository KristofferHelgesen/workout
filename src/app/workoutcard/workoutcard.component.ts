import { Component, OnInit, Input } from "@angular/core";
import { Card } from "./card.model";

@Component({
  selector: "app-workoutcard",
  templateUrl: "./workoutcard.component.html",
  styleUrls: ["./workoutcard.component.css"]
})
export class WorkoutcardComponent implements OnInit {
  @Input() element: Card;

  constructor() {}

  ngOnInit() {}
}
