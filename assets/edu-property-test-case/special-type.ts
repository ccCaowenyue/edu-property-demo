declare var cc: any;
//@ts-ignore
import { eduProperty, i18n, EduDivider, EduLayerPicker } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends EduElementAbstract {
    @property({type: EduDivider})
    @eduProperty({displayName: '分隔符', displayOrder: -1})
    divider = null

    @property({type: EduLayerPicker})
    @eduProperty({displayName: '层级', displayOrder: -1})
    layer = null
}
