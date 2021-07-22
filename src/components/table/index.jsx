import React from 'react';
import {TableStyle, StyledTD, StyledTH, Marks} from './styles'
export const Table = ({sortData, cars}) => (
<TableStyle>
    <thead>
        <StyledTH onClick={()=>{sortData('mark+model')}}>Марка и модель</StyledTH>
        <StyledTH onClick={()=>{sortData('tariffs["Эконом"]')}}>Эконом</StyledTH>
        <StyledTH onClick={()=>{sortData('tariffs["Комфорт"]')}}>Комфорт</StyledTH>
        <StyledTH onClick={()=>{sortData('tariffs["Комфорт+"]')}}>Комфорт+</StyledTH>
        <StyledTH onClick={()=>{sortData('tariffs["Минивен"]')}}>Минивен</StyledTH>
        <StyledTH onClick={()=>{sortData('tariffs["Бизнес"]')}}>Бизнес</StyledTH>
    </thead>
    <tbody>
        {cars && cars.map(car => (
            <tr key={ car.mark + car.model }>
                <Marks>{car.mark + "   " + car.model}</Marks>
                <StyledTD>{car.tariffs["Эконом"]}</StyledTD>
                <StyledTD>{car.tariffs["Комфорт"]}</StyledTD>
                <StyledTD>{car.tariffs["Комфорт+"]}</StyledTD>
                <StyledTD>{car.tariffs["Минивен"]}</StyledTD>
                <StyledTD>{car.tariffs["Бизнес"]}</StyledTD>
            </tr>
        ))}
    </tbody>
</TableStyle>
)

export default Table