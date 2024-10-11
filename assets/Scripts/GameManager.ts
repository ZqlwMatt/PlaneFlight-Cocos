import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    private static instance:GameManager;

    public static getInstance(): GameManager {
        return this.instance;
    }

    @property
    bombNumber:number = 0;

    start() {
        GameManager.instance = this;
    }

    public addBomb() {
        this.bombNumber += 1;
    }
}

