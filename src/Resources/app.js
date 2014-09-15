// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var defaultFontSize = '16';

var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var view1 = Ti.UI.createView({
	top : '5dp',
	width : '90%',
	height : '50dp',
});
var val1label = Ti.UI.createLabel({
	text : 'Value1',
	left: '0dp',
});
var value1  = Ti.UI.createTextField({
	height : '50dp',
	width : '100dp',
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
});
view1.add(val1label);
view1.add(value1);

var view2 = Ti.UI.createView({
	top : '70dp',
	width : '90%',
	height : '50dp',
});
var val2label = Ti.UI.createLabel({
	text : 'Value1',
	left: '0dp',
});
var value2  = Ti.UI.createTextField({
	height : '50dp',
	width : '100dp',
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
});
view2.add(val2label);
view2.add(value2);
// end of value 2


var viewsum = Ti.UI.createView({
	top : '140dp',
	width : '90%',
	height : '50dp',
});
var sumtext = Ti.UI.createLabel({
	text : 'Sum',
	left: '0dp',
});
var sumValue  = Ti.UI.createTextField({
	height : '50dp',
	width : '100dp',
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable: false,
});
viewsum.add(sumtext);
viewsum.add(sumValue);


var viewbtn = Ti.UI.createView({
	top : '210dp',
	width : '90%',
	height : '50dp',
});
var btnGetSum = Ti.UI.createButton({
	title : 'Save',
	backgroundColor : '#4187D1',
	right : "1%",
	width : "32%",
	height : '40dp',
	font: {fontSize:defaultFontSize+'dp'},
	color : '#fff',
	borderRadius : '5dp',
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
});
viewbtn.add(btnGetSum);

win1.add(view1);
win1.add(view2);
win1.add(viewsum);
win1.add(viewbtn);
win1.open();

Ti.include('events.js');
