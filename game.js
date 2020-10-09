const gameState = {};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#2eadda',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: true
        }
    },
    scene: [StartScene, Level1]
}

let game = new Phaser.Game(config);