   import Card from "./components/card";
   import Nav from "./components/navebar";
   
    export default function Home(){
      return(
        <div className="font-extrabold">
          <Nav/>
         
        <h3 className="bg-slate-50">Hello Nasir</h3>
        <Card />
        
        </div>
      )
    }    