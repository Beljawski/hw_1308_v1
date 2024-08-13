function ServiceItem({items}) {

    return(
        <div className="serviceItem">
            {items.map( (elem)=> (
                <div key={elem.text} className="itemWrapper" style={{backgroundColor: elem.color}}>
                <div className="rectangle"></div>
                <h2 >{elem.text}</h2>
                </div>
            ))}
        </div>
    )
}

export default ServiceItem