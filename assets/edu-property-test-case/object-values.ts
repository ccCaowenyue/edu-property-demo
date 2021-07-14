declare var cc: any;
//@ts-ignore
import { eduProperty, i18n } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property} = cc._decorator;

@ccclass('TestObjectValuesObject')
class TestObjectValuesObject {
    @property()
    @eduProperty({displayName: '数字属性'})
    obj1 = 0;
}


@ccclass('TestObjectValues')
class TestObjectValues {
    @property({type: [cc.Integer]})
    @eduProperty({displayName: '数字数组'})
    obj1 = [0];

    @property({type: [cc.String]})
    @eduProperty({displayName: '字符串数组'})
    obj2 = ['obj2-string'];

    @property({type: [cc.Boolean]})
    @eduProperty({displayName: '布尔数组'})
    obj3 = [false];

    @property({type: [TestObjectValuesObject]})
    @eduProperty({displayName: '对象数组'})
    obj4 = [new TestObjectValuesObject()];
}

@ccclass
export default class Test extends EduElementAbstract {
    @property({type: TestObjectValues})
    @eduProperty({displayName: '对象'})
    myObject: TestObjectValues = new TestObjectValues();
}
