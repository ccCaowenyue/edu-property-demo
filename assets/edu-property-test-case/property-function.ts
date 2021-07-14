//@ts-ignore
import { eduProperty, i18n } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property} = cc._decorator;

function tt(para: any) {
    debugger
    if (para.visible) {
        para.visible()
    }
    return function (proto, varName) {
        debugger
        Object.defineProperty(proto, 'test', {
            get: function () {

            }
        })
    }
}

@ccclass
export default class NewClass extends EduElementAbstract {
    @property({

    })
    @eduProperty({
        visible: () => {
            return false;
        }
    })
    functionPara = 100;

    @property()
    get a() {
        return 1;
    }

    set a(v) {
        console.log(this)
    }

    // update (dt) {}
}
