declare var cc: any;
//@ts-ignore
import { eduProperty, i18n } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends EduElementAbstract {

    @property()
    @eduProperty({
        displayName: '布尔'
    })
    myBool = true;

    @property()
    @eduProperty({
        displayName: '数字'
    })
    myNumber = 996;

    @property()
    @eduProperty({displayName: '字符串'})
    myString = "icu";
}
