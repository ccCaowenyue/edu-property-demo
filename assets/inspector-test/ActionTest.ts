// @ts-ignore
import { Action, eduAction } from 'EventDecorator';
// @ts-ignore
import { eduProperty } from 'education';

const {ccclass, property,inspector} = cc._decorator;

@ccclass('ActionTestClass')
// @inspector('packages://edu-editor/a.js')
class ActionTestClass {
    @property()
    num = 1;
}


@eduAction({name: '自定义面板测试',visible:false})
@ccclass('ActionTest')
export default class ActionTest extends Action {
    @property({type: ActionTestClass,})
    @eduProperty({})
    target = new ActionTestClass();
}
