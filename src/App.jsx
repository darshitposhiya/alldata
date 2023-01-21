import React,{useState} from "react";

const App=()=>
{
    const [serch,setSerch]=useState('')
    

    const datas = [
      {
  
        id:1,
        title : "iPhone 9",
        description : "An apple mobile which is nothing like apple",
        price : 549,
        brand : "Apple",
        thumbnail : "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images : "https://i.dummyjson.com/data/products/1/1.jpg"
        
        },
        {
            id:2,
            title : "iPhone X",
            description : "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price : 899,
            brand : "oppo",
            thumbnail : "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            images : "https://i.dummyjson.com/data/products/2/1.jpg"
        },
        {
            id:3,
            title : "Samsung Universe 9",
            description : "Samsung's new variant which goes beyond Galaxy to the Universe",
            price : 1249,
            brand : "Samsung",
            thumbnail : "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            images : "https://i.dummyjson.com/data/products/3/1.jpg"
        }
        
    ];
  
    return(
        <>
            <section className="container bg-bg-white">
                <div className="row">
                    <div className="col-8 m-auto text-center">
                        <form className="mt-5">
                        <input type='text' className="w-100 rounded-2"
                        onChange={(e)=>setSerch(e.target.value)}
                        placeholder="serch by brand name"/>
                        </form>
                    </div>    
                </div>
                {datas.filter((item)=>{
              if(serch === "")
              {
                return item;
              }
              else if(item.brand.toLowerCase().includes(serch.toLowerCase()))
                return item;

              }).map((item)=>(
                <div className="row mt-5">
                    <div className="col-md-6 text-center">
                        <img src={item.images} className='img-fluid rounded-2' style={{height:'80%',width:'auto'}}/>
                    </div>
                    <div className="col-md-6 text-center">
                      <div className="row bg-light mx-5 rounded-2 py-1">
                          <div className="col">{item.brand}</div>
                      </div>
                      <div className="row mt-4 bg-light mx-5 rounded-2 py-1">
                          <div className="col">{item.title}</div>
                      </div>
                      <div className="row mt-4 bg-light mx-5 rounded-2 py-2">
                          <div className="col">{item.description}</div>
                      </div>
                      <div className="row mt-4 bg-light mx-5 rounded-2 py-1">
                          <div className="col">${item.price}</div>
                      </div>
                    </div>
                </div>
              )
              )}
            </section>
        </>
    )
}
export default App;