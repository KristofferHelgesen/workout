import { Injectable } from "@angular/core";
import { Card } from "./workoutcard/card.model";

@Injectable({
  providedIn: "root"
})
export class AppService {
  arrayOfElements: Array<Card> = [
    new Card(
      1,
      "Arm Curl",
      "The triceps are located at the back of the arm and is the major muscle in the extension of the elbow, or straightening the arm. Here are the best stretches and exercises for triceps to keep the arms strong and pain free.",
      "https://cdn.treningsforum.no/cache/front/c60c3cf8bd747039bd6750d69943ebb4_5143d8151060ca165e44c65ad24feb28.jpg",
      "Man curling arm with measuring tape"
    ),
    new Card(
      2,
      "Arm extending",
      "The triceps are located at the back of the arm and is the major muscle in the extension of the elbow, or straightening the arm. Here are the best stretches and exercises for triceps to keep the arms strong and pain free.      ",
      "http://www.malvernmassage.com.au/wp-content/uploads/2019/05/The_Best_Training_Tool_for_Triceps.jpg",
      "Man flexing triceps from behind"
    )
  ];

  getAllExersises() {
    return this.arrayOfElements;
  }

  getSingeleExersise(incomingId) {
    let returnThis = this.arrayOfElements.filter(x =>
      x.id === parseInt(incomingId) ? x : null
    );

    return returnThis[0];
  }

  constructor() {}
}
