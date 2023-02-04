import React, {useState, useEffect} from 'react';
import audio from '../speaker/audio/2020-11-TCW-Jeff-H.m4a';
import {FilePlay} from 'react-bootstrap-icons';
import { upload } from '@testing-library/user-event/dist/upload';

export default function Container(){

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

    function postAddress(){
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
        .catch(err => console.log("An error occured.", err));
    }

    return (
        <div className="col">
           <div className="card rounded-0 vh-100">
                <div className="vstack">
                    <div className="hstack hw-100 card-header px-3 pt-3">
                        <h5 className="mt-2">Groups</h5>
                        
                    </div>   
                    <button type="button" className="btn btn-primary ms-3 mt-3 me-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            + Add group&nbsp;&nbsp;
                        </button>
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
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={e => {postAddress();}}>Save</button>                    
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}