# Refactor
This projects starts with app.js file (now deleted from the repository) being legacy code that needs to be evaluated, rewritten and deployed as API.
The working files are separated inside the services and utils directories, each file has it's own test inside the test directory.
> Eslint is implemented to sustain clean code and minimize errors
### Controller
After the classes are created they are imported to a controller class inside the controllers directory, which also has it's respective tests file.
### The API
A server file is added to the lib directory to create a server with express and implement the metods that where imported to the controller.
