# Express Challenges

## Part One:

### Challenge 1:

Create a GET route for "/hello" that returns the response "Hello!".

### Challenge 2:

Create a POST route for "/create/:name" that returns a json object that looks like this:
{
"id":1,
"name":"the name they pass in the route"
}

### Challenge 3:

Create a GET route for "/" that returns the index.html file. -- Added some text to confirm

### Challenge 4:

Create a GET route for "/verify/:age" that checks if the age is greater than 13. If it is then it sends a 200 status response (for all good). If it is not greater than 13 then send a 403 status code.
For more information on what status codes mean refer to this - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## Part Two:

### Challenge 1:

Create a POST route for "/create/:name/:age" that creates an object that looks like this:
{
"name": "troy",
"age": 21
}
Then take that object and insert it into storage.json

### Challenge 2:

Create a Get route for "/" that returns all of the objects inside storage.json.

### Challenge 3:

Create a Get route for "/:name" that returns the first object in storage.json that matches the name. If there is no object in storage.json that matches then return a 400 status.

### Challenge 4 (stretch):

Modify your logic so every object has and id field that automatically goes up by one for every object inserted (first object has an id of 1, second object has an id of 2 ect). Then modify challenge 3 so that it finds the object by an id instead of by name.
