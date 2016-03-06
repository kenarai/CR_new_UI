var xmlns = "http://www.w3.org/2000/svg",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container_like = select('.container_like'),
  heartSVG = select('.heartSVG'),
  hit = select('#hit'),
  sparkleGrowGroup = select('#sparkleGrowGroup'),
  sparkleMoveGroup = select('#sparkleMoveGroup'),
    sparkleGrowColors = ['#9E31E2','#9E31E2','#9E31E2','#92E8C5','#CDEB8E','#2AD492','#D79DF3'], 
    sparkleMoveColors = ['#E187D2', '#E0A3FF', '#F5BB30', '#9ECA98', '#35A0F0', '#BADAB0', '#33B6E9']


//center the container_like cos it's pretty an' that
TweenMax.set(container_like, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility:'visible'
})


var tl = new TimelineMax({paused:true});
tl.from('#pinkDot', 1, {
  attr:{
    r:0
  }
})
.set('#greyHeart', {
  fill:'none'
},'-=0.99')
.to('#pinkDot', 1, {
  fill:'#CD8FF7'
},'-=1')
.to('#hole', 1, {
  attr:{
    r:67
  }
},'-=0.5')
.from('#pinkHeart', 1.6, {
  scale:0,
  transformOrigin:'50% 50%',
  ease:Back.easeOut.config(1.2)
},'-=0.5')
.set(['#sparkleGrowGroup', '#sparkleMoveGroup'], {
  alpha:1
},'-=1.5')
.to('#sparkleGrowGroup', 1, {
  scale:1.5, 
  transformOrigin:'50% 50%'

},'-=1.5')
.to('#sparkleMoveGroup', 1, {
  scale:1.2, 
  transformOrigin:'50% 50%'

},'-=1.5')
.staggerTo('#sparkleGrowGroup circle', 2, {
  attr:{
    r:0
  },
  cycle:{
    fill:function(i){
      return sparkleGrowColors[i]
    }
  }
}, 0,'-=0.9')
.staggerTo('#sparkleMoveGroup circle', 0.8, {
  attr:{
    r:0
  },
  cycle:{
    fill:function(i){
      return sparkleMoveColors[i]
    }
  }
}, 0,'-=2')


heartSVG.onclick = function(){
  if(tl.time() === 0){
    tl.play(0);
    
  } else{
    tl.pause(0)
  }
  hit.onmouseout();
  TweenMax.delayedCall(0.3, hit.onmouseover)
}

hit.onmouseover = function(){
   if(tl.time() === 0){
    TweenMax.set('.likePopup', {
      alpha:1
    })
   } else {
    TweenMax.set('.undoLikePopup', {
      alpha:1
    })     
   }
}
hit.onmouseout = function(){
  
  TweenMax.set(['.likePopup', '.undoLikePopup'], {
        alpha:0
  })  
   
}

tl.timeScale(4);