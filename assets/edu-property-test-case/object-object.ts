declare var cc: any;
//@ts-ignore
import { eduProperty, i18n, EduDivider } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const { ccclass, property } = cc._decorator;

@ccclass('TestObjectObject2')
class TestObjectObject2 {
    @property()
    @eduProperty({ displayName: '数字属性[2]' })
    obj1 = 0;
}

@ccclass('TestObjectObject1')
class TestObjectObject1 {
    @property()
    @eduProperty({ displayName: '数字属性[1]' })
    obj1 = 0;

    @property({ type: TestObjectObject2 })
    @eduProperty({ displayName: '对象属性[1]' })
    obj2 = new TestObjectObject2();

    @property({ type: EduDivider })
    @eduProperty({ displayName: '分割线1' })
    divider1 = null;

    @property({ type: EduDivider })
    @eduProperty({ displayName: '分割线2' })
    divider2 = new EduDivider(); // 重点测试这个分割线是否能够显示
}

@ccclass
export default class Test extends EduElementAbstract {
    @property({ type: TestObjectObject1 })
    @eduProperty({ displayName: '对象嵌套对象' })
    myObject: TestObjectObject1 = new TestObjectObject1();
}
