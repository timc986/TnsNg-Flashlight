import { Component, OnInit } from "@angular/core";
import * as flashlight from "nativescript-flashlight";
import { Color, Page } from "tns-core-modules/ui/page";
import { isAndroid } from 'tns-core-modules/platform';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss', "./home-common.scss"]
})
export class HomeComponent implements OnInit {
    public isOn = false;

    constructor(private page: Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // this.page.backgroundColor = '#2c303a';
        // this.page.backgroundSpanUnderStatusBar = true;
        // this.page.actionBarHidden = false;
        if (isAndroid) {
            this.page.androidStatusBarBackground = new Color("#383534");
        }

        // Init your component properties here.
        if (!flashlight.isAvailable()) {
            alert("Flashlight is not available");
        }
    }

    public onTap() {
        this.isOn = !this.isOn;
        if (this.isOn) {
            flashlight.on();
        } else {
            flashlight.off();
        }
    }
}
