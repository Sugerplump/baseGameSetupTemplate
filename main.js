window.addEventListener('load', function(){
    
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    // objects
    const game = new Game(canvas,ctx)

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);

        game.render();
        console.log('animating')
        requestAnimationFrame(animate);
    }
    this.requestAnimationFrame(animate);
});
