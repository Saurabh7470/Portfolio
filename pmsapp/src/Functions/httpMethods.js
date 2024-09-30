import { useState } from "react";

function HttpMethods(){
    
  const result =  Gtemethod((props)=> {
        const [data, setData] = useState([]);
        fetch(props).then((res)=> {
            return res.json();
        }).then((data)=> {
            setData(data);
        })
    })


    module.exports = (req, res)=> {
         
    }
}

export default HttpMethods;