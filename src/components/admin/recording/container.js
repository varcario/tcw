import React, {useState, useRef} from 'react';
import audio from '../speaker/audio/2020-11-TCW-Jeff-H.m4a';
//import {FilePlay} from 'react-bootstrap-icons';
//import { upload } from '@testing-library/user-event/dist/upload';

export default function Container(){

    const [uploadUrl] = useState("https://localhost:7092/record");

    const inputFile = useRef();
    const [inputSpeakerId, setInputSpeakerId] = useState("");
    const [inputDescription, setInputDescription] = useState("");

    
    function postRecording(){
        console.log("POST -> speakerId", inputSpeakerId);
        console.log("POST -> inputFile", inputFile.current.files[0]);
        console.log("POST -> description", inputDescription);

      
        const formData = new FormData();
        formData.append("SpeakerId", inputSpeakerId);
        formData.append("Image", inputFile.current.files[0]);
        formData.append("Description", inputDescription);

        fetch(uploadUrl, {
            method: "POST",
            body: formData
        })
        .catch(err => console.log("An error occured.", err));

    }

    return (
        <div className="col">
           <div className="card rounded-0 vh-100">
              
                    <div className="hstack hw-100 card-header px-3 pt-3">
                        <h5 className="mt-2">Recordings</h5>
                        
                    </div>   
                    <button type="button" className="btn btn-primary ms-3 mt-3 me-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            + Add recording&nbsp;&nbsp;
                        </button> 
                   
                    
                  <hr className="border-top"/>
                  
                  <div className="card-body mb-auto gap-3 overflow-auto d-flex align-content-start flex-wrap ag-theme-alpine-dark">
                
                    <div className="card col-2" style={{width: "25rem"}}>    
                            <div className="card-body">
                            <h5 className="mt-2">November 9th, 2020</h5>
                            <br className="border-top"/>
                                <div className="vstack">
                                    <p>Jeff H.</p>
                                    <p>Chicago group<br/>Dallas, Texas</p>
                                    <div className="hstack align-baseline">                                        
                                        
                                        <a className="primary-link me-3" role="button">Edit</a>
                                        <div className="vr"></div>
                                        <a className="primary-link ms-3 me-auto" role="button" >Delete</a>
                                    </div>         
                                    <div className="hstack mt-3">
                                        <audio controls className="w-100">
                                            <source src={audio} type="audio/mpeg"/>
                                            Your browser does not support the audio tag.
                                        </audio>
                                    </div>
                                </div>
                            </div>  
                    </div>

                    <div className="card col-2" style={{width: "25rem"}}>    
                            <div className="card-body">
                            <h5 className="mt-2">November 9th, 2020</h5>
                            <br className="border-top"/>
                                <div className="vstack">
                                    <p>Jeff H.</p>
                                    <p>Chicago group<br/>Dallas, Texas</p>
                                    <div className="hstack align-baseline">                                        
                                        
                                        <a className="primary-link me-3" role="button">Edit</a>
                                        <div className="vr"></div>
                                        <a className="primary-link ms-3 me-auto" role="button" >Delete</a>
                                    </div>         
                                    <div className="hstack mt-3">
                                        <audio controls className="w-100">
                                            <source src={audio} type="audio/mpeg"/>
                                            Your browser does not support the audio tag.
                                        </audio>
                                    </div>
                                </div>
                            </div>  
                    </div>


                    <div className="card col-2" style={{width: "25rem"}}>    
                            <div className="card-body">
                            <h5 className="mt-2">November 9th, 2020</h5>
                            <br className="border-top"/>
                                <div className="vstack">
                                    <p>Jeff H.</p>
                                    <p>Chicago group<br/>Dallas, Texas</p>
                                    <div className="hstack align-baseline">                                        
                                        
                                        <a className="primary-link me-3" role="button">Edit</a>
                                        <div className="vr"></div>
                                        <a className="primary-link ms-3 me-auto" role="button" >Delete</a>
                                    </div>         
                                    <div className="hstack mt-3">
                                        <audio controls className="w-100">
                                            <source src={audio} type="audio/mpeg"/>
                                            Your browser does not support the audio tag.
                                        </audio>
                                    </div>
                                </div>
                            </div>  
                    </div>


                    <div className="card col-2" style={{width: "25rem"}}>    
                            <div className="card-body">
                            <h5 className="mt-2">November 9th, 2020</h5>
                            <br className="border-top"/>
                                <div className="vstack">
                                    <p>Jeff H.</p>
                                    <p>Chicago group<br/>Dallas, Texas</p>
                                    <div className="hstack align-baseline">                                        
                                        
                                        <a className="primary-link me-3" role="button">Edit</a>
                                        <div className="vr"></div>
                                        <a className="primary-link ms-3 me-auto" role="button" >Delete</a>
                                    </div>         
                                    <div className="hstack mt-3">
                                        <audio controls className="w-100">
                                            <source src={audio} type="audio/mpeg"/>
                                            Your browser does not support the audio tag.
                                        </audio>
                                    </div>
                                </div>
                            </div>  
                    </div>

                    
                    <div className="card col-2" style={{width: "25rem"}}>    
                            <div className="card-body">
                            <h5 className="mt-2">November 9th, 2020</h5>
                            <br className="border-top"/>
                                <div className="vstack">
                                    <p>Jeff H.</p>
                                    <p>Chicago group<br/>Dallas, Texas</p>
                                    <div className="hstack align-baseline">                                        
                                        
                                        <a className="primary-link me-3" role="button">Edit</a>
                                        <div className="vr"></div>
                                        <a className="primary-link ms-3 me-auto" role="button" >Delete</a>
                                    </div>         
                                    <div className="hstack mt-3">
                                        <audio controls className="w-100">
                                            <source src={audio} type="audio/mpeg"/>
                                            Your browser does not support the audio tag.
                                        </audio>
                                    </div>
                                </div>
                            </div>  
                    
                    </div>
                    
                </div>        
            </div>
            {/* <!-- Modal add/edit speaker --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Recording information</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="hstack px-3 py-3">
                        <div className="vstack gap-3">
                            <label readOnly className="form-control-plaintext">Speaker:</label>
                            <label readOnly className="form-control-plaintext" htmlFor="formFile">Audio file:</label>
                            <label readOnly className="form-control-plaintext" htmlFor="description">Description</label>
                        </div> 
                        <div className="vstack gap-3">
                        <select className="form-select" value={inputSpeakerId} onChange={e => setInputSpeakerId(e.target.value)} aria-label="Default select example">
                            <option defaultValue>Select a speaker</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <input className="form-control" type="file" ref={inputFile} id="formFile" />
                        <textarea className="form-control" id="description" value={inputDescription} onChange={e => setInputDescription(e.target.value)} rows="3" />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Cancel</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={e => {postRecording();}}>Save</button>                    
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}