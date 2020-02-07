import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Card } from "../workoutcard/card.model";

@Component({
  selector: "app-singlecard",
  templateUrl: "./singlecard.component.html",
  styleUrls: ["./singlecard.component.css"]
})
export class SinglecardComponent implements OnInit {
  elementId: number;
  element: Card;
  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.elementId = params["id"];
      console.log("ID: ", this.elementId);
    });
  }

  ngOnInit() {
    this.element = this.appService.getSingeleExersise(this.elementId);
    console.log("TEST", this.element);
  }
}
