import { _decorator, Component, EventTouch, Input, input, instantiate, Node, Prefab, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

enum ShootType {
    OneShoot,
    TwoShoot
};

@ccclass('Player')
export class Player extends Component {
    
    @property
    shootRate:number = 0.3;

    @property(Node)
    bulletParent:Node = null;

    // oneShoot assets
    @property(Prefab)
    bullet1Prefab:Prefab = null;
    @property(Node)
    position1:Node = null;
    // twoShoot assets
    @property(Prefab)
    bullet2Prefab:Prefab = null;
    @property(Node)
    position2:Node = null;
    @property(Node)
    position3:Node = null;

    @property
    shootType:ShootType = ShootType.OneShoot;

    shootTimer:number = 0.0;

    // 注册事件
    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }
    protected onDestroy(): void {
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchMove(event:EventTouch) {
        const p = this.node.position;
        
        let targetPosition = new Vec3(p.x + event.getDeltaX(), p.y + event.getDeltaY(), p.z);

        // x 轴的移动范围限制
        if (targetPosition.x < -230) {
            targetPosition.x = -230;
        }
        if (targetPosition.x > 230) {
            targetPosition.x = 230;
        }
        // y 轴的移动范围限制
        if (targetPosition.y > 380) {
            targetPosition.y = 380;
        }
        if (targetPosition.y < -380) {
            targetPosition.y = -380;
        }
        
        this.node.setPosition(targetPosition);
    }

    protected update(deltaTime: number) {
        switch(this.shootType) {
            case ShootType.OneShoot:
                this.oneShoot(deltaTime);
                break;
            case ShootType.TwoShoot:
                this.twoShoot(deltaTime);
                break;
        }
    }

    oneShoot(deltaTime: number) {
        this.shootTimer += deltaTime;
        if (this.shootTimer >= this.shootRate) {
            this.shootTimer = 0;
            const bullet1 = instantiate(this.bullet1Prefab);
            // 把子弹放到场景当中
            this.bulletParent.addChild(bullet1);
            bullet1.setWorldPosition(this.position1.worldPosition);
        }
    }

    twoShoot(deltaTime: number) {
        this.shootTimer += deltaTime;
        if (this.shootTimer >= this.shootRate) {
            this.shootTimer = 0;
            const bullet1 = instantiate(this.bullet2Prefab);
            const bullet2 = instantiate(this.bullet2Prefab);
            // 把子弹放到场景当中
            this.bulletParent.addChild(bullet1);
            this.bulletParent.addChild(bullet2);
            bullet1.setWorldPosition(this.position2.worldPosition);
            bullet2.setWorldPosition(this.position3.worldPosition);
        }
    }
}

