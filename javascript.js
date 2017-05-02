  var app= angular.module('child',[])
  app.controller('parent', function($scope){
      
    var sayings=[ 
    "Ice cream",
    "iPhone",
    "butts",
    "NO",
    "Sponge Bob",
    "Mine",
    "Gimmie",
    "Poop",
    "doggy",
    "Candy",
    "Fart"
  ]
    
    var classes=[
        'bold',
        'unnerline',
        'color',
        'italic',
        'border'
    ]
    var phrases=["Why do you smell","Can I go outide","Where's mom","I'm hungry","I hate you","Can I have some", "What are you doing?"     
    ]
      
  $scope.words=[];
      $scope.addWord= function(){
        var i=Math.floor(Math.random()*sayings.length);
        $scope.words.push({text: sayings[i] })
          console.log($scope.words)
      };
      $scope.fancyWords= function(){
          var i=Math.floor(Math.random()*sayings.length);
          var j=Math.floor(Math.random()*classes.length)
        $scope.words.push({text: sayings[i], cls: classes[j] })
          console.log($scope.words)
      };
      $scope.kidPhrases=function(){
          var i=Math.floor(Math.random()*phrases.length);
        $scope.words.push({text: phrases[i] })
          console.log($scope.words)
      }
    $scope.kidFancyPhrases= function(){
             var i=Math.floor(Math.random()*phrases.length);
          var j=Math.floor(Math.random()*classes.length)
        $scope.words.push({text: phrases[i], cls: classes[j] })
    }
  
  
  
  
  
  
  
  
  
  
  
  
  })   
    
