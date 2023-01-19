import React ,{useState}from "react";

function App()
 {  
  const [serch,setSerch]=useState('')
    

  const datas = [
    {
      id: 1,
      name: 'Nick',
      age: 21
    },
    {
      id: 2,
      name: 'Lara',
      age: 30
    },
    {
      id: 3,
      name: 'vaick',
      age: 55
    },
    {
      id: 4,
      name: 'xwick',
      age: 43
    }
  ];

  



  return (
    <>
          <div align='center'>
              <form>
                <table border={3} cellPadding={5}>
                  <tr>
                    <th><input 
                    onChange={(e)=>setSerch(e.target.value)}
                    type='text' placeholder="search by name"/></th>
                  </tr>
                </table>
              </form>

              <table style={{margin:'15px',color:'red'}} border={3} cellPadding={5} cellSpacing={6}>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </table>

              <div>
              {datas.filter((item)=>{
              if(serch === "")
              {
                return item;
              }
              else if(item.name.toLowerCase().includes(serch.toLowerCase()))
                return item;

              }).map((item)=>(

              <table border={3} cellPadding={5} cellSpacing={6}>
                <tr key={item.name}>
                  <td>
                    {item.id}
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.age}
                  </td>
                </tr>
              </table>

              )
              )}

              </div>      
           </div>

    </>
  );
}

export default App;
