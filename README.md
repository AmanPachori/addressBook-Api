
## ADDRESS BOOK API

### Capabilities:
*	GET 
     -   Get all contact details
     -   Getting contact details by seraching through contact name
     -   gettiing contact details by seraching through initials of contact
*	POST 
     -   Adding a new contact
     -   Adding multiple new contact
*	PUT 
     -    Update a contact
*	DELETE 
     -   Delete a contact
### Technologies and Packages Used:
*	node.js
*	express
*	nodemon 

## Local Setup:
### Get Started

1. Fork the repositry.
2. Clone the repositry (`git clone URL`).
3. Open the folder in which you cloned the repositry.
4. Run(`npm install`).
5. Run (`npm start`).
6. This will start your server locally.is up and running.

### REST API URLs
* GET	` http://localhost:8080/contact/get/:name`
* GET(all contacts) `http://localhost:8080/contact/list`
* GET(seacrhing contact name) `http://localhost:8080/contact/search/:{name initials`
* POST `http://localhost:8080/contact/add`
  <br/> the request.body :
	```json
	    {
		    "name":"johndoe",
        "email":"john.doe@gmail.com",
        "phone":"123456",
        "address":"john doe address",
	    }
	```
	* POST(add many contacts) `http://localhost:8080/contact/addmany`
	```json
	{"array":[{
		"name":"johndoe",
    "email":"john.doe@gmail.com",
    "phone":"123456",
    "address":"john doe address",
	},
  {
		"name": "jojo",
		"email": "jojo@gmail.com",
		"phone":"123456890",
		"address": "jojo address"
	}]}
	```

* PUT `http://localhost:8080/contact/update/:{name}`
	```json
	{
	"name": "jojo",
	"email": "jojo email"
	}
	```
	
* DELETE `http://localhost:8080/contact/delete/:{name}`

### Testing 
* The API was tested using, Chai and Supertest.
		


![Screenshot](https://user-images.githubusercontent.com/84467090/197323565-c78796d5-f5d8-414d-b143-ec11579f8333.png)
	
	


