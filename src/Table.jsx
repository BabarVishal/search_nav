import React from 'react'


const Table = ({deta})=> {

  return (
    
      <table>
        <tbody>
            <tr className='tebalrow'>
              
                <th className='vish'>Id</th>
               
                <th className='vish'>firstName</th>
              
                <th className='vish'>Surname</th>
            
                <th className='vish'>Email</th>
                
                <th className='vish'>Gender</th>
            </tr>
               {deta.map((item)=>(
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                  </tr>
               ))}  
          
         
           
        </tbody>
      </table>
   
  )
}

export default Table
