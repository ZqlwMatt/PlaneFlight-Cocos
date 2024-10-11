import { _decorator, Component, Node } from 'cc';
import { BombUI } from './UI/BombUI';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    private static instance:GameManager;

    public static getInstance(): GameManager {
        return this.instance;
    }

    @property
    private bombNumber:number = 0;
    @property(BombUI)
    bombUI:BombUI = null;

    protected onLoad(): void {
        GameManager.instance = this;
    }

    public addBomb() {
        this.bombNumber++;
        // 发起事件
        // this.node.emit("onBombChange");
        this.bombUI.updateUI(this.bombNumber);
    }

    public getBombNumber(): number {
        return this.bombNumber;
    }
}

