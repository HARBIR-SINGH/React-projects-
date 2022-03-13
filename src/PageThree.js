import React, {useEffect, useState} from 'react';


   // return 
      function PageThree() {
      return (
                  <Learn />
              );
       }
   function Learn() {
      const [data, setData] = useState("Harbir");
      useEffect(() => {
         setData('hello ' + data);
      }, []);
   
      return (
         <div>
            <h1>Page three</h1>
            <h3>{data ? data : null}</h3>
         </div>
      );
   }
   export default PageThree;