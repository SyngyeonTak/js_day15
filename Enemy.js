class Enemy{
    constructor(src, x, y, width, height, velX, velY){
        this.img;
        this.src = src;
        this.x = x;
        this.x1= x;
        this.y = y;
        this.y1 = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.position = "absolute";
        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px";
        this.img.style.left = this.x+ "px";
        this.img.style.top = this.y+ "px";

        wrapper.appendChild(this.img);
    }

    tick(){
        this.x += this.velX;
        if(this.x <= this.x1 || this.x >this.x1+200){
            this.velX *= -1;
        }

        this.y += this.velY;
        
    }

    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}