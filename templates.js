// Class to make a template for a level of the game and have methods to create method
class Level extends Phaser.Scene {
    constructor(key) {
        super({ key: key }); // Defining the level key
        this.platforms = [
            [0, 0, 0, 0]
        ]; // A 2d array with each array being a platform with an x, y, width, and height
        this.createPlatforms();
    }

    createPlatforms() {
        if (gameState.platforms) {
            this.platforms.forEach(platform => {
                const x = platform[0];
                const y = platform[1];
                const w = platform[2];
                const h = platform[3];
                gameState.platforms.add(this.add.rectangle(x, y, w, h, (platform[4] ? platform[4] : 0x000000)));
            });
        }
    }
}