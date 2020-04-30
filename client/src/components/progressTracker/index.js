import React from "react"; 
import { Progress } from 'reactstrap';


export default function ProgressTracker(props){
    return(
        <div>
      <div className="text-center">1 of 5</div>
      <Progress className="mb-3" value="1" max="5" />
    
    </div>
  );
};

