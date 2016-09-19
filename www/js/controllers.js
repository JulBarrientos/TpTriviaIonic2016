angular.module('app.controllers', ['firebase','ngCordova'])
  
.controller('triviaCtrl', ['$scope', '$stateParams', '$firebaseArray', '$timeout', '$cordovaVibration', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray, $timeout, $cordovaVibration,$state) {

  var pregsRef = new Firebase("https://trivia-28618.firebaseio.com/preguntas");

  $scope.pregElegida;
  $scope.rtaCorrecta;
  $scope.rtaElegida;

  $scope.rand = Math.floor((Math.random() * 3) + 1);

  
  pregsRef.on("child_added", function(snapshot){
  	$timeout(function(){
  		var info = snapshot.val();
  		if(info.id === 1)
  		{
	  		$scope.pregElegida = info;
	  		$scope.rtaCorrecta = info.respuesta;  
	  		console.log($scope.pregElegida);	
	  		console.log($scope.rtaCorrecta);		
  		}  		
  	});
  });

  $scope.validar = function(rtaElegida){

  	if(rtaElegida == $scope.rtaCorrecta)
  	{
  		console.log("WIN"); 
      document.getElementById(rtaElegida).className = "button button-balanced  button-block";

      try
      {
      $cordovaVibration.vibrate(100);
      }
      catch(err)
      {
        console.log("No es un disposivio movil");
      }

  	}
  	else
  		{
  			console.log("FAIL");
        document.getElementById(rtaElegida).className = "button button-assertive  button-block";

      try
      {
      $cordovaVibration.vibrate([100,100,100]);
      }
      catch(err)
      {
        console.log("No es un disposivio movil");
      }
  		}

  };

}])
   
.controller('pianoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaNativeAudio) {

	$scope.hello = function(){
		try{
         window.plugins.NativeAudio.play('hello');
		}
		catch(error){
	      	console.log("No es un celular");
		}
	};

  $scope.helpme = function(){
      try{
         window.plugins.NativeAudio.play('helpme');
    }
    catch(error){
          console.log("No es un celular");
    }
  };

  $scope.imsorry = function(){
      try{
         window.plugins.NativeAudio.play('imsorry');
    }
    catch(error){
          console.log("No es un celular");
    }
  };

  $scope.thankyou = function(){
      try{
         window.plugins.NativeAudio.play('thankyou');
    }
    catch(error){
          console.log("No es un celular");
    }
  };

  $scope.verygood = function(){
      try{
         window.plugins.NativeAudio.play('verygood');
    }
    catch(error){
          console.log("No es un celular");
    }
  };

}])
   
.controller('infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  
  $scope.guardarUsu = function(usu){
  console.log(usu);  
    localStorage.setItem("Usu",usu);
  };
}])
 
