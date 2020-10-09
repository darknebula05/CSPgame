// Scene to init game and setup objects that need a phaser scene
class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    create() {

        // Stop current scene and start Level1
        this.scene.stop('StartScene');
        this.scene.start('Level1');
    }
}