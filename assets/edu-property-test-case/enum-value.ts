declare var cc: any;
//@ts-ignore
import { eduProperty, i18n } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property} = cc._decorator;


//@ts-ignore
let TestEnum = cc.Enum({
    A: 1,
    B: 2,
})


@ccclass('EnumObject')
class EnumObject {
    @property({type: TestEnum})
    @eduProperty({displayName: '枚举'})
    obj1 = TestEnum.A;

    @property(cc.String)
    @eduProperty({displayName: '你不应该看见我', visible: false})
    str1 = '看到我就出现问题啦！'

    @property(cc.String)
    @eduProperty({displayName: '必须得看到我', visible: true})
    str2 = '必须得看到我！'
}

@ccclass
export default class Test extends EduElementAbstract {
    @property({type: TestEnum})
    @eduProperty({displayName: '枚举', visible: true})
    myEnum = TestEnum.A;

    @property({type: EnumObject})
    @eduProperty({visible: true, displayName: '对象-枚举'})
    enumObject = new EnumObject();


    @property({type: [EnumObject]})
    @eduProperty({visible: true, displayName: '数组-枚举'})
    enumArray = [new EnumObject()];
}
