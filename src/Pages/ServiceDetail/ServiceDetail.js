import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../Hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId)
    // useEffect(()=>{
    //     fetch(`https://pure-sands-61288.herokuapp.com/service/${serviceId}`, 
    //     // {
    //     //     headers : { 
    //     //         'Content-Type': 'application/json',
    //     //         'Accept': 'application/json'
    //     //        }
    //     // }
    //     )
    //     .then(res=>res.json())
    //     .then(data => setService(data))
    // },[])
    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;