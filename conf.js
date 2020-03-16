const ReportportalAgent = require('./node_modules/agent-js-jasmine/lib/reportportal-agent.js');
const reportportalConfig = require('./reportportalConf.js');
let agent;

exports.config = {
    framework: 'jasmine',
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },  
    onPrepare: function(){
        require("babel-core/register")({presets: ["es2015"]});
        
        agent = new ReportportalAgent(reportportalConfig);
        jasmine.getEnv().addReporter(agent.getJasmineReporter());
        
        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
        }));
    }//,
    // afterLaunch(number) {
    // return agent.getExitPromise();
    // }
}