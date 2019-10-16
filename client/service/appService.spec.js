window.assert = chai.assert;
describe('AppService', function () {
    // define variables for the services we want to access in tests
    var AppService,
        $log;

    beforeEach(function () {
        // load the module we want to test
        module('myApp');

        // inject the services we want to test
        inject(function (_AppService_, _$log_) {
            AppService = _AppService_;
            $log = _$log_;
        })
    });

    describe('#AddResult', function () {
        it('Add user input result data', function () {
            // Arrange
            sinon.spy($log, 'info');

            // Act
            const dtatObj={
                'number1':2,
                'number2':4,
                'result':8
            }
            AppService.resultData.addResult(dtatObj);
    
            // Assert
            assert($log.info.calledOnce);
            assert($log.info.calledWith('Insertion done!'));

            // Cleanup
            $log.info.restore();
        });
    });
    describe('#GetResult', function () {
        it('Fetch latest result data', function () {
            // Arrange
            sinon.spy($log, 'info');

            // Act
            AppService.resultData.getlatestRecords();
    
            // Assert
            assert($log.info.calledOnce);
            assert($log.info.calledWith('Received data!'));

            // Cleanup
            $log.info.restore();
        });
    });
});