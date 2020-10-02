const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 400,
    backgroundColor: '#000000',
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

game = new Phaser.Game(config);