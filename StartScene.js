class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    create() {
        gameState.platforms = this.physics.add.staticGroup();
        this.scene.stop('StartScene');
        this.scene.start('Level1');
    }
}