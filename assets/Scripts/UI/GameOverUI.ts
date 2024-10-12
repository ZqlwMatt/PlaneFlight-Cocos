import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameOverUI')
export class GameOverUI extends Component {

    @property(Label)
    bestScoreLabel:Label = null;
    @property(Label)
    currentScoreLabel:Label = null;

    showGameOverUI(bestScore:number, currentScore:number) {
        this.node.active = true;

        this.bestScoreLabel.string = bestScore.toString();
        this.currentScoreLabel.string = currentScore.toString();
    }
}

