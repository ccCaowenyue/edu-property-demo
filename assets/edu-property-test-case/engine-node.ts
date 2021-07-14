// @ts-ignore
import { eduProperty } from 'education'
// @ts-ignore
import EduElementAbstract from 'EduElementAbstract'

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends EduElementAbstract {
    @eduProperty()
    @property(cc.Node)
    testNode: cc.Node = null;
}
