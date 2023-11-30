import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapaContacto = () => {
    const mapContainerStyle = {
        width: '90%',
        height: '500px',
    };

    const center = {
        lat: 5.827072,
        lng: -73.0342347,
    };
    return (
        <>
            <div className='container'>
                <h2 className='text-center'>Encuentranos de Manera Fisica en el Centro Comercial la Calleja Local 107</h2>
                <div className="container d-flex justify-content-center">

                    <LoadScript googleMapsApiKey="AIzaSyCisbMMAS2kwVHytJcXVBeIdCifZ08zTMU">
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={18}
                        >
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </>
    )
}
export default MapaContacto;