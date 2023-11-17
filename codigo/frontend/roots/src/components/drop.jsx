import React from 'react';

// Estilos CSS definidos como objetos
const styles = {
  drop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '55px',
    left: '-4px',
  },
  dndnode: {
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    cursor: 'grab',
    color: 'black',
    backgroundColor: 'white',
  },
  inputButton: {
    border: '2px solid #F29BCB',
  },
  hubButton: {
    border: '2px solid #7F00FF',
  },
  tankButton: {
    border: '2px solid #034C8C',
  },
  valveButton: {
    border: '2px solid #FF8D59',
  },
  outputButton: {
    border: '2px solid #F24738',
  },
};

// Componente Drop
const Drop = () => {
  // Função chamada ao iniciar uma operação de arrastar
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType); // Define os dados de transferência
    event.dataTransfer.effectAllowed = 'move'; // Define o efeito permitido (movimento)
  };

  return (
    <div style={styles.drop}>
      <aside>
        {/* Componentes de nó arrastáveis */}
        <div
          className="dndnode input square"
          onDragStart={(event) => onDragStart(event, 'Input')}
          draggable
          style={{ ...styles.dndnode, ...styles.square, ...styles.inputButton }}
        >
          <span>Input</span>
        </div>
        <div
          className="dndnode input square"
          onDragStart={(event) => onDragStart(event, 'Hub')}
          draggable
          style={{ ...styles.dndnode, ...styles.square, ...styles.hubButton }}
        >
          <span>Hub</span>
        </div>
        <div
          className="dndnode square"
          onDragStart={(event) => onDragStart(event, 'Tank')}
          draggable
          style={{ ...styles.dndnode, ...styles.square, ...styles.tankButton }}
        >
          <span>Tank</span>
        </div>
        <div
          className="dndnode output square"
          onDragStart={(event) => onDragStart(event, 'Valve')}
          draggable
          style={{ ...styles.dndnode, ...styles.square, ...styles.valveButton }}
        >
          <br></br>
          <span>Valve</span>
        </div>
        <div
          className="dndnode output square"
          onDragStart={(event) => onDragStart(event, 'Input')}
          draggable
          style={{ ...styles.dndnode, ...styles.square, ...styles.outputButton }}
        >
          <br></br>
          <span>Output</span>
        </div>
      </aside>
    </div>
  );
};

export default Drop;
