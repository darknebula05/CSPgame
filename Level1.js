class Level1 extends Level {
    constructor() {
        super('Level1')
        this.platforms = []
    }

    preload() {
        // Load images and assign to key
        this.load.image("black1x1", "assets/black1x1.png")
    }

    create() {
        // Creating key objects and saving them in gameState
        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.w = this.input.keyboard.addKey('W');
        gameState.a = this.input.keyboard.addKey('A');
        gameState.s = this.input.keyboard.addKey('S');
        gameState.d = this.input.keyboard.addKey('D');

        gameState.platforms = this.physics.add.staticGroup();
        this.createPlatforms();

        // Creating black square as player sprite
        gameState.player = this.physics.add.sprite(300, 400, "black1x1").setScale(50, 50).setOrigin(0.5, 0.5).setCollideWorldBounds();
        this.physics.add.collider(gameState.player, gameState.platforms)
    }

    update() {
        // Making variables to easier use arrow keys and WASD
        const left = gameState.cursors.left.isDown || gameState.a.isDown;
        const right = gameState.cursors.right.isDown || gameState.d.isDown;
        const up = gameState.cursors.up.isDown || gameState.w.isDown;
        const down = gameState.cursors.down.isDown || gameState.s.isDown;

        // Check if pushing left or right and setting horizontal velocity
        if(left && right) {
            gameState.player.setVelocityX(0);
        } else if(right) {
            gameState.player.setVelocityX(100);
        } else if(left) {
            gameState.player.setVelocityX(-100);
        } else{
            gameState.player.setVelocityX(0);
        }

        // Check if pushing up or down and setting vertical velocity
        if(up && down) {
            gameState.player.setVelocityY(0);
        } else if(up) {
            gameState.player.setVelocityY(-100);
        } else if(down) {
            gameState.player.setVelocityY(100);
        } else{
            gameState.player.setVelocityY(0);
        }
    }
}