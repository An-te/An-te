import s1 from "./1530528116984397825.js"
import s2 from "./1571742041419436033.js"
import s3 from "./1714332411289616814.js"
import s4 from "./1719633691033612732.js"
import s5 from "./1425492606272774151.js"
import s6 from "./1431879522354282498.js"
import s7 from "./1431883745745719300.js"
import s8 from "./1456989554221617156.js"
import s9 from "./1458799148476473346.js"
import s10 from "./1459897419882110981.js"
import s11 from "./1435253179638112264.js"
import s12 from "./1344420426613628928.js"
import s13 from "./1459926744815718401.js"
import s14 from "./1353092193448206336.js"
import s15 from "./1572967735923200000.js"
import s16 from "./1830678717410259141.js"

export default [
    {
        func: s1,
        t: "1530528116984397825",
        text: "n=1/40,t=0,draw=($=t||createCanvas(w=800,w))=>background(241)&translate(w/2,w/2)&k(2-(t+=.03)%1*n)+circle(0,-199,60);k=x=>x>0&&noFill(m=5/x,a=sin(x*6)*99+x*w/2)+line(h=a-m,m,w,m)+rect(h,c=-x*160-m,m/2,m/9)+rect(h,m,1,c-m)+arc(x*90-m,9,m,m,PI,0)+k(x-n)",
        type: "p5js",
    },
    {
        func: s2,
        t: "1571742041419436033",
        text: "t=0,s=.2;draw=$=>{t++||createCanvas(540,540);stroke(9,90);background(248);for(j=-2;j<2;j+=s)for(i=-2;i<2;i+=s)quad(...[[i,j],[i+s,j],[i+s,j+s],[i,j+s]].flatMap(([u,v,e=lerp(u*u+v*v+1,1,min(max(sin(t*.02+u)*2,0),1))])=>[(u-v/2)/e*99+250,280+99*(1-e+v/9)/e]))}",
        type: "p5js",    
    },
    {
        func: s3,
        t: "1714332411289616814",
        text: "$=[],t=0,draw=_=>{t++||createCanvas(540,540);background(0,14);$=[...$.slice(-5e3),...[...'###############'].map(p5.Vector.random3D)];$.map((v,i)=>stroke(255).point((v.x+=sin(r=(((v.x*2*(k=v.x+1^t/90%7+v.y)^v.y*k+3)&1)*2-1))/99*v.z)*99+270,(v.y+=cos(r)/99*v.z)*99+270))}",
        type: "p5js",
    }, 
    {
        func: s4,
        t: "1719633691033612732",
        text: "$=[],t=0,draw=_=>{t++||createCanvas(540,540);background(0,9);$=[...$.slice(-5e3),...[...'###############'].map(p5.Vector.random3D)];$.map(v=>stroke(255,96).point((v.x+=sin((r=9*((v.x*(k=v.x+5+v.y)^v.y*k+t/90)&7)-.1)*v.y)/119)*119+270,(v.y+=cos(v.x*r)/119)*119+270))}",
        type: "p5js",
    },
    {
        func: s5,
        t: "1425492606272774151",
        text: "r=_=>p5.Vector.random3D().mult(160),p=r(t=0,_=[]),draw=$=>{clear(t++||createCanvas(w=540,w,WEBGL));rotate(p.z/99);_=_[0]?_:[...Array(t%17+2)].map(r);p.add(m=_[0].copy().sub(p).div(6));_.map(_=>rect(p.x-_.x,p.y-_.y,w/_.z));m.mag(line(p.x,p.y,0,0))^0||_.shift()}",
        type: "p5js",
    },
    {
        func: s6,
        t: "1431879522354282498",
        text: "v=p5.Vector,t=0,draw=a=>{t++;createCanvas(540,540);_=[...Array(8)].map((e,i)=>new v(180).rotate(i*TAU/8).add(270,270));for(q=50;i=0,q--;)for([a,b]of _.map((a,i)=>[a,_[-~i%8]]))line(a.x,a.y,b.x,b.y),_[i++]=v.sub(a,v.sub(a,b).mult(sin(i*q/90-t*PI/100)**3/2+.5))}",
        type: "p5js",
    },
    {
        func: s7,
        t: "1431883745745719300",
        text: "t=0,p=6,q=5,draw=(v=createVector)=>{t++||(m=v());createCanvas(540,540);m.sub(m.copy().sub([,[142,86],[50,80],[,160]][t/50&3]).div(9));e=(a,b)=>v(0,a*40).sub(m).rotate(b*TAU/p).add(270,270);for(j=p*q;j--;line(a.x,a.y,b.x,b.y))a=e(i=j/p^0,j),b=e(~-q-i,-~j)}",
        type: "p5js",
    },
    {
        func: s8,
        t: "1456989554221617156",
        text: "t=0,draw=$=>{t||createCanvas(W=700,W);background(240).noStroke(t+=.01);(F=(a,x=0,y=0)=>a>3&&[[0,0],[0,a],[a,a],[a,0]].map(([w,h])=>(c=noise((n=x+w)/s*5,t,t+(m=y+h)*s)**2)>.2?F(a/2,n,m):fill(5/c)+[rect,circle][k=c<.15|0](n+a/2*k+s,s+m+a/2*k,a)))(s=W/4)}",
        type: "p5js",
    },
    {
        func: s9,
        t: "1458799148476473346",
        text: "x=161;y=136;n=226;r=t=0;s=new Set([...Array(25)].map((_,i)=>n/i%1*n|0));draw=_=>{t++||createCanvas(540,400);background(248);for(i=n*6;i--;rect(x*2+d,y*2,d/5)){r+=s.has(i%n)*PI/3;x+=sin(r);y+=cos(r);d=(noise(y+t+i>>4)*2-1)*min(tan(t*PI/75)**4,1)*200}}",
        type: "p5js",
    },
    {
        func: s10,
        t: "1459897419882110981",
        text: "t=0,draw=_=>{t++||(C=createCanvas(540,400).drawingContext);background(252);y=r=0;x=n=100;for(i=n*9;i--;){r-=i&x%(n/2)?0:PI/3;x+=sin(r);y+=cos(r);d=min(tan((t+(i>>3))*PI/75)**4,1)*60;C.setTransform(2,.8,.2,2,x*2+90,y*2+110);text('⳦.'[(t+i)%n?1:0],d,0)}}",
        type: "p5js",
    },
    {
        func: s11,
        t: "1435253179638112264",
        text: "t=0,draw=$=>{t||createCanvas(540,540);background(0);t+=s=1/15;for(c=j=-2;j<2;j+=s)for(i=-2;i<2;i+=s,c++)quad(...[[i,j],[i+s,j],[i+s,j+s],[i,j+s]].flatMap(([u,v,f=noise(cos(u*3+t)+cos(v*3+t),cos(v+t)),e=sqrt(u*u+v*v+(c%8?f*6:f*8-3))])=>[u/e*90+270,270+90*v/e]))}",
        type: "p5js",
    },
    // {
    //     func: s12,
    //     t: "1344420426613628928",
    //     text: "a=4,t=0,draw=(R=rotate,T=translate,F=_=>{push();for(i=0;i<6*a;i++)R(PI/2*[2,4,5].includes(i/a)),box(18,18,32),i+t/5&a||box(2,2,60),T(-18,0,-1.75);pop()})=>{clear(t++||createCanvas(540,540,WEBGL)+ortho());F(T(-43,53,250));F(T(160,0)+R(PI*3/8,[1,0,0])+R(PI/4))}",
    //     type: "p5js",
    // },
    {
        func: s13,
        t: "1459926744815718401",
        text: "t=0,draw=_=>{t++||createCanvas(w=400,w);background(0);fill``;shearY(.3);text('❀❂'[t/10&1]+'\n'+'➡✕'[t/50&1]+'\n｜',220,140);(e=(a=0,x=0)=>x<w&&e(sin(a|x-t)+3,x+a)+rect(x/2+95,(t/a+a*x)%150-x/7+90,2,15/a))();shearX(-.5);for(i=7;i--;)rect(i*8+265,180,5,20)}",
        type: "p5js",
    },
    {
        func: s14,
        t: "1353092193448206336",
        text: "t=0,draw=$=>{t++||createCanvas(540,540,WEBGL);background(248);rotateY(t*(e=PI/25)/6);t/25&1||rotate(PI/2);(F=n=>n<1&&box(n*3)||(x=>{for(x of l=[-1,0,1])for(y of l)push(),x+1==(t/25%3^0)&&n==s&&rotateX(t*e),translate(x*n,y*n),x&y||F(n/3),pop();})())(s=120)}",
        type: "p5js",
    },
    {
        func: s15,
        t: "1572967735923200000",
        text: "t=0,s=.1,draw=_=>{t++||createCanvas(540,540);background(9);for(i=s;i<2;i+=s)for(j=0;j<TAU;j+=s)quad(...[[i,j],[i+s,j],[i+s,j+s],[i,j+s]].flatMap(([u,v,x=u*sin(v),y=u*cos(v),e=lerp(x*x+y*y+1,1,sin(t*.02-u/2+j*6))])=>[(x-1)/e*99+360,400+99*(y-1-tan(t*.01))/e]))}",
        type: "p5js",
    },
    {
        func: s16,
        t: "1830678717410259141",
        text: "s=3,t=0,a=(x,y,d=-exp(-mag(k=w*noise(t)-x,e=w*noise(t,9)-y)/(1+45*noise(x/30,y/30))+.5))=>[x+k*d,y+e*d],draw=$=>{t||createCanvas(w=400,w);noFill(t+=.02);background(248);for(y=100;y<300;y+=s)for(x=100;x<300;x+=s)triangle(...[a(x,y),a(x,y+s),a(x+s,y)].flat())}",
        type: "p5js",
    },
    {
        img: "./sketch/00.png",
        type: "img",
    },
    {
        img: "./sketch/01.jpg",
        type: "img",
    },
    {
        img: "./sketch/02.jpg",
        type: "img",
    },
    {
        img: "./sketch/03.jpg",
        type: "img",
    },
    {
        img: "./sketch/04.png",
        type: "img",
    },
    {
        img: "./sketch/05.jpg",
        type: "img",
    },
    {
        img: "./sketch/06.gif",
        type: "img",
    },
]