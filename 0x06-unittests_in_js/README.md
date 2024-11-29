# Unit Testing in JavaScript

This repository contains tasks and exercises focused on unit testing in JavaScript using tools like Mocha, Chai, and Sinon. Each task builds upon the previous, introducing concepts such as assertions, spies, stubs, hooks, async testing, and integration testing.

---

## Requirements

- All code is tested and executed on **Ubuntu 18.04** using **Node.js 12.x.x**.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- Files must end with a new line.
- JavaScript files should use the `.js` extension.
- Tests must run without errors or warnings using `npm test`.
- A `README.md` file is mandatory at the root of the project directory.

---

## Tasks and Files

### Task 0: Basic Test with Mocha and Node Assertion Library
- **File**: `0-calcul.js`, `0-calcul.test.js`
- **Description**: Implements a `calculateNumber` function that rounds two numbers and returns their sum. Unit tests verify the function's behavior using Node's `assert` library.

---

### Task 1: Combining Descriptions
- **File**: `1-calcul.js`, `1-calcul.test.js`
- **Description**: Enhances the `calculateNumber` function to handle three operations: `SUM`, `SUBTRACT`, and `DIVIDE`. Includes tests organized with `describe`.

---

### Task 2: Basic Test Using Chai Assertion Library
- **File**: `2-calcul_chai.js`, `2-calcul_chai.test.js`
- **Description**: Rewrites tests for `calculateNumber` using Chai's `expect` for a more readable, behavior-driven style.

---

### Task 3: Spies
- **File**: `utils.js`, `3-payment.js`, `3-payment.test.js`
- **Description**: Uses Sinon spies to verify calls to the `Utils.calculateNumber` function within the `sendPaymentRequestToApi` function.

---

### Task 4: Stubs
- **File**: `4-payment.js`, `4-payment.test.js`
- **Description**: Introduces Sinon stubs to mock `Utils.calculateNumber`, ensuring controlled test behavior and verifying interactions with the stubbed method.

---

### Task 5: Hooks
- **File**: `5-payment.js`, `5-payment.test.js`
- **Description**: Demonstrates the use of `beforeEach` and `afterEach` hooks to manage a Sinon spy for consistent test setup and teardown.

---

### Task 6: Async Tests with Done
- **File**: `6-payment_token.js`, `6-payment_token.test.js`
- **Description**: Tests asynchronous behavior using a `getPaymentTokenFromAPI` function that resolves a promise. Uses the `done` callback to handle async tests.

---

### Task 7: Skip
- **File**: `7-skip.test.js`
- **Description**: Skips a failing test using Mocha's `it.skip` to allow other tests to run without modification.

---

### Task 8: Basic Integration Testing
- **File**: `8-api/`
- **Description**: Implements integration testing for an Express-based API. Includes a separate `package.json` file for managing dependencies.

---

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Boozmanras/alx-backend-javascript.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 0x06-unittests_in_js
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests
Run tests for each task using:
```bash
npm test <test-file>.test.js
```

For example:
```bash
npm test 0-calcul.test.js
```

---

## Tools and Libraries Used
- **Mocha**: Test framework.
- **Chai**: Assertion library for behavior-driven testing.
- **Sinon**: Provides spies, stubs, and mocks for testing.
- **Express**: Web framework used for integration testing.

---

## Directory Structure
```
0x06-unittests_in_js/
├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── 5-payment.js
├── 5-payment.test.js
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── 8-api/
│   ├── index.js
│   ├── package.json
│   └── test/
```

---

## Author
[victor paul](https://github.com/Boozmaras)  
**GitHub Repository**: [alx-backend-javascript](https://github.com/Boozmanras/alx-backend-javascript)
