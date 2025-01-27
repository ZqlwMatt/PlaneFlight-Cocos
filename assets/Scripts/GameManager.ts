import { _decorator, AudioClip, Button, Component, director, Node, sys } from 'cc';
import { BombUI } from './UI/BombUI';
import { ScoreUI } from './UI/ScoreUI';
import { Player } from './Player';
import { GameOverUI } from './UI/GameOverUI';
import { AudioMgr } from './AudioMgr';
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

    @property
    private score:number = 0;

    @property(ScoreUI)
    scoreUI:ScoreUI = null;

    @property(Player)
    player:Player = null;

    @property(Node)
    pauseButtonNode:Node = null;
    @property(Node)
    resumeButtonNode:Node = null;

    @property(GameOverUI)
    gameOverUI:GameOverUI = null;

    @property(AudioClip)
    gameMusic:AudioClip = null;

    @property(AudioClip)
    buttonAudio:AudioClip = null;

    @property(AudioClip)
    gameOverAudio:AudioClip = null;

    protected onLoad(): void {
        GameManager.instance = this;
    }

    protected start(): void {
        AudioMgr.inst.play(this.gameMusic, 0.2);
    }

    // protected update(dt: number): void {
    //     console.log(dt);
    // }

    public addBomb() {
        this.bombNumber++;
        // 发起事件
        // this.node.emit("onBombChange");
        this.bombUI.updateUI(this.bombNumber);
    }

    public getBombNumber(): number {
        return this.bombNumber;
    }

    public addScore(s:number) {
        this.score += s;
        this.scoreUI.updateUI(this.score);
    }

    onPauseButtonClick() {
        // this.node.emit("onPauseGame");
        AudioMgr.inst.playOneShot(this.buttonAudio, 1.0);
        AudioMgr.inst.pause();
        director.pause();
        this.player.disableControl();
        this.pauseButtonNode.active = false;
        this.resumeButtonNode.active = true;
    }
    onResumeButtonClick() {
        // this.node.emit("onResumeGame");
        AudioMgr.inst.playOneShot(this.buttonAudio, 1.0);
        AudioMgr.inst.resume();
        director.resume();
        this.player.enableControl();
        this.pauseButtonNode.active = true;
        this.resumeButtonNode.active = false;
    }

    gameOver() {
        // hp = 0, show GameOverUI
        AudioMgr.inst.playOneShot(this.gameOverAudio);
        this.onPauseButtonClick();
        // localStorage
        let bestScore = parseInt(localStorage.getItem("bestScore") || "0");
        if (this.score > bestScore) {
            bestScore = this.score;
            localStorage.setItem("bestScore", bestScore.toString());
        }
        this.gameOverUI.showGameOverUI(bestScore, this.score);
    }

    onRestartButtonClick() {
        AudioMgr.inst.playOneShot(this.buttonAudio, 1.0);
        director.loadScene(director.getScene().name);
        this.onResumeButtonClick();
    }

    onQuitButtonClick() {
        // need to implement?
    }

    hasBomb(): boolean {
        return this.bombNumber > 0;
    }

    useBomb() {
        if (this.bombNumber > 0) {
            this.bombNumber--;
            this.bombUI.updateUI(this.bombNumber);
            // this.node.emit("onUseBomb");
        }
    }
}

