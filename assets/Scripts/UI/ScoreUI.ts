import { _decorator, Component, Label, Node } from 'cc';
import { GameManager } from '../GameManager';
const { ccclass, property } = _decorator;

@ccclass('ScoreUI')
export class ScoreUI extends Component {

    @property(Label)
    numberLabel:Label = null;

    updateUI(count:number) {
        this.numberLabel.string = count.toString();
    }
}

