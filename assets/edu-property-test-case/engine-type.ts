declare var cc: any;
//@ts-ignore
import { eduProperty, i18n } from "education";
//@ts-ignore
import EduElementAbstract from "EduElementAbstract";
//@ts-ignore
const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends EduElementAbstract {
    @property(cc.Color)
    @eduProperty()
    testColor = cc.Color.BLACK;

    @property({type: cc.Vec3})
    @eduProperty({
        displayName: '位置',
        displayOrder: 1,
    })
    get position(): cc.Vec3 {
        // @ts-ignore
        let p: cc.Vec3 = this.node.getPosition();
        if (this.node.is3DNode) {
            return cc.v3(p.x, p.y, p.z);
        } else {
            return cc.v3(p.x, p.y, 0);
        }
    }

    set position(value) {
        if (this.node.is3DNode) {
            this.node.setPosition(value.x, value.y, value.z)
        } else {
            this.node.setPosition(value.x, value.y, 0);
        }
    }

    @property({type: cc.Size})
    @eduProperty({displayName: '尺寸'})
    get size(): cc.Size {
        return this.node.getContentSize();
    }

    set size(value) {
        this.node.setContentSize(value);
    }

    @property(cc.SpriteFrame)
    @eduProperty({displayName: '图片'})
    get image() {
        let sprite = this.node.getComponent(cc.Sprite)
        if (!sprite) {
            sprite = this.node.addComponent(cc.Sprite)
        }
        return sprite.spriteFrame;
    }

    set image(value) {
        let sprite = this.node.getComponent(cc.Sprite)
        if (sprite) {
            sprite.spriteFrame = value;
        }
    }

    // todo font
}
