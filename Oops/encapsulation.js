//setters and getters 
/* Benefits 
Encapsulation and Data Privacy:
Setters and getters allow you to control access to object properties. 
You can define private variables within an object and expose them only through the getter and setter methods. 

Validation and Error Handling:
Setters provide an opportunity to validate and sanitize the input before assigning a value to a property.
This helps maintain data integrity and handle errors gracefully.

Computed Properties:
Setters and getters allow you to create computed properties based on existing data. You can calculate or derive values 
on the fly when retrieving or setting a property, providing dynamic behavior to your objects.

Compatibility with Existing Code:
By using setters and getters, you can introduce them into your codebase without breaking existing interfaces or APIs.

Code Maintainability and Flexibility:
If you need to add additional logic, validation, or side effects to property assignments or retrievals, 
you can do so within the respective setter or getter method, without modifying the external code that uses the property.

Debugging and Logging:
Setters and getters provide a convenient place to add debugging or logging statements. You can log or track property changes, 
perform debugging operations, or add breakpoints to understand the flow of data in your code.

Overall, setters and getters help in achieving better encapsulation and data integrity
*/

const data = {
    locations: [],
    get location() {
        return this._location
    }, 
    set location(value) {
        this._location = value.trim()
        this._location.push(this._location)
    }
}

data.location = '  California   '
console.log(data.location)