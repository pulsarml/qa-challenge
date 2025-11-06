# QA Challenge - Cypress Test Project

## Tasks

1. Run the tests in the 2 modes
1. Figure out why one of the tests is failing
1. Implement login flow (ask for a user/password if not provided)
1. In the second test, test whether the machine list in the realtime page loads correctly
1. Move the login flow to a Cypress command so that it can be reused in other tests
1. (bonus) Do not hard-code user password

## Project Structure

```
qa-challenge/
├── cypress/
│   ├── e2e/
│   │   └── main-test.cy.js    # Main test file
│   ├── support/
│   │   └── e2e.js             # Support file for global configurations
│   └── fixtures/              # Test data files (if needed)
├── cypress.config.js          # Cypress configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## Prerequisites

- Node.js (version 20 or higher)
- npm

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Run tests in headless mode

```bash
npm test
# or
npm run cypress:run
```

### Open Cypress Test Runner (GUI)

```bash
npm run test:open
# or
npm run cypress:open
```
