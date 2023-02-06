import React, {useState, useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { set, push, buildGroupNameIndex } from './../../../features/group/group-slice';

export default connect()(function Container(){

    const groups = useSelector((state) => state.group.value);
    const dispatch = useDispatch();

    const [baseUrl] = useState("https://localhost:7092");

    const [inputGroupName, setInputGroupName] = useState("");
    const [inputStreetAddress, setInputStreetAddress] = useState("");
    const [inputSuite, setInputSuite] = useState("");
    const [inputCity, setInputCity] = useState("");
    const [inputZipCode, setInputZipCode] = useState("");
    const [stateId, setStateId] = useState("");
    const [states, setStates] = useState({list:[]});
    

    useEffect(()=>{
        getStates(baseUrl);
        getGroups(baseUrl);
    }, [baseUrl]);

    function getStates(baseUrl){
        console.log("GET -> states");
        fetch(`${baseUrl}/state`, {
            method: "GET",
            headers: {                
                "Accept": "applicaiton/json"
            }
        })
        .then(response => response.json())
        .then(data => setStates({list: data}))
        .catch(err => console.log("An error occured.", err));
    }

   function getGroups(baseUrl){
        console.log("GET -> group");
        fetch(`${baseUrl}/group`, {
            method: "GET",
            headers: {                
                "Accept": "applicaiton/json"
            }
        })
        .then(response => response.json())
        //.then(data => setGroups({list: data}))
        .then(data=> { dispatch(set(data)); dispatch(buildGroupNameIndex());})
        .catch(err => console.log("An error occured.", err));
    }

    function postGroup(){
        
        console.log("POST -> groupName", inputGroupName);
        console.log("POST -> streetAddress", inputStreetAddress);
        console.log("POST -> suite", inputSuite);
        console.log("POST -> city", inputCity);
        console.log("POST -> zipCode", inputZipCode);
        console.log("POST -> stateId", stateId);

        fetch(`${baseUrl}/group`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "applicaiton/json"
            },
            body: JSON.stringify({
                groupName: inputGroupName,
                streetAddress: inputStreetAddress,
                suite: inputSuite,
                city: inputCity,
                zipCode: inputZipCode,
                stateId: stateId
            })
        })
        .then(response => response.json())
        .then(data => { 
            //groups.list.push(data); 
            //setGroups({list: groups.list});
            dispatch(push(data));
        })
        .catch(err=> console.log("An error occured.", err));
       
    }

    return (
        <div className="col">
           <div className="card rounded-0 vh-100">
              
                    <div className="hstack hw-100 card-header px-3 pt-3">
                        <h5 className="mt-2">Groups</h5>
                        
                    </div>   
                    <button type="button" className="btn btn-primary ms-3 mt-3 me-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            + Add group&nbsp;&nbsp;
                    </button>
                    <hr className="border-top"/>                  
                    <div className="card rounded-0 border-0 ms-3 me-0 overflow-auto ag-theme-alpine-dark">
                    <div className="card-body mb-auto p-0  align-content-start flex-wrap ">
                        <ul className="list-group list-group-flush">
                        {                           
                            groups.list.map(item=>{
                                return(
                                    <li key={item.group.id} className="list-group-item  border-0">
                                        <div className="card-header border-0 w-100">
                                            <h5 className="card-title">{item.group.groupName}</h5>
                                            <p className="card-text">{item.address.streetAddress}, {item.address.city}</p>                                    
                                        </div>   
                                    </li>
                                )
                            })
                        }  
                        </ul>
                    </div>
                    </div>
              
            </div>
            {/* <!-- Modal add/edit speaker --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Group information</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="hstack px-3 py-3">
                        <div className="vstack gap-3">
                            <label readOnly className="form-control-plaintext" htmlFor="groupName">Group name:</label>
                            <label readOnly className="form-control-plaintext" htmlFor="streetAddress">Street:</label>
                            <label readOnly className="form-control-plaintext" htmlFor="suite">Suite:</label>
                            <label readOnly className="form-control-plaintext" htmlFor="city">City</label>
                            <label readOnly className="form-control-plaintext">State</label>
                            <label readOnly className="form-control-plaintext" htmlFor="zipCode">Zip code:</label>
                        </div> 
                        <div className="vstack gap-3">
                        <input type="text" className="form-control" id="groupName" value={inputGroupName} onChange={(event)=>{setInputGroupName(event.target.value)}} />
                        <input type="text" className="form-control" id="streetAddress" value={inputStreetAddress} onChange={(event)=>{setInputStreetAddress(event.target.value)}} />
                        <input type="text" className="form-control" id="suite" value={inputSuite} onChange={(event)=>{setInputSuite(event.target.value)}} />
                        <input type="text" className="form-control" id="city" value={inputCity} onChange={(event)=>{setInputCity(event.target.value)}} />
                        <select className="form-select" value={stateId} onChange={e => setStateId(e.target.value)} aria-label="state">
                            <option defaultValue>Select state</option>
                            {
                                states.list.map(s=>{
                                    return(
                                        <option key={s.id} value={s.id}>{s.abbreviation}</option>
                                    )
                                })
                            }
                        </select>
                        <input type="text" className="form-control" id="zipCode" value={inputZipCode} onChange={(event)=>{setInputZipCode(event.target.value)}} />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Cancel</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={e => {postGroup();}}>Save</button>                    
                </div>
                </div>
            </div>
            </div>
        </div>
    )
});