import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

const TextInputNode = ({ id, data, isConnectable }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    data.onChange(id, { ...data, value: newValue });
  };

  return (
    <div className="">
      <label>{data.label}</label>
      <input type="text" onChange={handleChange} value={data.value || ""} />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

const CheckboxNode = ({ id, data, isConnectable }) => {
  const handleChange = (e) => {
    const newChecked = e.target.checked;
    data.onChange(id, { ...data, checked: newChecked });
  };

  return (
    <div className="node">
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={data.checked || false}
        />
        {data.label}
      </label>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

// Custom Select Node
const SelectNode = ({ id, data, isConnectable }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    data.onChange(id, { ...data, value: newValue });
  };

  return (
    <div className="node">
      <label>{data.label}</label>
      <select onChange={handleChange} value={data.value || ""}>
        {data.options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

const initialNodes = [
  {
    id: "1",
    type: "textInputNode",
    position: { x: 250, y: 0 },
    data: { label: "Name", value: "", onChange: null },
  },
  {
    id: "2",
    type: "checkboxNode",
    position: { x: 250, y: 100 },
    data: { label: "Accept Terms", checked: false, onChange: null },
  },
  {
    id: "3",
    type: "selectNode",
    position: { x: 250, y: 200 },
    data: {
      label: "Favorite Color",
      value: "",
      options: ["Red", "Green", "Blue"],
      onChange: null,
    },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const nodeTypes = {
  textInputNode: TextInputNode,
  checkboxNode: CheckboxNode,
  selectNode: SelectNode,
};

function FlowForm() {
  const handleChange = (id, updatedData) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: updatedData } : node
      )
    );
  };
  const [nodes, setNodes] = useState(
    initialNodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        onChange: handleChange,
      },
    }))
  );
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) =>
      nds.map((node) => {
        const change = changes.find((c) => c.id === node.id);
        if (change) {
          return {
            ...node,
            ...change,
            position: change.position || node.position,
          };
        }
        return node;
      })
    );
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: "500px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default FlowForm;
