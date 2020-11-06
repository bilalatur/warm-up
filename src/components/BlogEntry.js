import React from 'react';

class BlogEntry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            entry: []
        }
    }

        apiCall(url,consecuencia){
            fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
        }   

        componentDidMount(){
            console.log("Me monté");
            this.apiCall('https://jsonplaceholder.typicode.com/posts',this.mostrarData)
        }

        mostrarData = (data) => {
            console.log()
            this.setState(
                {
                    entry: data
                }
            )
        }


        componentDidUpdate(){
            console.log("Me actualicé")
        }

        render(){
            console.log("Estoy renderizando")
            let contenido;
            if(this.state.entry === []){
                contenido = <p>Cargando...</p>
            } else {
                contenido = 
                <div>
                    {this.state.entry.map((item,i) => 
                        <div key={i} className="col-12 div-entry"> 
                            <p className="col-12 col-md-9 p-entry">{item.title}</p>
                            <a href={"https://jsonplaceholder.typicode.com/posts/"+item.id}  className="col-4 col-md-1"><button className="entry-btn">Ver</button></a>
                            <a href={"https://jsonplaceholder.typicode.com/posts/"+item.id} className="col-4 col-md-1"><button className="entry-btn">Editar</button></a>
                            <a href={"https://jsonplaceholder.typicode.com/posts/"+item.id} className="col-4 col-md-1"><button className="entry-btn">Borrar</button></a>
                        </div>
                    )}
                </div>
            }
            return (
                <div>
                    {contenido}
                </div>
            )
        }
}

export default BlogEntry;
