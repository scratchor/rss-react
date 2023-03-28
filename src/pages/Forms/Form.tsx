import React, { Component, createRef } from "react";

import "./Form.less";

class Form extends Component<object, object> {
  private firstName = createRef<HTMLInputElement>();
  private lastName = createRef<HTMLInputElement>();
  private email = createRef<HTMLInputElement>();
  private birthday = createRef<HTMLInputElement>();
  private timeOfTheYear = createRef<HTMLSelectElement>();
  private vehicle = createRef<HTMLSelectElement>();
  private hobbies = createRef<HTMLInputElement>();
  private computerGames = createRef<HTMLInputElement>();
  private programming = createRef<HTMLInputElement>();
  constructor(props: object) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Personal info:</legend>

            <label htmlFor="fname">
              <span>First name:</span>
              <input type="text" id="fname" name="fname" ref={this.firstName} />
            </label>
            <label htmlFor="lname">
              <span>Last name:</span>
              <input type="text" id="lname" name="lname" ref={this.lastName} />
            </label>
            <label htmlFor="email">
              <span>Email:</span>
              <input type="email" id="email" name="email" ref={this.email} />
            </label>
            <label htmlFor="birthday">
              <span>Birthday:</span>
              <input
                type="date"
                id="birthday"
                name="birthday"
                ref={this.birthday}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>What do You like:</legend>

            <label htmlFor="time of the year">
              <span>Time of the year</span>
              <select
                defaultValue={""}
                name="time of the year"
                id="time of the year"
                ref={this.timeOfTheYear}
              >
                <option value="" disabled hidden>
                  Choose you favorite time of the year..
                </option>
                <option value="summer">summer</option>
                <option value="autumn">autumn</option>
                <option value="winter">winter</option>
                <option value="spring">spring</option>
              </select>
            </label>

            <label htmlFor="vehicle">
              <span>Vehicle</span>
              <select
                defaultValue={""}
                name="vehicle"
                id="vehicle"
                ref={this.vehicle}
              >
                <option value="" disabled hidden>
                  Choose you favorite vehicle..
                </option>
                <option value="scooter">scooter</option>
                <option value="bike">bike</option>
                <option value="motorcycle">motorcycle</option>
                <option value="car">car</option>
                <option value="motorboat">motorboat</option>
                <option value="aircraft">aircraft</option>
                <option value="helicopter">helicopter</option>
              </select>
            </label>

            <label htmlFor="hobbies">
              <span>Hobbies:</span>
              <input
                type="text"
                id="hobbies"
                name="hobbies"
                ref={this.hobbies}
              />
            </label>

            <label htmlFor="computer games">
              <span>Computer games:</span>
              <input
                type="checkbox"
                id="computer games"
                name="computer games"
                ref={this.computerGames}
              />
            </label>

            <label htmlFor="programming">
              <span>Programming:</span>
              <input
                type="checkbox"
                id="programming"
                name="programming"
                ref={this.programming}
              />
            </label>
          </fieldset>

          <input className={"submit-btn"} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
