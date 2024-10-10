import { _decorator, Animation, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, PhysicsSystem2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export class Enemy extends Component {

    @property
    speed:number = 300;

    @property(Animation)
    anim:Animation = null;

    @property
    hp:number = 1;

    @property(String)
    animHit:string = "";
    @property(String)
    animDown:string = "";

    collider:Collider2D = null;

    start() {
        // this.anim.play();
        this.collider = this.getComponent(Collider2D);
        if (this.collider) {
            // console.log("collider");
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        // 注册全局碰撞回调函数
        // if (PhysicsSystem2D.instance) {
        //     PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        // }
    }

    protected onDestroy(): void {
        this.collider = this.getComponent(Collider2D);
        if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        // 取消全局碰撞回调函数
        // if (PhysicsSystem2D.instance) {
        //     PhysicsSystem2D.instance.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        //     PhysicsSystem2D.instance.off(Contact2DType.END_CONTACT, this.onEndContact, this);
        // }
    }

    update(deltaTime: number) {
        if (this.hp > 0) {
            const p = this.node.position;
            this.node.setPosition(p.x, p.y - this.speed * deltaTime, p.z);
        }

        if (this.node.position.y < -580) {
            this.node.destroy();
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        otherCollider.enabled = false;

        this.hp -= 1;

        if (this.hp > 0) {
            this.anim.play(this.animHit);
        }
        else {
            this.anim.play(this.animDown);
        }

        if (this.hp <= 0) {
            if (this.collider) {
                this.collider.enabled = false;
            }
            this.scheduleOnce(function() {
                this.node.destroy();
            }, 1);
        }
    }
}

