# TypeScript Project

## Description
This project contains a series of tasks designed to learn and practice TypeScript concepts including:
- Basic types and interfaces
- Classes and inheritance
- Namespaces
- Declaration merging
- Ambient namespaces
- Advanced types
- Brand conventions
- Nominal typing

## Project Structure
```
0x04-TypeScript/
├── task_0/
│   ├── js/
│   │   └── main.ts         # Basic TypeScript examples
│   ├── package.json
│   ├── .eslintrc.js
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_1/
│   ├── js/
│   │   └── main.ts         # Teacher interface and class implementations
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_2/
│   ├── js/
│   │   └── main.ts         # Advanced interfaces and class implementations
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_3/
│   ├── js/
│   │   ├── main.ts         # Ambient namespaces and crud operations
│   │   ├── interface.ts
│   │   └── crud.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_4/
│   ├── js/
│   │   ├── main.ts
│   │   └── subjects/       # Namespace and declaration merging
│   │       ├── Cpp.ts
│   │       ├── Java.ts
│   │       ├── React.ts
│   │       ├── Subject.ts
│   │       └── Teacher.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
└── task_5/
    ├── js/
    │   └── main.ts         # Brand convention & Nominal typing
    ├── package.json
    ├── tsconfig.json
    └── webpack.config.js
```

## Requirements
- Node.js
- npm
- TypeScript
- Webpack
- Ubuntu 18.04 LTS
- Jest for testing

## Setup
1. Clone the repository:
```bash
git clone https://github.com/Boozmanras/alx-backend-javascript.git
```

2. Navigate to project directory:
```bash
cd alx-backend-javascript/0x04-TypeScript
```

3. For each task directory, install dependencies:
```bash
cd task_N && npm install
```

4. Build the project:
```bash
npm run build
```

## Tasks Overview

### Task 0: Creating an interface for a student
- Create a Student interface
- Render table with student information

### Task 1: Teacher interface and class
- Create Teacher interface
- Implement class with interface
- Create and use print teacher function

### Task 2: Advanced types and interfaces
- Create Director and Teacher interfaces
- Implement class inheritance
- Create employee creation functions

### Task 3: Ambient Namespaces
- Create interfaces for rows
- Implement CRUD operations
- Use ambient namespaces

### Task 4: Namespaces & Declaration merging
- Create Subject namespace
- Implement Teacher interface
- Create multiple subject classes
- Use declaration merging

### Task 5: Brand convention & Nominal typing
- Create branded interfaces
- Implement credit summation functions
- Use nominal typing

## Testing
Run tests using Jest:
```bash
npm test
```

## Development Tools
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line
- Code will be transpiled using Webpack
- TypeScript compiler should show no errors
- Code uses `.ts` extension where possible

## Additional Information
- All files are transpiled on Ubuntu 18.04
- TypeScript scripts are checked with Jest (version 24.9.*)
- Configuration files included for each task
- ESLint used for code style enforcement

## Author
<Victor paul>

## License
This project is part of ALX backend software enginnering curriculum
