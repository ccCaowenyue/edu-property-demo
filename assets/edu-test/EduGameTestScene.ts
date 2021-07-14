// @ts-ignore
import { eduGame } from 'EduGame'
// @ts-ignore
import { GameConfig } from 'GameConfig'


export interface PageInfo {
    id: string;
    name: string;
    assets: string;
    next: string;
    lesson: LessonInfo;
}

export interface LessonInfo {
    id: string;
    name: string;
    pages: Array<PageInfo>;
}

declare interface GameCfg {
    data: Array<LessonInfo>;
}


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    gameNode: cc.Node = null;

    start() {
        console.log('EduGameTestScene')
        let node = eduGame.init()
        this.gameNode.addChild(node);

    }

    onRandomLoad() {
        let cfg: GameCfg = GameConfig;
        if (cfg.data.length > 0) {
            let success = false;
            do {
                let randLesson = this._random(cfg.data.length);
                let lesson: LessonInfo = cfg.data[randLesson];

                if (lesson.pages.length > 0) {
                    let randPage = this._random(lesson.pages.length)
                    let page: PageInfo = lesson.pages[randPage];
                    cc.log(`随机课程： ${lesson.id}-${lesson.name}`);
                    cc.log(`随机页面： ${page.id}-${page.name}`);
                    eduGame.goPageByID(page.id);
                    success = true
                } else {
                    cc.warn(`课程没有page，重新随机`)
                }
            } while (!success)
        } else {
            cc.error(`未发现任何课程！`);
        }
    }

    _random(max) {
        return Math.floor(Math.random() * max)
    }

}
