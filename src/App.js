import logo from './logo.svg';
import styles from './App.models.css';
import styled from 'styled-components';
import Square from './component/square';
import React, { useState } from 'react';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlay, setxPlay] = useState(true)
  const handlePlay = (index) =>{
    const temp = board.slice()
    if (xPlay) {
      temp[index] = "X"
    } else {
      temp[index] = "O"
    }
    setBoard(temp)
    setxPlay(!xPlay)
  }
  const winner = caculateWinner(board)
  return (
    <Container>
      {winner ? <h2>{winner} is winner </h2> : null}
    <Board>
    {board.map((item, index) => <Square handlePlay={() =>{handlePlay(index)}} value={item} />)}
    </Board>
    <button type="button" style={{backgroundColor:"hwb(199deg 1% 4%)",padding:"8px" , marginTop:"20px", borderRadius:"100px"}} onClick={refreshPage}> <span>Reload</span> </button>
    </Container>
  );
}
function refreshPage() {
  window.location.reload();
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Board =styled.div`
  background: lightgray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 300px;
  margin: auto;
`;
const caculateWinner= (board) =>{
  const winline= [
    [0, 1, 2],
    [2, 3, 4],
    [2, 6, 7],
    [5, 3, 1],
    [9, 7, 4],
    [6, 2, 8],
    [2, 1, 5],
    [0, 5, 1],
    [7, 2, 1]

  ]
  for(let i = 0; i< winline.length; i++ ){
    const [a,b,c] = winline[i]
    if (board[a] === board[b] && board[a ] === board[c]) {
      return board[a]
    }
    return null;
  }
}

export default App;
