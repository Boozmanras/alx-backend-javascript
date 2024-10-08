# ES6 Data Manipulation Project

## Description
This project is a collection of JavaScript functions that demonstrate ES6 data manipulation techniques. It includes implementations of various array methods, typed arrays, and data structures like Sets, Maps, and WeakMaps.

## Project Tasks

### 0. Basic List of Objects
- File: `0-get_list_students.js`
- Description: Creates a function that returns an array of student objects with properties: id, firstName, and location.

### 1. More Mapping
- File: `1-get_list_student_ids.js`
- Description: Implements a function that returns an array of student ids using the map function.

### 2. Filter
- File: `2-get_students_by_loc.js`
- Description: Creates a function that returns an array of students from a specific location using the filter function.

### 3. Reduce
- File: `3-get_ids_sum.js`
- Description: Implements a function that returns the sum of all student ids using the reduce function.

### 4. Combine
- File: `4-update_grade_by_city.js`
- Description: Creates a function that updates student grades by city using filter and map combined.

### 5. Typed Arrays
- File: `5-typed_arrays.js`
- Description: Implements a function that creates an Int8 typed array with specific values at given positions.

### 6. Set Data Structure
- File: `6-set.js`
- Description: Creates a function that returns a Set from an array.

### 7. More Set Data Structure
- File: `7-has_array_values.js`
- Description: Implements a function that checks if all elements in an array exist within a Set.

### 8. Clean Set
- File: `8-clean_set.js`
- Description: Creates a function that returns a string of all Set values that start with a specific string.

### 9. Map Data Structure
- File: `9-groceries_list.js`
- Description: Implements a function that returns a Map of groceries with name and quantity.

### 10. More Map Data Structure
- File: `10-update_uniq_items.js`
- Description: Creates a function that updates all items with initial quantity at 1 to 100.

### 11. Weak Link Data Structure
- File: `100-weak.js`
- Description: Implements a WeakMap to track API endpoint calls and throws an error when the load is high.

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project directory is mandatory
- Code files should use the .js extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- All functions must be exported

## Setup
1. Install NodeJS 12.11.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. Verify the installation
```bash
nodejs -v
npm -v
```

3. Install project dependencies
```bash
npm install
```

## Testing
Run all tests:
```bash
npm run full-test
```

Run specific test:
```bash
npm run dev <filename>
```

## ESLint
Check code quality:
```bash
npm run lint
```

## Author
<Victor paul>

## License
This project is part of the ALX Backend JavaScript curriculum.
