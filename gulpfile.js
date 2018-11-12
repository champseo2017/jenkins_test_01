var gulp=require('gulp');
var cucumber=require('gulp-cucumber');
var argv=require('yargs').argv;
var reporter = require('cucumber-html-reporter');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = dd+'/'+mm+'/'+yyyy;
var options = {
	theme: 'bootstrap',
	jsonFile: './reports/test_report.json',
	output: './reports/test_report/'+ today + '.html',
	reportSuiteAsScenarios: true,
	launchReport: true,
	screenshots:  './screenshots',
	metadata: {
		"App Version":"0.3.2",
		"Test Environment": "STAGING",
		"Browser": "Chrome  54.0.2840.98",
		"Platform": "Windows 10",
		"Parallel": "Scenarios",
		"Executed": "Remote",
		"Execution Start Time":"7/11/2018",
		"Execution End Time":"7/11/2018"
	}
};



// gulp.task('cucumber',function(){
// 	return gulp.src('*features/*').pipe(cucumber({
// 		'steps': '*features/step_definitions/*.js',
// 		'support': '*features/support/*.js',
// 		'format': 'pretty'
// 	}));
// });

gulp.task('cucumberReports',function(){

	reporter.generate(options);

});


var file;
gulp.task('sumit',function(){
	return gulp.src('*features/'+argv.file+'.feature').pipe(cucumber({
		'steps': '*features/step_definitions/'+argv.file+'.js',
		'support': '*features/support/*.js',
		'format': 'pretty'
	}));
});

gulp.task('default',['sumit']);