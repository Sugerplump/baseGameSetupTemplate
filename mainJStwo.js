class Planet{
    constructor(game){
        this.game = game;
        this.x = 200;
        this.y = 200;
        this.radius = 80;
    }
    draw(context){
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI*2);
        context.stroke();
    }
}

class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.planet = new Planet(this);
    }
    render(context){
        this.planet.draw(context);
    }
}

window.addEventListener('load', function(){
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 680;
    canvas.height = 680;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;


    const game = new Game(canvas);
    game.render(ctx);

 })
