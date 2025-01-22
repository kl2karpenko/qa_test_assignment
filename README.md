### **QA Assignment for Mid-Level QA Position**

#### **Objective**
This assignment evaluates your ability to:
1. Analyze a simple application and write test cases.
2. Perform manual testing and report issues.
3. Write automated tests using **JavaScript** and **Jest**.

---

### **Application Details**
The provided application is a **React + Vite project** with the following features:
1. A form for submitting new items, including:
    - **Title**: A text field for the item title.
    - **Price**: A text field for the item price.
    - A **submit button** to add the item to the list.
2. **Validation Rules**:
    - Both fields are required.
    - The price must be a positive number.
3. A dynamic **list of items** is displayed below the form after successful submission.
4. Error messages are shown for invalid inputs.

### **Task Description**

#### **1. Write Manual Test Cases**
Analyze the application’s functionality and write **at least 5 manual test cases**, ensuring coverage of:
- Form validation.
- Successful form submission.
- Display of error messages for invalid inputs.
- Behavior when adding multiple items.

**Deliverable:**
- Submit a document (e.g., Word, PDF, or Markdown) with your test cases, using the following format:
  ```plaintext
  Test Case ID: TC001
  Title: Verify error message for empty form submission.
  Steps:
    1. Open the application.
    2. Leave all fields empty.
    3. Click the "Add Item" button.
  Expected Result:
    An error message "Both fields are required." is displayed.
  ```

---

#### **2. Perform Manual Testing**
Execute your written test cases on the provided application. Identify and report any bugs you find.

**Deliverable:**
- Submit a bug report document (e.g., Excel, Word, or Markdown) using the following format:
  ```plaintext
  Bug ID: BUG001
  Title: Error message does not clear after successful submission.
  Steps to Reproduce:
    1. Submit the form with empty fields.
    2. Correct the fields and submit again.
  Expected Result: 
    The error message disappears after a successful submission.
  Actual Result:
    The error message remains on the screen.
  Severity: Medium
  ```

---

#### **3. Write Automated Tests**
Write **unit tests** using **Jest** for the following scenarios:
1. Verify that an error message is displayed when submitting the form with empty fields.
2. Verify that an error message is displayed when the price is invalid.
3. Verify that a valid item is added to the list after successful submission.
4. Verify that the form resets after a successful submission.

**Deliverable:**
- Provide the test script file(s) (e.g., `ItemForm.test.js`).
- Include instructions on how to run the tests (e.g., `npm test`).

---