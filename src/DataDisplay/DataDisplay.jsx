function DataDisplay({items}){
    return (
        <div style={{border: "2px solid black", padding:"10px", marginBottom:"10px", backgroundColor:"black"}}>
            <p style={{color:"white"}}>{items.id}</p>
            <p style={{color:"white"}}>{items.title}</p>
            <p style={{color:"white"}}>{items.body}</p>
        </div>
    )
}

export default DataDisplay