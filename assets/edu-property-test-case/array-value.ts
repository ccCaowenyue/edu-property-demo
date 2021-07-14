declare var cc: any;
//@ts-ignore
import { eduProperty, i18n } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends EduElementAbstract {
    @property({type: [cc.String]})
    @eduProperty({displayName: '字符串数组'})
    stringArray: Array<string> = ['a', 'b', 'c'];

    @property({type: [cc.Boolean]})
    @eduProperty({displayName: '布尔数组'})
    boolArray: Array<boolean> = [true, false];

    @property({type: [cc.Integer]})
    @eduProperty({displayName: '数字数组'})
    numberArray: Array<number> = [1, 2, 3];
}
