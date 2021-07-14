declare var cc: any;
//@ts-ignore
import { eduProperty, i18n } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property, inspector} = cc._decorator;


@ccclass('TestObjectValueObject')
class TestObjectValueObject {
    @property()
    @eduProperty({displayName: '数字属性'})
    obj1 = 0;
}


@ccclass('TestObjectValue')
class TestObjectValue {
    @property()
    @eduProperty({displayName: '数字'})
    obj1 = 0;

    @property()
    @eduProperty({displayName: '字符串'})
    obj2 = 'obj2-string';


    @property()
    @eduProperty({displayName: '布尔'})
    obj3 = true;

    @property({type: TestObjectValueObject})
    @eduProperty({displayName: '对象'})
    obj4 = new TestObjectValueObject();
}

@ccclass
export default class Test extends EduElementAbstract {
    @property({type: TestObjectValue})
    @eduProperty({inspector: 'xxx'})
    myObject: TestObjectValue = new TestObjectValue();
}
