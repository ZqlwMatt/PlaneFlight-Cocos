import { _decorator, Component, EventTouch, input, Input, instantiate, math, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyManager')
export class EnemyManager extends Component {

    @property
    enemy0SpawnRate:number = 1;
    @property(Prefab)
    enemy0Prefab:Prefab = null;

    @property
    enemy1SpawnRate:number = 3;
    @property(Prefab)
    enemy1Prefab:Prefab = null;

    @property
    enemy2SpawnRate:number = 10;
    @property(Prefab)
    enemy2Prefab:Prefab = null;

    @property
    rewardSpawnRate:number = 15;
    @property(Prefab)
    reward1Prefab:Prefab = null;
    @property(Prefab)
    reward2Prefab:Prefab = null;

    // double click to clear enemies.
    doubleClickInterval:number = 0.2;
    lastClickTime:number = 0;

    protected onLoad(): void {
        this.lastClickTime = 0;
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    start() {
        this.schedule(this.enemy0Spawn, this.enemy0SpawnRate);
        this.schedule(this.enemy1Spawn, this.enemy1SpawnRate);
        this.schedule(this.enemy2Spawn, this.enemy2SpawnRate);
        this.schedule(this.rewardSpawn, this.rewardSpawnRate);
    }

    update(deltaTime: number) {
        
    }

    protected onDestroy(): void {
        this.unschedule(this.enemy0Spawn);
        this.unschedule(this.enemy1Spawn);
        this.unschedule(this.enemy2Spawn);
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    rewardSpawn() {
        const random = math.randomRangeInt(0, 2);
        let prefab = null;
        if (random === 0) {
            prefab = this.reward1Prefab;
        }
        else {
            prefab = this.reward2Prefab;
        }

        this.objectSpawn(prefab, -207, 207, 474);
    }

    enemy0Spawn() {
        this.objectSpawn(this.enemy0Prefab, -215, 215, 440);
    }

    enemy1Spawn() {
        this.objectSpawn(this.enemy1Prefab, -200, 200, 480);
    }

    enemy2Spawn() {
        this.objectSpawn(this.enemy2Prefab, -155, 155, 560);
    }

    objectSpawn(enemyPrefab:Prefab, minX:number, maxX:number, y:number) {
        const enemy = instantiate(enemyPrefab);
        this.node.addChild(enemy);
        const randomX = math.randomRangeInt(minX, maxX);
        enemy.setPosition(randomX, y, 0);
    }

    onTouchEnd(event: EventTouch) {
        const now = Date.now();
        if (now - this.lastClickTime < this.doubleClickInterval * 1000) {
            // this.clearEnemies();
            console.log("double click");
        }
        this.lastClickTime = now;
    }


}

