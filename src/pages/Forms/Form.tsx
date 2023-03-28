import React, { Component } from "react";

import "./Form.less";

class Form extends Component<object, object> {
  constructor(props: object) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          Please, fill in the form
        </h2>

        <form>
          <fieldset>
            <legend>Personal info:</legend>
            <label htmlFor="fname">
              <span>First name:</span>
              <input type="text" id="fname" name="fname" />
            </label>
            <label htmlFor="lname">
              <span>Last name:</span>
              <input type="text" id="lname" name="lname" />
            </label>
            <label htmlFor="email">
              <span>Email:</span>
              <input type="email" id="email" name="email" />
            </label>
            <label htmlFor="birthday">
              <span>Birthday:</span>
              <input type="date" id="birthday" name="birthday" />
            </label>
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
