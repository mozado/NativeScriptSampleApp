"use strict";
function setHintColor(args) {
    if (args.view.android) {
        args.view.android.setHintTextColor(args.color.android);
    }
    else {
        var dictionary = new NSDictionary([args.color.ios], [NSForegroundColorAttributeName]);
        args.view.ios.attributedPlaceHolder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint, dictionary);
    }
}
exports.setHintColor = setHintColor;
//# sourceMappingURL=hint-utils.js.map