
var array=[];
var canvas=document.getElementsByTagName('canvas')[0];
var c=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
c.beginPath();
c.arc(500,350,20,0,Math.PI*2,false);
c.stroke();

function toRadian(deg){

return deg*Math.PI/180


}
function Constructor(x,y,c1,c2,c3,ang,speed,circleR,innerRadius,outerRadius,time){

this.x=x;
this.y=y;
this.color="rgb("+c1+","+c2+","+c3+")";
this.ang=ang;
this.speed=speed;
this.innerRadius=innerRadius;
this.outerRadius=innerRadius;
this.circleR=circleR;
this.time=time;
this.rMax=500;
this.opacity=1;
}
Constructor.prototype.moveCircle=function(){
var aca2=this;
this.moveMe=function(){
c.clearRect(this.x-this.circleR-0.5,this.y-this.circleR-0.5,this.circleR*2+1,this.circleR*2+1);
c.beginPath();
c.globalAlpha=this.opacity;
this.y=350+Math.sin(this.ang)*this.outerRadius;
this.x=500+Math.cos(this.ang)*this.outerRadius;

this.y=this.y+50;
this.outerRadius+=this.speed;
c.arc(this.x,this.y,this.circleR,0,Math.PI*2,false);
c.fillStyle=this.color;
c.fill();
this.rf=requestAnimationFrame(function(){aca2.moveMe();});

this.opacity-=.01;
if(this.rMax==this.outerRadius || this.opacity<=0){cancelAnimationFrame(this.rf);}
}

this.start=function(){	
	c.beginPath();
this.y=350+Math.sin(this.ang)*this.innerRadius;
this.x=500+Math.cos(this.ang)*this.innerRadius;
c.arc(this.x,this.y,this.circleR,0,Math.PI*2,false);
c.fillStyle=this.color;
c.fill();

this.moveMe();
}

this.start();
}




for(let i=0;i<400;i++){
var circle1=new Constructor(undefined,undefined,Math.random()*220,Math.random()*220,Math.random()*220,toRadian(-Math.random()*180),2+Math.random()*6,5+Math.random()*10,20,200,Math.random()*7000);
array.push(circle1);
}





for(let i=0;i<array.length;i++){

setTimeout(function(){array[i].moveCircle();},array[i].time);

}
