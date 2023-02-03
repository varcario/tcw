import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import dateFormat from "dateformat";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function Container(){
    const gridRef = useRef();
    const [backendUrl] = useState("http://localhost:3003/speaker");
    const [speakers, setSpeakers] = useState({list:[]});
    const [editMode, setEditMode] = useState(false);
    const [speakerId, setSpeakerId] = useState(null);
    const [inputDate, setInputDate] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputHomegroupName, setInputHomegroupName] = useState("");
    const [inputHomegroupCity, setInputHomegroupCity] = useState("");
    const [inputHomegroupState, setInputHomegroupState] = useState("");
    const [inputFlyer, setInputFlyer] = useState("");

    const [rowData, setRowData] = useState([]);
    const [columnDefs] = useState([
        {
            headerName: "Date",
            valueGetter: params => {
                return params.data.date;
            },
            valueSetter: params => {
                console.log("editing speakerId", params.data.id);
                console.log("old date value", params.data.date);
                console.log("new date value", params.newValue);
                params.data.date = params.newValue;
                putSpeaker(params.data);
                return true;
            }
        },
        {
            headerName: "Name",
            valueGetter: params => {
                return params.data.name;
            },
            valueSetter: params => {
                console.log("editing speakerId", params.data.id);
                console.log("old name value", params.data.name);
                console.log("new name value", params.newValue);
                params.data.name = params.newValue;
                putSpeaker(params.data);
                return true;
            }
        },
        {
            headerName: "Home group",
            valueGetter: params => {
                return params.data.homeGroup.name;
            },
            valueSetter: params => {
                console.log("editing speakerId", params.data.id);
                console.log("old homeGroup.name value", params.data.homeGroup.name);
                console.log("new homeGroup.name value", params.newValue);
                params.data.homeGroup.name = params.newValue;
                putSpeaker(params.data);
                return true;
            }
        },
        {
            headerName: "City",
            valueGetter: params => {
                return params.data.homeGroup.city;
            },
            valueSetter: params => {
                console.log("editing speakerId", params.data.id);
                console.log("old homeGroup.city value", params.data.homeGroup.city);
                console.log("new homeGroup.city value", params.newValue);
                params.data.homeGroup.city = params.newValue;
                putSpeaker(params.data);
                return true;
            }
        },
        {
            headerName: "State",
            valueGetter: params => {
                return params.data.homeGroup.state;
            },
            valueSetter: params => {
                console.log("editing speakerId", params.data.id);
                console.log("old homeGroup.state value", params.data.homeGroup.state);
                console.log("new homeGroup.state value", params.newValue);
                params.data.homeGroup.state = params.newValue;
                putSpeaker(params.data);
                return true;
            }
        },
        {
            headerName: "Flyer",
            sortable: false, 
            editable: true, 
            cellRenderer: params => {return(<a href={params.value}>view</a>)},
            valueGetter: params => {
                return params.data.flyer;
            },
            valueSetter: params => {
                console.log("editing speakerId", params.data.id);
                console.log("old flyer value", params.data.flyer);
                console.log("new flyer value", params.newValue);
                params.data.flyer = params.newValue;
                putSpeaker(params.data);
                return true;
            }
        }
    ]);

    const defaultColDef = useMemo(()=>({
        sortable: true,
        filter: true,
        resizable: true,
        editable: true
    }), []);

    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
      }, []);

    useEffect(()=>{
        getSpeaker(backendUrl);
    }, [backendUrl]);

    function getSpeaker(backendUrl){
        console.log("GET -> speaker");
        fetch(backendUrl)
        .then(response =>{
        return (response.json());
        })
        .then(data => {      
            setSpeakers({list: data});
            setRowData(data);
        })
        .catch(err => {
            console.log("An error occured.", err);
        });
    }

    function postSpeaker(){
        console.log("POST -> inputDate", inputDate);
        console.log("POST -> inputName", inputName);
        console.log("POST -> inputHomegroupName", inputHomegroupName);
        console.log("POST -> inputHomegroupCity", inputHomegroupCity);
        console.log("POST -> inputHomegroupState", inputHomegroupState);
        console.log("POST -> inputFlyer", inputFlyer);

        fetch(backendUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "applicaiton/json"
            },
            body: JSON.stringify({   
                date: inputDate,
                name: inputName,
                homeGroup: {
                    name: inputHomegroupName,
                    city: inputHomegroupCity,
                    state: inputHomegroupState
                },
                flyer: inputFlyer
            })
        })
        .then(()=>{
            setInputDate("");
            setInputName("");
            setInputHomegroupName("");
            setInputHomegroupCity("");
            setInputHomegroupState("");
            setInputFlyer("");

            getSpeaker(backendUrl);
        })
        .catch(err => {
            console.log("An error occured.", err);
        });
    }

    function putState(id, state){
        console.log("PUT -> speakerId", id);
        console.log("PUT -> inputHomegroupState", state);

        fetch(`${backendUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "applicaiton/json"
            },
            body: JSON.stringify({   
                id: id,
                homeGroup: {
                    state: state
                }
            })
        })
        .then(() => getSpeaker(backendUrl))
        .catch(err => console.log("An error occured.", err));
    }

    function putSpeaker(speaker){
        console.log("PUT -> speakerId", speaker.id);
        console.log("PUT -> inputDate", speaker.date);
        console.log("PUT -> inputName", speaker.name);
        console.log("PUT -> inputHomegroupName", speaker.homeGroup.name);
        console.log("PUT -> inputHomegroupCity", speaker.homeGroup.city);
        console.log("PUT -> inputHomegroupState", speaker.homeGroup.state);
        console.log("PUT -> inputFlyer", speaker.flyer);

        fetch(`${backendUrl}/${speaker.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "applicaiton/json"
            },
            body: JSON.stringify({   
                id: speaker.id,
                date: speaker.date,
                name: speaker.name,
                homeGroup: {
                    name: speaker.homeGroup.name,
                    city: speaker.homeGroup.city,
                    state: speaker.homeGroup.state
                },
                flyer: speaker.flyer
            })
        })
        
        .catch(err => {
            console.log("An error occured.", err);
        });
    }

    function deleteSpeaker(){
        console.log("DELETE -> speakerId", speakerId);        

        fetch(`${backendUrl}/${speakerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "applicaiton/json"
            },
            body: JSON.stringify({   
                id: speakerId,
                date: inputDate,
                name: "--",
                homeGroup: {
                    name: "--",
                    city: "--",
                    state: "--"
                },
                flyer: "--"
            })
        })
        .then(()=>{
            setSpeakerId(null);
            setInputDate("");
            setInputName("");
            setInputHomegroupName("");
            setInputHomegroupCity("");
            setInputHomegroupState("");
            setInputFlyer("");

            getSpeaker(backendUrl);
        })
        .catch(err => {
            console.log("An error occured.", err);
        });
    }


    function handleDelete(speakerId){
        const s = speakers.list.find(s=> s.id === speakerId);

        setSpeakerId(s.id);
        setInputDate(s.date);
    }

    return (
        <div className="col">
            <div className="card rounded-0 vh-100">
                <div className="vstack">
                    <div className="hstack hw-100 card-header px-3 pt-3">
                        <h5 className="mt-2">Speakers</h5>
                        
                    </div>   
                    <button type="button" className="btn btn-primary ms-3 mt-3 me-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            + Add speaker&nbsp;&nbsp;
                        </button>       
                    <div id="myGrid" className="card-body ag-theme-alpine-dark">                    
                        <AgGridReact
                            ref={gridRef}
                            rowData={rowData}
                            columnDefs={columnDefs}
                            defaultColDef = {defaultColDef}
                            animateRows={true}
                            onFirstDataRendered={onFirstDataRendered}   
                            />
                    </div>
                </div>        
            </div>
            {/* <!-- Modal add/edit speaker --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Speaker information</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="hstack px-3 py-3">
                        <div className="vstack gap-3">
                            <label readonly className="form-control-plaintext" htmlFor="inputDate">Date:</label>
                            <label readonly className="form-control-plaintext" htmlFor="inputName">Name:</label>
                            <label readonly className="form-control-plaintext" htmlFor="inputHomegroupName">Homegroup:</label>
                            <label readonly className="form-control-plaintext" htmlFor="inputHomegroupCity">City:</label>
                            <label readonly className="form-control-plaintext" htmlFor="inputHomegroupState">State:</label>
                            <label readonly className="form-control-plaintext" htmlFor="inputFlyer">Flyer URL:</label>
                        </div> 
                        <div className="vstack gap-3">
                            <input type="text" className="form-control" id="inputDate" value={inputDate} onChange={(event)=>{setInputDate(event.target.value)}} />
                            <input type="text" className="form-control" id="inputName" value={inputName} onChange={(event)=>{setInputName(event.target.value)}} />
                            <input type="text" className="form-control" id="inputHomegroupName" value={inputHomegroupName} onChange={(event)=>{setInputHomegroupName(event.target.value)}}/>
                            <input type="text" className="form-control" id="inputHomegroupCity" value={inputHomegroupCity} onChange={(event)=>{setInputHomegroupCity(event.target.value)}}/>
                            <input type="text" className="form-control" id="inputHomegroupState" value={inputHomegroupState} onChange={(event)=>{setInputHomegroupState(event.target.value)}} />
                            <input type="text" className="form-control" id="inputFlyer" value={inputFlyer} onChange={(event)=>{setInputFlyer(event.target.value)}} />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Cancel</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" hidden={editMode} onClick={e => {postSpeaker();}}>Save</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" hidden={!editMode} onClick={e => {putSpeaker();}}>Update</button>
                </div>
                </div>
            </div>
            </div>
             {/* <!-- Modal delete speaker --> */}
             <div className="modal fade" id="deleteSpeakerModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteSpeakerModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="deleteSpeakerModalLabel">Delete speaker from schedule?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    
                        <div className="mb-3 row">
                            <p>All information about the speaker will be deleted.</p>
                        </div>                        
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Cancel</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={e => {deleteSpeaker();}}>Delete</button>                    
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

