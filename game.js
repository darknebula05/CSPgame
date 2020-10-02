const gameState = {};

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            }
        }
    },
    scene: [StartScene]
}

let game = new Phaser.Game(config);