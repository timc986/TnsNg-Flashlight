import { Component, OnInit } from "@angular/core";
import * as flashlight from "nativescript-flashlight";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public isOn = false;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public onTap() {
        if (flashlight.isAvailable()) {
            this.isOn = !this.isOn;
            if (this.isOn) {
                flashlight.on();
            } else {
                flashlight.off();
            }
        } else {
            alert("Flashlight is not available");
        }

    }
}
