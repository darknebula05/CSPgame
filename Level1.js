class Level1 extends Level {
    constructor() {
        super('Level1')
        this.platforms = [
            [1600, 700, 3100, 50, 0xff0000]
        ]
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

        // Create platforms and put them in static group
        gameState.platforms = this.physics.add.staticGroup();
        this.createPlatforms();

        // Creating black square as player sprite
        gameState.player = this.physics.add.sprite(200, 100, "black1x1").setScale(50, 50).setOrigin(0.5, 0.5).setCollideWorldBounds();
        this.physics.add.collider(gameState.player, gameState.platforms)

        // Create camera that follows player and moves back and forth
        this.cameras.main.setBounds(0, 0, 3200, 800);
        this.physics.world.setBounds(0, 0, 800, 800);
        this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5);
    }

    update() {
        // Making variables to easier use arrow keys and WASDd
        const left = gameState.cursors.left.isDown || gameState.a.isDown;
        const right = gameState.cursors.right.isDown || gameState.d.isDown;
        const up = gameState.cursors.up.isDown || gameState.w.isDown;
        const down = gameState.cursors.down.isDown || gameState.s.isDown;

        // Check if pushing left or right and setting horizontal velocity
        if (gameState.player.body.touching.down) {
            if (left && right) {
                gameState.player.setVelocityX(0);
            } else if (right) {
                gameState.player.setVelocityX(300);
            } else if (left) {
                gameState.player.setVelocityX(-300);
            } else {
                gameState.player.setVelocityX(0);
            }

            // Add jump while on ground
            if (gameState.player.body.touching.down && up) {
                gameState.player.setVelocityY(-400);
            }
        }
    }
}