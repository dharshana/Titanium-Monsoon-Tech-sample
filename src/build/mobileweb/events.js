btnGetSum.addEventListener('click', function(){
	//Ti.API.info('BTN clicked ***************************');
	var val1 = value1.value*1;
	var val2 = value2.value*1;
	var sum = val1 + val2;
	
	Ti.API.info('****  Sum is : '+ sum);
	
	sumValue.value = sum;
});
