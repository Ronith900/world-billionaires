import React, { Component } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <Grid>
        <Chip label={this.formatCount()} color={this.renderColor()}></Chip>
        <Button
          color="primary"
          sx={{ ml: 2 }}
          variant="outlined"
          size="small"
          onClick={this.handleIncrement}
        >
          Increment
        </Button>
      </Grid>
    );
  }

  renderColor() {
    let color = "warning";
    return this.state.count === 0 ? color : "primary";
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
