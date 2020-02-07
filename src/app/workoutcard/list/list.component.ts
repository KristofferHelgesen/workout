import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../card.model";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  arrayOfElements: Array<Card>;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.arrayOfElements = this.appService.getAllExersises();
  }
}
