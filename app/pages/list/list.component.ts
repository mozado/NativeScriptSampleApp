import {Component,ElementRef, OnInit, ViewChild} from "@angular/core";
import {Item} from "../../shared/item/item";
import {TextField} from "ui/text-field";
var socialShare = require("nativescript-social-share");
@Component ({
    selector: "List",
    templateUrl: "pages/list/list.html",
	styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})


export class ListPage implements OnInit {
  groceryList: Array<Item> = [];
  grocery:string = "";
  localItem:Item = new Item();
  @ViewChild("groceryTextField") groceryTextField:ElementRef;
  ngOnInit() {
    this.groceryList.push({ name: "Apples" });
    this.groceryList.push({ name: "Bananas" });
    this.groceryList.push({ name: "Carrots" });
  }

  add(){
    // Dismiss keyboard
    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput();
    if(this.grocery != "") {
      this.groceryList.push({name:this.grocery});
      this.grocery = "";
    } else {
      alert("Type grocery item in the textfield to add to the list");
    }
  }

  delete(item) {
    console.log("Delete method called with item"+ item.name);

    if(item != "") {
      var index = this.groceryList.indexOf(item);
      if(index>=0) {
        this.groceryList.splice(index,1);
      }
    }
  }

  share() {
    let list = [];
    for (let i = 0, size = this.groceryList.length; i < size ; i++) {
      this.localItem = this.groceryList[i];
      list.push(this.localItem.name);
    }

    let listString = list.join(", ").trim();
    console.log(listString);
    socialShare.shareText(listString);
  }
}
