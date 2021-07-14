const {ccclass, property} = cc._decorator;
// @ts-ignore
import { eduProperty } from 'education';
// @ts-ignore
import EduElementAbstract from "EduElementAbstract";

@ccclass('EventBase')
class EventBase {}

@ccclass('Event1')
class Event1 extends EventBase {
    @property()
    num1 = 0;
}

@ccclass('Event2')
class Event2 extends EventBase {
    @property()
    num2 = 0;
}

@ccclass('TestEvent')
class TestEvent extends EventBase {
    @eduProperty()
    @property({type: EventBase, displayName: '事件属性event'})
    event = new Event2(); // 测试点：event.type=TestEvent，不应该是event.type=EventBase
}

@ccclass
export default class Extend extends EduElementAbstract {
    @eduProperty()
    @property({type: [EventBase]})
    arr = [new Event2(), new Event1()];

    @eduProperty()
    @property({type: [EventBase], displayName: '事件'})
    events = [];

    @property({displayName: '添加TestEvent'})
    get addEvent() {
        return true;
    }

    set addEvent(value) {
        if (this.events.length === 0) {
            let data = new TestEvent();
            this.events.push(data);
        } else if (this.events.length > 1) {
            this.events.splice(1, this.events.length - 1)
        }
        let testEvent = this.events[0];
        testEvent.event = new Event2();
    }
}

