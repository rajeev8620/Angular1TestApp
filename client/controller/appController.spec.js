describe('AppController', function () {
    // define variables for the services we want to access in tests
    var AppController,
        AppService;

    beforeEach(function () {
        // load the module we want to test
        module('myApp');

        // get services from injector
        inject(function ($controller, _AppService_) {
            AppService = _AppService_;
          
            // spy on service method to check if it gets called later
            sinon.spy(AppService, 'resultData.addResult');

            // get controller instance from $controller service
            AppController = $controller('AppController');
        });
    });
    
    afterEach(function(){
        // remove spy from service
        AppService.resultData.addResult.restore();
    });

    describe('constructor', function () {
        it('Fetch latest result data from app service', function () {
            // Assert
            assert(AppService.resultData.addResult);
        });
    });
});