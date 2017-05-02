  var app= angular.module('child',[])
  app.controller('parent', function($scope){
      
    var phrases=[ 
    "Ice cream",
    "iPhone",
    "butts",
    "NO",
    "Sponge Bob",
    "Mine",
    "Gimmie",
    "Poop",
    "doggy",
    "I'm hungry",
    "Candy",
    "Fart",
    "I hate you"]
    
    var classes=[
        'bold',
        'unnerline',
        'color',
        'italic',
        'border'
    ]
      
  $scope.words=[];
      $scope.addWord= function(){
        var i=Math.floor(Math.random()*13);
        $scope.words.push({text: phrases[i] })
          console.log($scope.words)
      };
      $scope.fancyWords= function(){
          var i=Math.floor(Math.random()*13);
          var j=Math.floor(Math.random()*classes.length)
        $scope.words.push({text: phrases[i], cls: classes[j] })
          console.log($scope.words)
          console.log('fancywords');
      };
  
  
  
  
  
  
  
  
  
  
  
  
  
  })   
    
