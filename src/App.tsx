import { ConnectorModel, DiagramComponent, NodeModel,
  AnnotationConstraints
 } from "@syncfusion/ej2-react-diagrams";
import './App.css';
import { useState, useRef, useEffect } from "react";

function App() {
  const diagramRef = useRef<DiagramComponent>(null);
  const [nodes, setNodes]= useState<NodeModel[]> ([
    {
      id: "n1",
      offsetX: 500,
      offsetY: 90,
      shape: { type: "Flow", shape: "Terminator" },
      annotations :[{ content : "Start", constraints:AnnotationConstraints.ReadOnly,
        // hyperlink:{
        //   link:"http://www.syncfusion.com",
        //   content:'My Hyperlink',
        //   hyperlinkOpenState:'CurrentTab'
        // }
      }],
    },
    {
      id: "n2",
      offsetX: 500,
      offsetY: 190,
      shape: { type: "Basic", shape: "Parallelogram" },
      annotations : [{content:"Enter a number :", 
        style :{textWrapping:"Wrap",// fontFamily:"TimesNewRoman", fontSize:14

        }
      }]
    },
    {
      id: "n3",
      offsetX: 500,
      offsetY: 290,
      shape: { type: "Flow", shape: "Decision" },
      annotations:[{content:"N is divisible by 2", offset:{x:0, y:0}
      //horizontalAlignment:"Left", verticalAlignment:"Top"
    }]
    },
    {
      id: "n4",
      offsetX: 500,
      offsetY: 390,
      shape: { type: "Flow", shape: "Process" },
      annotations :[{content : "N is Odd",}]
    },
    {
      id: "n5",
      offsetX: 800,
      offsetY: 290,
      shape: { type: "Flow", shape: "Process" },
      annotations :[{content : "N is Even"}]
    },
    {
      id: "n6",
      offsetX: 500,
      offsetY: 490,
      shape: { type: "Flow", shape: "Terminator" },
      annotations :[{content:"End"}]
    },
  ]);
  const [connectors, setConnectors] = useState<ConnectorModel[]>([
    { id: "connector1", sourceID: "n1", targetID: "n2" },
    { id: "connector2", sourceID: "n2", targetID: "n3" },
    { id: "connector3", sourceID: "n3", targetID: "n4",
      annotations:[{content:"False", style :{fill:"white"}, alignment:"Before",
      displacement:{x:5, y:5}
      }]
    },
    { id: "connector4", sourceID: "n3", targetID: "n5",
      annotations:[{content:"True", style :{fill:"white"}, offset:0, alignment:"After",
        displacement:{x:5, y:5}
      }]
    },
    { id: "connector5", sourceID: "n4", targetID: "n6" },
    { id: "connector6", sourceID: "n5", targetID: "n6",  type:"Orthogonal",
      segments:[{direction:"Bottom", length:180},
        {direction:"Left", length:200}
      ]
    },
  ]);
  const nodeDefaults = (node : NodeModel) =>{
    node.width = 160;
    node.height = 40;
    return node;
  };
  // useEffect(()=>{
  //   if(diagramRef.current){
  //     diagramRef.current.addLabels(nodes[3], [{content:"N is Odd"}]);
  //     diagramRef.current.addLabels(connectors[3], [{content:"True"}]);
  //   }
  // })
  const addAnnotations = ()=>{
    const newNodes = nodes.map((node)=>{
      if(node.id === "n4"){
        return {...node, annotations:[{content:"N is Odd"}]}
      }
      return node;
    })
    const newConnectors = connectors.map((connector)=>{
      if(connector.id === "connector4"){
        return {...connector, annotations:[{content:"True", style:{fill:"white"}}]}
      }
      return connector;
    })
    setNodes(newNodes);
    setConnectors(newConnectors);
  }
  return(
    <div>
      <button onClick={addAnnotations}> Add Annotations</button>
      <DiagramComponent 
        id="container"
        ref = {diagramRef}
        width={"100%"} height={"750px"} 
        nodes={nodes} connectors={connectors}
        getNodeDefaults={nodeDefaults}
      />
    </div>
  ) 
};

export default App;
