class Level1 extends Level {
    constructor() {
        super('Level1')
        this.platforms = [
            [100, 100, 100, 50, 0x000000]
        ]
    }

    create() {
        gameState.platforms = this.physics.add.staticGroup();
        this.createPlatforms()
    }
}