//@ts-ignore
import { eduProperty, i18n } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property} = cc._decorator;

const Enum1 = cc.Enum({
    Test1: 1,
    Test2: 2,
});

const Enum1Display = {
    Test1: '测试1',
    Test2: '测试2',
}


@ccclass
export default class EnumDisplay extends EduElementAbstract {
    @property({type: Enum1, displayName: '枚举'})
    @eduProperty({enumDisplay: Enum1Display, displayName: '枚举'})
    enumValue = Enum1.Test1;
}
