import CardsInicio from "../components/CardsInicio";
import CarruselAInicio from "../components/CarruselAInicio";
import CarruselInicio from "../components/CarruselInicio";
import ColumnasInicio from "../components/ColumnasInicio";

const Inicio = () => {
    return (
        <>
            <CarruselInicio /> 
            <ColumnasInicio />
            <CardsInicio/>
            <br />
            <CarruselAInicio/>
        </>
    )
}
export default Inicio;        