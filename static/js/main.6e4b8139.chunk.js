(this["webpackJsonphello-pubnub-react"]=this["webpackJsonphello-pubnub-react"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(2),o=t.n(s),r=(t(14),t(3)),c=t(4),i=t(8),u=t(7),d=t(5),h=t.n(d),p=t(6),b=t.n(p),m=(t(15),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).setup=function(a,t){a.createCanvas(400,400).parent(t),e.backgroundImage=a.loadImage("./assets/background.png"),e.ballImage=a.loadImage("./assets/ball.png"),e.paddleImage=a.loadImage("./assets/paddle.png")},e.draw=function(a){a.image(e.backgroundImage,0,0,400,400),a.image(e.ballImage,e.xBall-10,e.yBall-10,20,20),a.image(e.paddleImage,e.start,375,90,15),e.move(),e.bounce(),e.paddle(a),a.fill("black"),a.textSize(24),a.text("Score: "+e.score,10,25)},e.xBall=Math.floor(300*Math.random())+50,e.yBall=50,e.xSpeed=7,e.ySpeed=-2,e.score=0,e.start=150,e.backgroundImage="",e.ballImage="",e.paddleImage="",e.pubnub=new b.a({publishKey:"pub-c-3c27741a-6520-44bc-a0dc-458f1fa5d19e",subscribeKey:"sub-c-d0567ae6-cf2f-11ea-b0f5-2a188b98e439"}),e.pubnub.subscribe({channels:["IOE_channel"]}),e.pubnub.addListener({message:function(a){"player1_L"==a.message.button&&(e.start-=10),"player1_R"==a.message.button&&(e.start+=10)}}),e}return Object(c.a)(t,[{key:"move",value:function(){this.xBall+=this.xSpeed,this.yBall+=this.ySpeed}},{key:"bounce",value:function(){(this.xBall<10||this.xBall>390)&&(this.xSpeed*=-1),(this.yBall<10||this.yBall>390)&&(this.ySpeed*=-1)}},{key:"paddle",value:function(e){this.xBall>this.start&&this.xBall<this.start+90&&this.yBall+10>=375&&(this.xSpeed*=-1,this.ySpeed*=-1,this.score++)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null," EDUCATE-GAME "),l.a.createElement(h.a,{setup:this.setup,draw:this.draw}),l.a.createElement("h2",null,"OBJECTIVE"),l.a.createElement("p",null," 1) Bounce the ball off the paddle to score points. "),l.a.createElement("p",null," 2) Failing to hit the ball will result in 0 points scored. "),l.a.createElement("p",null," 3) Answer questions correctly when promoted to score points. "),l.a.createElement("p",null," 4) Play for your high score. "))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6e4b8139.chunk.js.map