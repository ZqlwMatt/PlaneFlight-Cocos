import { _decorator, Animation, Collider2D, Component, Contact2DType, EventTouch, Input, input, instantiate, IPhysics2DContact, Node, Prefab, Vec3 } from 'cc';
import { Reward, RewardType } from './Reward';
const { ccclass, property } = _decorator;

enum ShootType {
    None,
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

    @property
    lifeCount:number = 3;
    collider:Collider2D = null;
    @property(Animation)
    anim:Animation = null;
    @property(String)
    animHit:string = "";
    @property(String)
    animDown:string = "";

    @property
    twoShootTime:number = 5;
    twoShootTimer:number = 0;

    @property
    invincibleTime:number = 1;
    invincibleTimer:number = 0;
    isInvincible:boolean = false;

    // 注册事件
    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.collider = this.getComponent(Collider2D);
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
    protected onDestroy(): void {
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.collider = this.getComponent(Collider2D);
        if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onTouchMove(event:EventTouch) {
        if (this.lifeCount <= 0) return;

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

        if (this.isInvincible) {
            this.invincibleTimer += deltaTime;
            if (this.invincibleTimer > this.invincibleTime) {
                this.isInvincible = false;
                this.invincibleTimer = 0;
            }
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
        this.twoShootTimer += deltaTime;
        if (this.twoShootTimer >= this.twoShootTime) {
            this.transitionToOneShoot();
        }

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

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

        const reward = otherCollider.getComponent(Reward);
        if (reward) {
            switch(reward.rewardType) {
                case RewardType.TwoShoot:
                    console.log("Reward.TwoShoot");
                    this.transitionToTwoshoot();
                    break;
                case RewardType.Bomb:
                    console.log("Reward.Bomb");
                    this.lifeCount += 1;
                    break;
            }
        }
        else {
            this.onContactToEnemy();
        }
    }

    transitionToOneShoot() {
        this.shootType = ShootType.OneShoot;
    }
    transitionToTwoshoot() {
        this.shootType = ShootType.TwoShoot;
        this.twoShootTimer = 0;
    }

    onContactToEnemy() {
        if (this.isInvincible) return;
        
        this.isInvincible = true;
        this.lifeCount -= 1;
        if (this.lifeCount > 0) {
            this.anim.play(this.animHit);
        }
        else {
            this.anim.play(this.animDown);
        }

        if (this.lifeCount <= 0) {
            this.shootType = ShootType.None;
            if (this.collider) {
                this.collider.enabled = false;
            }
        }
    }
}

