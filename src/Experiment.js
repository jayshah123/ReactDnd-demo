import React from "react";
import { DragSource, DropTarget, DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const Box = props => {
  const { connectDragSource } = props;
  return connectDragSource(
    <div
      style={{
        width: 50,
        height: 50,
        backgroundColor: "red",
        margin: 4,
        padding: 4
      }}
    >
      Box
    </div>
  );
};

const Bucket = props => {
  const { connectDropTarget } = props;
  return connectDropTarget(
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "blue",
        margin: 4,
        padding: 4
      }}
    >
      Bucket
    </div>
  );
};

const C = props => {
  const DBox = DragSource(
    "box",
    {
      beginDrag: function(props, sourceMonitor, component) {
        console.log("Box begin drag!");
        return {};
      }
    },
    (connector, monitor) => {
      return {
        connectDragSource: connector.dragSource()
      };
    }
  )(Box);

  const DBucket = DropTarget(
    "box",
    {
      hover: function(props, dropMonitor, c) {
        console.log("something hovered on bucket: props = ", props);
      },
      drop: function(props, dropmonitor, component) {
        console.log("something drpped in buckeT!");
      }
    },
    (connector, monitor) => {
      return {
        connectDropTarget: connector.dropTarget(),
        isOver: monitor.isOver()
      };
    }
  )(Bucket);

  return (
    <div style={{ width: 400, height: 400, backgroundColor: "green" }}>
      Hwllo
      <DBox />
      <DBox />
      <DBucket />
    </div>
  );
};

export default DragDropContext(HTML5Backend)(C);
