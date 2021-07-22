import styled from "styled-components"

export const TableStyle = styled.table`
    display: table;
    border-spacing: none;
    flex-direction: column;
    border-collapse: collapse;
    margin: 40px;
    border: 1px solid #E6EBF0;
    box-sizing: border-box;
`

export const StyledTH = styled.th`
    width: 200px;
    min-width: 150px;
    height: 48px;
    flex: none;
    flex-grow: 0;
    margin: 0px 0px;
    background: rgba(240, 242, 244, 0.5);
    /* box-shadow: inset -1px 0px 0px rgba(198, 209, 221, 0.5); */
    border: 1px solid rgba(198, 209, 221, 0.5);
    
`

export const StyledTD = styled.td`
    width: 200px;
    min-width: 150px;
    height: 40px;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
    background: #FFFFFF;
    /* box-shadow: inset -1px -1px 0px  rgba(198, 209, 221, 0.5); */
    border-bottom: 1px solid rgba(198, 209, 221, 0.5);
    border-right: 1px solid rgba(198, 209, 221, 0.5);

    font-family: IBM Plex Mono;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #1F232E;
    text-align: center;



`

export const Marks = styled(StyledTD)`
    width: 186px; //ширина отличается из-за паддинга
    min-width: 134px;
    text-align: start;
    padding-left: 16px;
    
`