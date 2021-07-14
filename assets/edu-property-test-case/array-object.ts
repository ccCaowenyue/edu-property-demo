declare var cc: any;
//@ts-ignore
import { eduProperty, i18n } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property} = cc._decorator;

@ccclass('TestArrayObject')
class TestArrayObject {
    @property()
    @eduProperty({displayName: '对象属性'})
    obj1: string = '996'
}

@ccclass
export default class Test extends EduElementAbstract {
    @property({type: [TestArrayObject]})
    @eduProperty({displayName: '对象数组'})
    objArray: Array<TestArrayObject> = [new TestArrayObject(), new TestArrayObject()]
}
