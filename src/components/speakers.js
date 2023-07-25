import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import log from '../services/log-service'
import { Row } from 'react-bootstrap'

export default function Speakers(){
    const name = Speakers.name
    log.info(`${name} component being creation`)
    const gridRef = useRef();
    log.info(`${name} created ref hook gridRef for ag-grid`)
    const [inputDate, setInputDate] = useState("");
    log.info(`${name} created state hook inputDate to add a new speaker`, inputDate)
    const [inputName, setInputName] = useState("");
    log.info(`${name} created state hook inputName to add a new speaker`, inputName)
    const [inputHomegroupName, setInputHomegroupName] = useState("");
    log.info(`${name} created state hook inputHomegroupName to add a new speaker`, inputHomegroupName)
    const [inputHomegroupCity, setInputHomegroupCity] = useState("");
    log.info(`${name} created state hook inputHomegroupCity to add a new speaker`, inputHomegroupCity)
    const [inputHomegroupState, setInputHomegroupState] = useState("");
    log.info(`${name} created state hook inputHomegroupState to add a new speaker`, inputHomegroupState)
    const [inputFlyer, setInputFlyer] = useState("");
    log.info(`${name} created state hook inputFlyer to add a new speaker`, inputFlyer)

    const [rowData, setRowData] = useState([]);
    log.info(`${name} created state hook rowData for ag-grid`)

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
                //putSpeaker(params.data);
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
               // putSpeaker(params.data);
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
                //putSpeaker(params.data);
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
                //putSpeaker(params.data);
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
                //putSpeaker(params.data);
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
                //putSpeaker(params.data);
                return true;
            }
        }
    ]);
    log.info(`${name} created state hook columnDefs for ag-grid`)

    const defaultColDef = useMemo(()=>({
        sortable: true,
        filter: true,
        resizable: true,
        editable: true
    }), []);
    log.info(`${name} created memo hook defaultColDef for ag-grid`)

    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
    }, []);
    log.info(`${name} created callback hook onFirstDataRendered for ag-grid`)


    useEffect(()=>{
        log.info(`${name} use effect hook begin`)
        
        log.info(`${name} use effect hook end`)
    }, []);
    log.info(`${name} created effect hook to populate ag-grid with speaker data`)


    log.info(`${name} component end creation`)
    return(<div className="container-fluid m-0 p-0 h-100">    
        <Row className="m-0 align-items-center" style={{background: "#FEFEFE", minHeight: "2rem", borderTop: "1px solid #EAECED", borderRight: "1px solid #EAECED", borderBottom: "1px solid #EAECED"}}>
            <div>
                Speakers menu controls
            </div>
        </Row>
        <Row className="card rounded-0 border-0 m-0 p-0 h-100 overflow-auto" style={{height: "auto", border: "1px solid #EAECED"}} >
            <div id="myGrid" className="card-body ag-theme-alpine-dark" style={{backgroundColor: "#F3F5F7", borderTop: "0", borderRight: "1px solid #EAECED", borderBottom: "1px solid #EAECED", borderLeft: "0"}}>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef = {defaultColDef}
                    animateRows={true}
                    onFirstDataRendered={onFirstDataRendered}   
                />
            </div>
        </Row>        
    </div>)
}