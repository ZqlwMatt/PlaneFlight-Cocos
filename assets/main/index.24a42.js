System.register("chunks:///_virtual/AudioMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var i,u,e,t,n,c,r;return{setters:[function(o){i=o.createClass},function(o){u=o.cclegacy,e=o.AudioClip,t=o.resources,n=o.Node,c=o.director,r=o.AudioSource}],execute:function(){u._RF.push({},"b5243fJ+ZBB+ocGVKcjuhVl","AudioMgr",void 0),o("AudioMgr",function(){function o(){this._audioSource=void 0;var o=new n;o.name="__audioMgr__",c.getScene().addChild(o),c.addPersistRootNode(o),this._audioSource=o.addComponent(r)}var u=o.prototype;return u.playOneShot=function(o,i){var u=this;void 0===i&&(i=1),o instanceof e?this._audioSource.playOneShot(o,i):t.load(o,(function(o,e){o?console.log(o):u._audioSource.playOneShot(e,i)}))},u.play=function(o,i){var u=this;void 0===i&&(i=1),o instanceof e?(this._audioSource.stop(),this._audioSource.loop=!0,this._audioSource.clip=o,this._audioSource.play(),this.audioSource.volume=i):t.load(o,(function(o,e){o?console.log(o):(u._audioSource.stop(),u._audioSource.clip=e,u._audioSource.play(),u.audioSource.volume=i)}))},u.stop=function(){this._audioSource.stop()},u.pause=function(){this._audioSource.pause()},u.resume=function(){this._audioSource.play()},i(o,[{key:"audioSource",get:function(){return this._audioSource}}],[{key:"inst",get:function(){return null==this._inst&&(this._inst=new o),this._inst}}]),o}())._inst=void 0,u._RF.pop()}}}));

System.register("chunks:///_virtual/Bg.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,n,o,r,s,a,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,a=t.Node,p=t.Component}],execute:function(){var u,c,l,b,g,h,y,f;r._RF.push({},"d26cbXeeWtG+4c+zEbuyMvI","Bg",void 0);var d=s.ccclass,v=s.property;t("Bg",(u=d("Bg"),c=v(a),l=v(a),u((h=i((g=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return i=t.call.apply(t,[this].concat(r))||this,n(i,"bg01",h,o(i)),n(i,"bg02",y,o(i)),n(i,"speed",f,o(i)),i}e(i,t);var r=i.prototype;return r.start=function(){},r.update=function(t){var i=this.bg01.position;this.bg01.setPosition(i.x,i.y-this.speed*t,i.z);var e=this.bg02.position;this.bg02.setPosition(e.x,e.y-this.speed*t,e.z);var n=this.bg01.position,o=this.bg02.position;this.bg01.position.y<=-852&&this.bg01.setPosition(o.x,o.y+852,o.z),this.bg02.position.y<=-852&&this.bg02.setPosition(n.x,n.y+852,n.z)},i}(p)).prototype,"bg01",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=i(g.prototype,"bg02",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=i(g.prototype,"speed",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),b=g))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/BombUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,o,i,a,u,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,u=e.Label,c=e.Component}],execute:function(){var l,s,p,b,f;i._RF.push({},"83d1bOqDYFMaZegF2Xo+qBK","BombUI",void 0);var m=a.ccclass,y=a.property;e("BombUI",(l=m("BombUI"),s=y(u),l((f=t((b=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,n(t,"numberLabel",f,o(t)),t}r(t,e);var i=t.prototype;return i.start=function(){},i.update=function(e){},i.updateUI=function(e){this.numberLabel.string=e.toString()},t}(c)).prototype,"numberLabel",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=b))||p));i._RF.pop()}}}));

System.register("chunks:///_virtual/Bullet.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,n,o,s,a;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.Component}],execute:function(){var l,c,u;o._RF.push({},"6ba29+jSgBO+rQF/L4MsX0r","Bullet",void 0);var p=s.ccclass,d=s.property;e("Bullet",p("Bullet")((u=t((c=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,i(t,"speed",u,n(t)),t}r(t,e);var o=t.prototype;return o.start=function(){},o.update=function(e){var t=this.node.position;this.node.setPosition(t.x,t.y+this.speed*e,t.z),t.y>440&&this.node.destroy()},t}(a)).prototype,"speed",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 500}}),l=c))||l);o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Enemy.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Bullet.ts","./GameManager.ts","./EnemyManager.ts","./AudioMgr.ts"],(function(e){var i,t,n,o,r,a,l,s,c,u,h,p,d,m,f,y;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.Animation,s=e.AudioClip,c=e.Collider2D,u=e.Contact2DType,h=e.Sprite,p=e.Component},function(e){d=e.Bullet},function(e){m=e.GameManager},function(e){f=e.EnemyManager},function(e){y=e.AudioMgr}],execute:function(){var g,b,w,C,D,v,z,A,E,B,M,T;r._RF.push({},"6a6f9o33zNC+ZhhMuyAT76l","Enemy",void 0);var N=a.ccclass,_=a.property;e("Enemy",(g=N("Enemy"),b=_(l),w=_(s),g((v=i((D=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return i=e.call.apply(e,[this].concat(r))||this,n(i,"speed",v,o(i)),n(i,"anim",z,o(i)),n(i,"hp",A,o(i)),n(i,"score",E,o(i)),n(i,"animHit",B,o(i)),n(i,"animDown",M,o(i)),n(i,"enemyDownAudio",T,o(i)),i.collider=null,i.haveDead=!1,i}t(i,e);var r=i.prototype;return r.start=function(){this.collider=this.getComponent(c),this.collider&&this.collider.on(u.BEGIN_CONTACT,this.onBeginContact,this)},r.onDestroy=function(){this.collider=this.getComponent(c),this.collider&&this.collider.off(u.BEGIN_CONTACT,this.onBeginContact,this),f.getInstance().removeEnemy(this.node)},r.update=function(e){if(this.hp>0){var i=this.node.position;this.node.setPosition(i.x,i.y-this.speed*e,i.z)}this.node.position.y<-580&&this.node.destroy()},r.onBeginContact=function(e,i,t){i.getComponent(d)&&(i.enabled=!1,i.getComponent(h).enabled=!1),this.hp-=1,this.hp>0?this.anim.play(this.animHit):this.anim.play(this.animDown),this.hp<=0&&this.dead()},r.dead=function(){this.haveDead||(y.inst.playOneShot(this.enemyDownAudio,1),m.getInstance().addScore(this.score),this.collider&&(this.collider.enabled=!1),this.scheduleOnce((function(){this.node.destroy()}),1),this.haveDead=!0)},r.killNow=function(){this.hp<=0||(this.hp=0,this.anim.play(this.animDown),this.dead())},i}(p)).prototype,"speed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 300}}),z=i(D.prototype,"anim",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=i(D.prototype,"hp",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),E=i(D.prototype,"score",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),B=i(D.prototype,"animHit",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),M=i(D.prototype,"animDown",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),T=i(D.prototype,"enemyDownAudio",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=D))||C));r._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./Enemy.ts","./AudioMgr.ts"],(function(e){var n,t,r,i,a,o,u,l,s,c,p,y,m,h,f,b,w,d;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.createForOfIteratorHelperLoose},function(e){o=e.cclegacy,u=e._decorator,l=e.Prefab,s=e.Node,c=e.AudioClip,p=e.input,y=e.Input,m=e.math,h=e.instantiate,f=e.Component},function(e){b=e.GameManager},function(e){w=e.Enemy},function(e){d=e.AudioMgr}],execute:function(){var g,S,v,P,R,A,C,z,E,T,k,I,D,M,j,B,_,H,N,O,L,x;o._RF.push({},"036c7uNHzVJZoxb2ZC84IVK","EnemyManager",void 0);var F=u.ccclass,G=u.property;e("EnemyManager",(g=F("EnemyManager"),S=G(l),v=G(l),P=G(l),R=G(l),A=G(l),C=G(s),z=G(c),g(((x=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return n=e.call.apply(e,[this].concat(a))||this,r(n,"enemy0SpawnRate",k,i(n)),r(n,"enemy0Prefab",I,i(n)),r(n,"enemy1SpawnRate",D,i(n)),r(n,"enemy1Prefab",M,i(n)),r(n,"enemy2SpawnRate",j,i(n)),r(n,"enemy2Prefab",B,i(n)),r(n,"rewardSpawnRate",_,i(n)),r(n,"reward1Prefab",H,i(n)),r(n,"reward2Prefab",N,i(n)),r(n,"enemyArray",O,i(n)),n.doubleClickInterval=.2,n.lastClickTime=0,r(n,"useBombAudio",L,i(n)),n}t(n,e),n.getInstance=function(){return this.instance};var o=n.prototype;return o.onLoad=function(){this.lastClickTime=0,p.on(y.EventType.TOUCH_END,this.onTouchEnd,this)},o.start=function(){n.instance=this,this.schedule(this.enemy0Spawn,this.enemy0SpawnRate),this.schedule(this.enemy1Spawn,this.enemy1SpawnRate),this.schedule(this.enemy2Spawn,this.enemy2SpawnRate),this.schedule(this.rewardSpawn,this.rewardSpawnRate)},o.update=function(e){},o.onDestroy=function(){this.unschedule(this.enemy0Spawn),this.unschedule(this.enemy1Spawn),this.unschedule(this.enemy2Spawn),p.off(y.EventType.TOUCH_END,this.onTouchEnd,this)},o.rewardSpawn=function(){var e=null;e=0===m.randomRangeInt(0,2)?this.reward1Prefab:this.reward2Prefab,this.objectSpawn(e,-207,207,474)},o.enemy0Spawn=function(){var e=this.objectSpawn(this.enemy0Prefab,-215,215,440);this.enemyArray.push(e)},o.enemy1Spawn=function(){var e=this.objectSpawn(this.enemy1Prefab,-200,200,480);this.enemyArray.push(e)},o.enemy2Spawn=function(){var e=this.objectSpawn(this.enemy2Prefab,-155,155,560);this.enemyArray.push(e)},o.objectSpawn=function(e,n,t,r){var i=h(e);this.node.addChild(i);var a=m.randomRangeInt(n,t);return i.setPosition(a,r,0),i},o.onTouchEnd=function(e){var n=Date.now();n-this.lastClickTime<1e3*this.doubleClickInterval&&(console.log("double click"),this.onDoubleClick()),this.lastClickTime=n},o.onDoubleClick=function(){if(!1!==b.getInstance().hasBomb()){b.getInstance().useBomb(),d.inst.playOneShot(this.useBombAudio);for(var e,n=a(this.enemyArray);!(e=n()).done;){e.value.getComponent(w).killNow()}}},o.removeEnemy=function(e){var n=this.enemyArray.indexOf(e);-1!==n&&this.enemyArray.splice(n,1)},n}(f)).instance=null,k=n((T=x).prototype,"enemy0SpawnRate",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),I=n(T.prototype,"enemy0Prefab",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(T.prototype,"enemy1SpawnRate",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),M=n(T.prototype,"enemy1Prefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=n(T.prototype,"enemy2SpawnRate",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),B=n(T.prototype,"enemy2Prefab",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=n(T.prototype,"rewardSpawnRate",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 15}}),H=n(T.prototype,"reward1Prefab",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=n(T.prototype,"reward2Prefab",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=n(T.prototype,"enemyArray",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),L=n(T.prototype,"useBombAudio",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=T))||E));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BombUI.ts","./ScoreUI.ts","./Player.ts","./GameOverUI.ts","./AudioMgr.ts"],(function(e){var t,n,i,o,r,u,a,l,s,c,b,m,p,f,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,u=e._decorator,a=e.Node,l=e.AudioClip,s=e.director,c=e.Component},function(e){b=e.BombUI},function(e){m=e.ScoreUI},function(e){p=e.Player},function(e){f=e.GameOverUI},function(e){h=e.AudioMgr}],execute:function(){var d,g,y,I,v,B,N,U,S,O,w,z,A,C,M,k,G,P,R,_,D,L,T,F;r._RF.push({},"c632brnZXBNep2T8d63qTol","GameManager",void 0);var j=u.ccclass,q=u.property;e("GameManager",(d=j("GameManager"),g=q(b),y=q(m),I=q(p),v=q(a),B=q(a),N=q(f),U=q(l),S=q(l),O=q(l),d(((F=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return t=e.call.apply(e,[this].concat(r))||this,i(t,"bombNumber",A,o(t)),i(t,"bombUI",C,o(t)),i(t,"score",M,o(t)),i(t,"scoreUI",k,o(t)),i(t,"player",G,o(t)),i(t,"pauseButtonNode",P,o(t)),i(t,"resumeButtonNode",R,o(t)),i(t,"gameOverUI",_,o(t)),i(t,"gameMusic",D,o(t)),i(t,"buttonAudio",L,o(t)),i(t,"gameOverAudio",T,o(t)),t}n(t,e),t.getInstance=function(){return this.instance};var r=t.prototype;return r.onLoad=function(){t.instance=this},r.start=function(){h.inst.play(this.gameMusic,.2)},r.addBomb=function(){this.bombNumber++,this.bombUI.updateUI(this.bombNumber)},r.getBombNumber=function(){return this.bombNumber},r.addScore=function(e){this.score+=e,this.scoreUI.updateUI(this.score)},r.onPauseButtonClick=function(){h.inst.playOneShot(this.buttonAudio,1),h.inst.pause(),s.pause(),this.player.disableControl(),this.pauseButtonNode.active=!1,this.resumeButtonNode.active=!0},r.onResumeButtonClick=function(){h.inst.playOneShot(this.buttonAudio,1),h.inst.resume(),s.resume(),this.player.enableControl(),this.pauseButtonNode.active=!0,this.resumeButtonNode.active=!1},r.gameOver=function(){h.inst.playOneShot(this.gameOverAudio),this.onPauseButtonClick();var e=parseInt(localStorage.getItem("bestScore")||"0");this.score>e&&(e=this.score,localStorage.setItem("bestScore",e.toString())),this.gameOverUI.showGameOverUI(e,this.score)},r.onRestartButtonClick=function(){h.inst.playOneShot(this.buttonAudio,1),s.loadScene(s.getScene().name),this.onResumeButtonClick()},r.onQuitButtonClick=function(){},r.hasBomb=function(){return this.bombNumber>0},r.useBomb=function(){this.bombNumber>0&&(this.bombNumber--,this.bombUI.updateUI(this.bombNumber))},t}(c)).instance=void 0,A=t((z=F).prototype,"bombNumber",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),C=t(z.prototype,"bombUI",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(z.prototype,"score",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),k=t(z.prototype,"scoreUI",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=t(z.prototype,"player",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(z.prototype,"pauseButtonNode",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(z.prototype,"resumeButtonNode",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(z.prototype,"gameOverUI",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(z.prototype,"gameMusic",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(z.prototype,"buttonAudio",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(z.prototype,"gameOverAudio",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=z))||w));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameOverUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,n,i,o,a,c,l;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.Label,l=e.Component}],execute:function(){var u,s,p,b,f,h,v;o._RF.push({},"0a55bRunYhB0rDS9qoHu8AC","GameOverUI",void 0);var g=a.ccclass,y=a.property;e("GameOverUI",(u=g("GameOverUI"),s=y(c),p=y(c),u((h=r((f=function(e){function r(){for(var r,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return r=e.call.apply(e,[this].concat(o))||this,n(r,"bestScoreLabel",h,i(r)),n(r,"currentScoreLabel",v,i(r)),r}return t(r,e),r.prototype.showGameOverUI=function(e,r){this.node.active=!0,this.bestScoreLabel.string=e.toString(),this.currentScoreLabel.string=r.toString()},r}(l)).prototype,"bestScoreLabel",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=r(f.prototype,"currentScoreLabel",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=f))||b));o._RF.pop()}}}));

System.register("chunks:///_virtual/LifeCountUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,u,a,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,u=e._decorator,a=e.Label,c=e.Component}],execute:function(){var l,s,p,f,b;o._RF.push({},"2bf0f7S/zRN4YIyv092zti0","LifeCountUI",void 0);var y=u.ccclass,L=u.property;e("LifeCountUI",(l=y("LifeCountUI"),s=L(a),l((b=t((f=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o))||this,r(t,"numberLabel",b,i(t)),t}return n(t,e),t.prototype.updateUI=function(e){this.numberLabel.string=e.toString()},t}(c)).prototype,"numberLabel",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=f))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./AudioMgr.ts","./Bg.ts","./Bullet.ts","./Enemy.ts","./EnemyManager.ts","./GameManager.ts","./Player.ts","./Reward.ts","./StartUI.ts","./BombUI.ts","./GameOverUI.ts","./LifeCountUI.ts","./ScoreUI.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Player.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Reward.ts","./GameManager.ts","./LifeCountUI.ts","./AudioMgr.ts"],(function(t){var i,o,e,n,r,l,a,u,s,h,c,b,f,p,d,m,T,w,y,g,C,v,S;return{setters:[function(t){i=t.applyDecoratedDescriptor,o=t.inheritsLoose,e=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,l=t._decorator,a=t.Node,u=t.Prefab,s=t.Animation,h=t.AudioClip,c=t.input,b=t.Input,f=t.Collider2D,p=t.Contact2DType,d=t.Vec3,m=t.instantiate,T=t.Sprite,w=t.Component},function(t){y=t.Reward,g=t.RewardType},function(t){C=t.GameManager},function(t){v=t.LifeCountUI},function(t){S=t.AudioMgr}],execute:function(){var P,z,I,O,A,R,D,B,M,U,E,L,N,_,x,H,G,k,V,W,F,X,j,Y,q,J,K,Q,Z,$,tt,it;r._RF.push({},"05f5bL0MbhPvraC2raIgXpb","Player",void 0);var ot=l.ccclass,et=l.property,nt=function(t){return t[t.None=0]="None",t[t.OneShoot=1]="OneShoot",t[t.TwoShoot=2]="TwoShoot",t}(nt||{});t("Player",(P=ot("Player"),z=et(a),I=et(u),O=et(a),A=et(u),R=et(a),D=et(a),B=et(s),M=et(v),U=et(h),E=et(h),L=et(h),P((x=i((_=function(t){function i(){for(var i,o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return i=t.call.apply(t,[this].concat(r))||this,e(i,"shootRate",x,n(i)),e(i,"bulletParent",H,n(i)),e(i,"bullet1Prefab",G,n(i)),e(i,"position1",k,n(i)),e(i,"bullet2Prefab",V,n(i)),e(i,"position2",W,n(i)),e(i,"position3",F,n(i)),e(i,"shootType",X,n(i)),i.shootTimer=0,e(i,"lifeCount",j,n(i)),i.collider=null,e(i,"anim",Y,n(i)),e(i,"animHit",q,n(i)),e(i,"animDown",J,n(i)),e(i,"twoShootTime",K,n(i)),i.twoShootTimer=0,e(i,"lifeCountUI",Q,n(i)),e(i,"bulletAudio",Z,n(i)),e(i,"getBombAudio",$,n(i)),e(i,"getDoubleAudio",tt,n(i)),e(i,"invincibleTime",it,n(i)),i.invincibleTimer=0,i.isInvincible=!1,i.canControl=!0,i.lastReward=null,i}o(i,t);var r=i.prototype;return r.onLoad=function(){c.on(b.EventType.TOUCH_MOVE,this.onTouchMove,this),this.collider=this.getComponent(f),this.collider&&this.collider.on(p.BEGIN_CONTACT,this.onBeginContact,this)},r.start=function(){this.lifeCountUI.updateUI(this.lifeCount)},r.onDestroy=function(){c.off(b.EventType.TOUCH_MOVE,this.onTouchMove,this),this.collider=this.getComponent(f),this.collider&&this.collider.off(p.BEGIN_CONTACT,this.onBeginContact,this)},r.onTouchMove=function(t){if(this.canControl&&!(this.lifeCount<=0)){var i=this.node.position,o=new d(i.x+t.getDeltaX(),i.y+t.getDeltaY(),i.z);o.x<-230&&(o.x=-230),o.x>230&&(o.x=230),o.y>380&&(o.y=380),o.y<-380&&(o.y=-380),this.node.setPosition(o)}},r.update=function(t){switch(this.shootType){case nt.OneShoot:this.oneShoot(t);break;case nt.TwoShoot:this.twoShoot(t)}this.isInvincible&&(this.invincibleTimer+=t,this.invincibleTimer>this.invincibleTime&&(this.isInvincible=!1,this.invincibleTimer=0))},r.oneShoot=function(t){if(this.shootTimer+=t,this.shootTimer>=this.shootRate){S.inst.playOneShot(this.bulletAudio,.1),this.shootTimer=0;var i=m(this.bullet1Prefab);this.bulletParent.addChild(i),i.setWorldPosition(this.position1.worldPosition)}},r.twoShoot=function(t){if(this.twoShootTimer+=t,this.twoShootTimer>=this.twoShootTime&&this.transitionToOneShoot(),this.shootTimer+=t,this.shootTimer>=this.shootRate){S.inst.playOneShot(this.bulletAudio,.1),this.shootTimer=0;var i=m(this.bullet2Prefab),o=m(this.bullet2Prefab);this.bulletParent.addChild(i),this.bulletParent.addChild(o),i.setWorldPosition(this.position2.worldPosition),o.setWorldPosition(this.position3.worldPosition)}},r.onBeginContact=function(t,i,o){var e=i.getComponent(y);e!=this.lastReward&&(e?(this.onContactToReward(e),this.lastReward=e):this.onContactToEnemy())},r.transitionToOneShoot=function(){this.shootType=nt.OneShoot},r.transitionToTwoshoot=function(){this.shootType=nt.TwoShoot,this.twoShootTimer=0},r.onContactToReward=function(t){switch(t.rewardType){case g.TwoShoot:console.log("Reward.TwoShoot"),S.inst.playOneShot(this.getDoubleAudio),this.transitionToTwoshoot();break;case g.Bomb:console.log("Reward.Bomb"),S.inst.playOneShot(this.getBombAudio),C.getInstance().addBomb()}t.getComponent(f).enabled=!1,t.getComponent(T).enabled=!1},r.changeLifeCount=function(t){this.lifeCount+=t,this.lifeCountUI.updateUI(this.lifeCount)},r.onContactToEnemy=function(){this.isInvincible||(this.isInvincible=!0,this.changeLifeCount(-1),this.lifeCount>0?this.anim.play(this.animHit):this.anim.play(this.animDown),this.lifeCount<=0&&(this.shootType=nt.None,this.collider&&(this.collider.enabled=!1),this.scheduleOnce((function(){C.getInstance().gameOver()}),.4)))},r.disableControl=function(){this.canControl=!1},r.enableControl=function(){this.canControl=!0},i}(w)).prototype,"shootRate",[et],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.3}}),H=i(_.prototype,"bulletParent",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=i(_.prototype,"bullet1Prefab",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=i(_.prototype,"position1",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=i(_.prototype,"bullet2Prefab",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=i(_.prototype,"position2",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=i(_.prototype,"position3",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=i(_.prototype,"shootType",[et],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return nt.OneShoot}}),j=i(_.prototype,"lifeCount",[et],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),Y=i(_.prototype,"anim",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=i(_.prototype,"animHit",[et],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),J=i(_.prototype,"animDown",[et],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),K=i(_.prototype,"twoShootTime",[et],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),Q=i(_.prototype,"lifeCountUI",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=i(_.prototype,"bulletAudio",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=i(_.prototype,"getBombAudio",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),tt=i(_.prototype,"getDoubleAudio",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),it=i(_.prototype,"invincibleTime",[et],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),N=_))||N));r._RF.pop()}}}));

System.register("chunks:///_virtual/Reward.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,o,i,n,a,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,s=e.Component}],execute:function(){var c,p,u,l;n._RF.push({},"5880aidHwZLBocsIk2zpO87","Reward",void 0);var d=a.ccclass,y=a.property,f=e("RewardType",function(e){return e[e.TwoShoot=0]="TwoShoot",e[e.Bomb=1]="Bomb",e}({}));e("Reward",d("Reward")((u=t((p=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,o(t,"rewardType",u,i(t)),o(t,"speed",l,i(t)),t}r(t,e);var n=t.prototype;return n.start=function(){},n.update=function(e){var t=this.node.position;this.node.setPosition(t.x,t.y-this.speed*e,t.z),this.node.position.y<-580&&this.node.destroy()},t}(s)).prototype,"rewardType",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return f.TwoShoot}}),l=t(p.prototype,"speed",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),c=p))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/ScoreUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,n,i,o,c,a,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,c=e._decorator,a=e.Label,u=e.Component}],execute:function(){var l,s,p,b,f;o._RF.push({},"ed1e28Q20JJmIeiu0PH6oRS","ScoreUI",void 0);var y=c.ccclass,h=c.property;e("ScoreUI",(l=y("ScoreUI"),s=h(a),l((f=r((b=function(e){function r(){for(var r,t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return r=e.call.apply(e,[this].concat(o))||this,n(r,"numberLabel",f,i(r)),r}return t(r,e),r.prototype.updateUI=function(e){this.numberLabel.string=e.toString()},r}(u)).prototype,"numberLabel",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=b))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/StartUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,r,e,o,c;return{setters:[function(t){n=t.inheritsLoose},function(t){r=t.cclegacy,e=t._decorator,o=t.director,c=t.Component}],execute:function(){var u;r._RF.push({},"2cd70TBtO1JTppd8ypMKVw6","StartUI",void 0);var a=e.ccclass;e.property,t("StartUI",a("StartUI")(u=function(t){function r(){return t.apply(this,arguments)||this}n(r,t);var e=r.prototype;return e.start=function(){},e.update=function(t){},e.onStartButtonClick=function(){o.loadScene("02-GameScene")},r}(c))||u);r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});