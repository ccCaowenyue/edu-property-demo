const {ccclass, property} = cc._decorator;
import { eduGame } from 'EduGame'

@ccclass
export default class ClosePreview extends cc.Component {
    protected onLoad() {
        eduGame.closePreviewWindow();
    }
}
