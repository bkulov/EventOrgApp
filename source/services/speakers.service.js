System.register(['./speakers-mock'], function(exports_1) {
    var speakers_mock_1;
    var SpeakersService;
    return {
        setters:[
            function (speakers_mock_1_1) {
                speakers_mock_1 = speakers_mock_1_1;
            }],
        execute: function() {
            SpeakersService = (function () {
                function SpeakersService() {
                }
                SpeakersService.prototype.getSpeakers = function () {
                    return Promise.resolve(speakers_mock_1.SpeakersMock);
                };
                return SpeakersService;
            })();
            exports_1("SpeakersService", SpeakersService);
        }
    }
});
//# sourceMappingURL=speakers.service.js.map