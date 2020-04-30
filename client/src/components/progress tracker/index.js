import React from "react"; 
import { Progress } from 'reactstrap';


export default function ProgressTracker(props){
    return(
        <div>
      <div className="text-center">1 of 5 Documents Complete</div>
      <Progress className="mb-3" value="1" max="5" />
{/*      
      <div className="text-center">Various (30) of 55</div>
      <Progress multi>
        <Progress bar value="5" max={55}>5</Progress>
        <Progress bar color="success" value="15" max={55}>15</Progress>
        <Progress bar color="warning" value="10" max={55}>10</Progress>
        <Progress bar color="danger" value="10" max={55}>10</Progress>
      </Progress> */}
    </div>
  );
};

