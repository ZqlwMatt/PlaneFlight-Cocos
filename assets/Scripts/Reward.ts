import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export enum RewardType {
    TwoShoot,
    Bomb
}

@ccclass('Reward')
export class Reward extends Component {

    @property
    rewardType:RewardType = RewardType.TwoShoot;

    @property
    speed:number = 100;

    start() {

    }

    update(deltaTime: number) {
        const p = this.node.position;
        this.node.setPosition(p.x, p.y - this.speed * deltaTime, p.z);
    }
}

