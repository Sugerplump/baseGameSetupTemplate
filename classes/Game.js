class Game{
    constructor(canvas,context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        window.addEventListener('resize', e =>{
            this.canvas.width = e.currentTarget.innerWidth;
            this.canvas.height = e.currentTarget.innerHeight;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
        });
    }

    render(){
        this.ctx.fillStyle = 'gold';
        this.ctx.fillRect(100,100,150,150)  ;
    }
}