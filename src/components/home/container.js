import React, {useEffect, useState} from "react";
import dateFormat from "dateformat";
import googleIcon from '../../icn-google.png'
import wazeIcon from '../../icn-waze.png'
import appleIcon from '../../icn-apple-map.png'

export default function Container () {

  const [backendUrl] = useState("http://localhost:3003/speaker");
  const [speakers, setSpeakers] = useState({list:[]});

  useEffect(()=>{
    fetch(backendUrl, {
      "Method": "GET",
      "Accept": "application/json"      
    })
    .then(response =>{
      return (response.json());
    })
    .then(data => {      
      setSpeakers({list: data});
    })
    .catch(err => {
      console.log("An error occured.", err);
    });
  }, [backendUrl]);

  return ( 
      <div className="container text-start pt-5 pb-5">
        <div className="row justify-content-between">
          <div className="col-8">
            <div className="container text-start">
              <div className="row pb-4">
                <p>Tarrant countywide meets on the first Saturday of every month for food, 
                  fellowship, service and great A.A. speakers.
                </p>
              </div>
              <div className="row pb-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Speaker</th>
                    <th scope="col">Homegroup</th>
                    <th scope="col">Flyer</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    speakers.list.map(s =>{
                      const date = new Date(s.date);
                      const dateFormatted = dateFormat(date, "mmmm dS, yyyy");
                      return(
                        <tr key={s.id}>
                          <td>{dateFormatted}</td>
                          <td>{s.name}</td>
                          <td>{s.homeGroup.name}</td>
                          <td><a href={s.flyer} className="link-primary">view</a></td>
                        </tr>
                      )
                    })
                  }
                  <tr>
                    <td>February 4, 2023</td>
                    <td>Rick W.</td>
                    <td>Get in the car group</td>
                    <td><a href="#" className="link-primary">view</a></td>                     
                  </tr>
                  <tr>
                    <td>April 1, 2023</td>
                    <td>David B.</td>
                    <td>Northland group</td>
                    <td><a href="#" className="link-primary">view</a></td>        
                  </tr>
                  <tr>
                    <td>May 6, 2023</td>
                    <td>Jenny L.</td>
                    <td>Chicago group</td>
                    <td><a href="#" className="link-primary">view</a></td> 
                  </tr>
                  <tr>
                    <td>June 3, 2023</td>
                    <td>Katie T.</td>
                    <td>Frisco group</td>
                    <td><a href="#" className="link-primary">view</a></td> 
                  </tr>                 
                </tbody>
              </table>
              </div>
              <div className="row pb-5">
                <div className="container">
                  <div className="row pb-3">
                    <div className="col-6">
                      <p><b>Location</b><br/>1140 Morrison Dr<br/>Fort Worth, Texas 76120</p>                
                    </div>
                    <div className="col-6">
                      <p><b>Time</b><br/>6:00 PM (central time): Fellowship<br/>7:00 PM (central time): Open speaker</p>                
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <a href="https://goo.gl/maps/YhEEhrR37wZownXS6"><img src={googleIcon} alt="google map" className="img-fluid" style={{maxHeight: "75px"}}></img></a>
                    </div>
                    <div className="col-2">
                      <a href="https://www.waze.com/en/live-map/directions/city-on-a-hill-morrison-dr-1140-fort-worth?to=place.w.172228936.1722354892.3328387"><img src={wazeIcon} alt="waze" className="img-fluid" style={{maxHeight: "75px"}}></img></a>
                    </div>
                    <div className="col-2">
                      <a href="https://maps.apple.com/?address=1140%20Morrison%20Dr,%20Fort%20Worth,%20TX%20%2076120,%20United%20States&auid=3783947390329831438&ll=32.762481,-97.192445&lsp=9902&q=City%20On%20a%20Hill&_ext=ChkKBQgEEOIBCgQIBRADCgQIBhB9CgQIChAAEiYpEVK3pAVhQEAxdeq1ralMWMA5jyfdACxiQEBBxVP/p/pLWMBQAw%3D%3D"><img src={appleIcon} alt="apple map" className="img-fluid" style={{maxHeight: "75px"}}></img></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
          <div className="col-4">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card" style={{maxWidth: "18rem"}}>
                    <div className="card-header">
                      <h4>Kids welcome</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Free licensed childcare is provided.</p>
                      <a href="#" className="link-primary">more information</a>                      
                    </div>              
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <div className="card" style={{maxWidth: "18rem"}}>
                      <div className="card-header">
                        <h4>Stay informed</h4>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Sign up to get updates!</p>
                        <form>
                          <div className="row g-3">
                            <label htmlFor="email" className="form-labl">Email</label>
                            <input type="text" className="form-control" id="email" />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                          </div>                                                      
                      </form>
                      </div>                      
                  </div>
                </div>
              </div>            
          </div>
        </div>
      </div>
    </div>
  );
}
