// Developed By Harshil Kaneria
var data;
var  jsonbash = (status='false',message='Auto Generated Message',dataArray=[],paramsAdd) => {
	data = {
		status : status=='auto-gen'?'false':status,// This is Return Status if User Not Pass auto-gen
		message : message=='auto-gen'?'Auto Generated Message':message,// This is Return Message if User Not Pass auto-gen
		data : dataArray=='auto-gen'?[]:dataArray// This is Return DataArray if User Not Pass auto-gen
	}
	status===null?delete data.status:data.status; // If User Pass Null Then Remove Status Filed
	message===null?delete data.message:data.message;// If User Pass Null Then Remove Status Filed
	dataArray==null?delete data.data:data.data;// If User Pass Null Then Remove Status Filed
	if(typeof paramsAdd !== 'undefined' && typeof paramsAdd === 'object')
	{
		for (var key in paramsAdd) {
			data[key] = paramsAdd[key]; // Parsing For Custom Json Object
		}
	}
  return data; // Return Json Formate of Data
};
exports.jsonbash = jsonbash;