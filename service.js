angular.module('eirwin.angular-hello-bower',[])
  .service('helloBowerService',function(){ 
   
    var sayHelloBower = function(){
      console.log('Hello Bower');
    }
    
    return {
      sayHelloBower:sayHelloBower
    }
  });