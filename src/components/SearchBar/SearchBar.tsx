import React, { Component } from "react";

type SearchBarProps = {
  inputValue: string;
  placeholder: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

class SearchBar extends Component<SearchBarProps, object> {
  render() {
    return (
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          padding: "20px 0 40px 0",
        }}
        onSubmit={
          this.props.handleSubmit
            ? this.props.handleSubmit
            : (e: React.FormEvent<HTMLFormElement>) => e.preventDefault()
        }
      >
        <label style={{ fontWeight: 500 }}>
          Find:
          <input
            style={{ margin: "0 10px 0 5px" }}
            type="text"
            value={this.props.inputValue}
            placeholder={this.props.placeholder}
            onChange={(e) => this.props.handleInput(e)}
          />
        </label>
        <input type="submit" value="Find" />
      </form>
    );
  }
}

export default SearchBar;
