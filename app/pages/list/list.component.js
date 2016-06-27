"use strict";
var core_1 = require("@angular/core");
var item_1 = require("../../shared/item/item");
var socialShare = require("nativescript-social-share");
var ListPage = (function () {
    function ListPage() {
        this.groceryList = [];
        this.grocery = "";
        this.localItem = new item_1.Item();
    }
    ListPage.prototype.ngOnInit = function () {
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Carrots" });
    };
    ListPage.prototype.add = function () {
        // Dismiss keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        if (this.grocery != "") {
            this.groceryList.push({ name: this.grocery });
            this.grocery = "";
        }
        else {
            alert("Type grocery item in the textfield to add to the list");
        }
    };
    ListPage.prototype.delete = function (item) {
        console.log("Delete method called with item" + item.name);
        if (item != "") {
            var index = this.groceryList.indexOf(item);
            if (index >= 0) {
                this.groceryList.splice(index, 1);
            }
        }
    };
    ListPage.prototype.share = function () {
        var list = [];
        for (var i = 0, size = this.groceryList.length; i < size; i++) {
            this.localItem = this.groceryList[i];
            list.push(this.localItem.name);
        }
        var listString = list.join(", ").trim();
        console.log(listString);
        socialShare.shareText(listString);
    };
    __decorate([
        core_1.ViewChild("groceryTextField"), 
        __metadata('design:type', core_1.ElementRef)
    ], ListPage.prototype, "groceryTextField", void 0);
    ListPage = __decorate([
        core_1.Component({
            selector: "List",
            templateUrl: "pages/list/list.html",
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=list.component.js.map