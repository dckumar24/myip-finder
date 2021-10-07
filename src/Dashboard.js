import React from 'react';
import './Dashboard.css';

const Dashboard=({detail})=>{

    console.log(detail);
//    const {calling_code,city,connection_type,continent_code,continent_name,country_capital,
//             country_code3,
//             country_flag,
//             country_name,
//             district,
//             ip,
//             latitude,
//             longitude,
//             organization,
//             state_prov,
//             zipcode}={details};
                  
    return (
        detail!=null?(
                <div className="table-body">
                    <div className="table-head">IP :</div><div className="table-data">{detail.ip}</div>
                    <div className="table-head">Country:</div><div className="table-data"> {detail.country_name} | <img src={detail.country_flag} width="30px" alt={detail.ountry_name}/></div>
                    <div className="table-head">Country capital:</div><div className="table-data">{detail.country_capital}</div>
                    <div className="table-head">Latitude:</div><div className="table-data">{detail.latitude}</div>
                    <div className="table-head">Longitude:</div><div className="table-data">{detail.longitude}</div>
                    <div className="table-head">State:</div><div className="table-data">{detail.state_prov}</div>
                    <div className="table-head">District:</div><div className="table-data">{detail.district}</div>
                    <div className="table-head">Zipcode:</div><div className="table-data">{detail.zipcode}</div>
                </div>
    ):<div>Enter name and submit</div>
        );
}
export default Dashboard;