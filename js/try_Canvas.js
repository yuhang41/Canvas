const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);
const particleArray =[];

//讓canvas 的寬高可以對照頁面的寬高，這樣ctx要設定寬高時，就比較準確
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//resize 當頁面寬度有所變化時，就觸發
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // ctx.fillStyle = 'white';
    // ctx.fillRect(10, 20, 150, 50); fillRect(x, y, w, h)
});
// ctx.fillStyle = 'white';
// ctx.fillRect(10, 20, 150, 50);

const mouse ={
    x:null,
    y:null,
}
canvas.addEventListener('click',function(e){
    // console.log(e);
    mouse.x = e.x
    mouse.y = e.y
    // for(let i=0 ; i < 10 ; i++){
    //     particleArray.push(new Particle());
    // }
});
canvas.addEventListener('mousemove',function(e){
    // console.log(e);
    mouse.x = e.x
    mouse.y = e.y
    for(let i=0 ; i < 5 ; i++){
        particleArray.push(new Particle());
    }
    //drawCircle();
});
// function drawCircle(){
//     ctx.fillStyle = 'red';
//     ctx.beginPath();
//     ctx.arc(mouse.x,mouse.y, 50, 0, Math.PI * 2);
//     ctx.fill();
// }

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        //speedX = 1 ,speedY = 1 位子向右下移動。speedX = -1 ,speedY = -1 向左上移動
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

//init()自動觸發動畫，new Particle() 動畫
// function init(){
//     for(let i=0 ; i < 100 ; i++){
//         particleArray.push(new Particle());
//     }
// }
// init();

function handleParticle(){
    for(let i=0 ; i < particleArray.length ; i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
}


function animate(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height);//clearRect(x, y, w, h)
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    
    // drawCircle();
    handleParticle();
    requestAnimationFrame(animate);//通知瀏覽器我們想要產生動畫，要求瀏覽器在下次重繪畫面前呼叫特定的function更新動畫
}
animate();

// ctx.fillStyle = 'red';
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 5; //邊框的粗度
// ctx.beginPath();
// ctx.arc(100, 100, 50, 0, Math.PI * 2); //arc(x, y, radius, startAngle, endAngle);
                                       //Math.PI = 3.14 = 180°
// ctx.fill();//在畫面上顯示 fillStyle 
// ctx.stroke();//在畫面上顯示 strokeStyle
