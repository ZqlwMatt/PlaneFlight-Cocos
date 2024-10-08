import { _decorator, Component, instantiate, math, Node, Prefab } from 'cc';
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

    start() {
        this.schedule(this.enemy0Spawn, this.enemy0SpawnRate);
        this.schedule(this.enemy1Spawn, this.enemy1SpawnRate);
        this.schedule(this.enemy2Spawn, this.enemy2SpawnRate);
    }

    update(deltaTime: number) {
        
    }

    protected onDestroy(): void {
        this.unschedule(this.enemy0Spawn);
        this.unschedule(this.enemy1Spawn);
        this.unschedule(this.enemy2Spawn);
    }

    enemy0Spawn() {
        this.enemySpawn(this.enemy0Prefab, -215, 215, 440);
    }

    enemy1Spawn() {
        this.enemySpawn(this.enemy1Prefab, -200, 200, 480);
    }

    enemy2Spawn() {
        this.enemySpawn(this.enemy2Prefab, -155, 155, 560);
    }

    enemySpawn(enemyPrefab:Prefab, minX:number, maxX:number, y:number) {
        const enemy = instantiate(enemyPrefab);
        this.node.addChild(enemy);
        const randomX = math.randomRangeInt(minX, maxX);
        enemy.setPosition(randomX, y, 0);
    }
}

