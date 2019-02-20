import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 20px;

    div{
    
    font-size: 15px;
    color: #666; 
    align-items: center;
    display: flex;
    background: #FFF;
    border-radius: 4px;
    border: 2px solid #7159c1;
    justify-content: center;
    padding: 10px;
    }

    .git{
        font-size: 15px;
    color: #666; 
    align-items: center;
    display: flex;
    background: #FFF;
    border-radius: 4px;
    border: 2px solid #7159c1;
    justify-content: center;
    padding: 8px;

    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #444;

      & + li {
          margin-top: 10px;
      }
    }
`;
