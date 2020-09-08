# Json-Bash

A Javascript Function for Generating Basic Structure for Json Response Like Status , Message , Data.

***

## Installation

```bash
$ npm install jsonbash --save
```

***
## Usage

```javascript
var jsonmanager = require('jsonbash');


// Case 1 Basic

data = {
	id:'1',
	name: 'harshil',
	lastname: 'kaneria'
}

jsonmanager.jsonbash(true,"Data Fetch Sucessfully",data);

// Result of Case 1

{
	status : true,
	message : "Data Fetch Sucessfully"
	data : {
		id:'1',
		name: 'harshil',
		lastname: 'kaneria'
	}
}


// Case 2 Remove Predefind Fileds


data = {
	id:'1',
	name: 'harshil',
	lastname: 'kaneria'
}

jsonmanager.jsonbash(false,null,data);

// Result of Case 2

{
	status :false,
	data : {
		id:'1',
		name: 'harshil',
		lastname: 'kaneria'
	}
}


// Case 3 Add Custom Fileds


data = {
	id:'1',
	name3: 'harshil',
	lastname3: 'kaneria'
}

code = {
	statuscode : '200'
}

jsonmanager.jsonbash(true,null,data,code);

// Result of Case 3

{
	status : true,
	data : {
		id:'1',
		name: 'harshil',
		lastname: 'kaneria'
	},
	statuscode :'200'
}

```

***
## License

[MIT](LICENSE)

***