import React from "react";
import BuildingTrack from "./BuildingTrack";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

// manages visualization of the global state
class BuildOrderVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.globalState;
  }

  render() {
    return (
      <div className="BuildOrderVisualizer">
        <table>
          <tbody>
            <tr style={{ verticalAlign: "top" }}>
              {Object.keys(this.state.buildOrderState.buildTimes.buildings).map(
                (value, index) => {
                  return <BuildingTrack buildingName={value} key={value} />;
                }
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { globalState: state };
}

export default connect(mapStateToProps)(BuildOrderVisualizer);
