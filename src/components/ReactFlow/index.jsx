import { useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import './index.css';

const initialNodes = [
  {
    id: '1',
    data: { 
        label: (
            <div style={{width: '100vw', display: 'inline-flex'}}>
                <div style={{width: '10vw', textAlign: 'start', marginLeft: '0px', paddingLeft: '0px', paddingTop: '30px',  fontWeight: 'bold'}}>Bachelor</div>
                <div style={{width: '32vw', padding: '10px'}}>
                    <div style={{ textAlign: 'start' ,fontWeight: 'bold', padding: '1px'}}>Faculty of Engineering and Technology, Jain University</div>
                    <div style={{textAlign: 'start', padding: '1px'}}>B.Tech</div>
                    <div style={{textAlign: 'start', padding: '1px'}}>CGPA: 9.0/10.0</div>
                </div>
                <div style={{width: '48vw'}}>
                    <div style={{float: 'right', padding: '10px', paddingRight: '30px'}}>
                        <span>Bengaluru, Karnataka, India  2017 - 2021</span>
                    </div>
                </div>
            </div>
        ) 
    },
    position: { x: 30, y: 50 },
  },
  {
    id: '2',
    data: { 
        label: (
            <div style={{width: '100vw', display: 'inline-flex'}}>
                <div style={{width: '10vw', padding: '10px', textAlign: 'start', marginLeft: '0px', paddingLeft: '0px', paddingTop: '30px', fontWeight: 'bold'}}>PUC</div>
                <div style={{width: '32vw', padding: '10px'}}>
                    <div style={{textAlign: 'start', fontWeight: 'bold', padding: '1px'}}>St. Francis De Sales PU College</div>
                    <div style={{textAlign: 'start', padding: '1px'}}>PCMC</div>
                    <div style={{textAlign: 'start', padding: '1px'}}>CGPA: 9.0/10.0</div>
                </div>
                <div style={{width: '48vw'}}>
                    <div style={{float: 'right', padding: '10px', paddingRight: '30px'}}>
                        <span>Bengaluru, Karnataka, India  2015 - 2017</span>
                    </div>
                </div>
            </div>
        ) 
    },
    position: { x: 30, y: 250 },
  },
  {
    id: '3',
    data: { 
        label: (
            <div style={{width: '100vw', display: 'inline-flex'}}>
                <div style={{width: '10vw', textAlign: 'start', marginLeft: '0px', paddingLeft: '0px', paddingTop: '30px', fontWeight: 'bold'}}>SSLC</div>
                <div style={{width: '32vw', padding: '10px'}}>
                    <div style={{textAlign: 'start', fontWeight: 'bold', padding: '1px'}}>D.A.V Public School</div>
                    <div style={{textAlign: 'start', padding: '1px'}}>SSLC</div>
                    <div style={{textAlign: 'start', padding: '1px'}}>CGPA: 9.0/10.0</div>
                </div>
                <div style={{width: '48vw'}}>
                    <div style={{float: 'right', padding: '10px', paddingRight: '30px'}}>
                        <span>Muzaffarpur, Bihar, India  2013 - 2015</span>
                    </div>
                </div>
            </div>
        ) 
    },
    position: { x: 30, y: 450 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const reactFlowStyle = {
    //background: '#e3e6e9',
    background: "#fcfcfc",
    width: '100%',
    height: 600,
  };

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <ReactFlow 
        nodes={nodes} 
        edges={edges}  
        style={reactFlowStyle}
        draggable={false}
        zoomOnPinch={false}
        zoomOnScroll={false}
        zoomActivationKeyCode={false}
        zoomOnDoubleClick={false}
    />
  )
}

export default Flow;
