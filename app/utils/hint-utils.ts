import {Color} from "color";
import {TextField} from "ui/text-field";

declare var NSAttributedString:any;
declare var NSDictionary:any;
declare var NSForegroundColorAttributeName: any;

export function setHintColor(args:{view:TextField, color:Color}){
 if (args.view.android) {
    args.view.android.setHintTextColor(args.color.android);
  } else {
    let dictionary = new NSDictionary(
      [args.color.ios],
      [NSForegroundColorAttributeName]
    );
    args.view.ios.attributedPlaceHolder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint,dictionary);
  }

}
