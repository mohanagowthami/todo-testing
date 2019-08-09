import React, { Component } from "react";
import { all, active, completed } from "../constants.js";
export default class TodoStateSelection extends Component {
  submit = e => {
    this.props.onStateUpdate(e.target.value);
  };

  render() {
    return (
      <div>
        <button
          value={completed}
          onClick={this.submit}
          data-testid={completed}
        />
        <button value={all} onClick={this.submit} data-testid={all} />
        <button value={active} onClick={this.submit} data-testid={active} />
      </div>
    );
  }
}
