// converting to function based
// remove {component} import
// change class to funtion and remove extends Component, add props to take parameters
// render not needed
// done
import React from 'react'
const NewsItem = (props) =>{

    // props could be accesed like this, without use of this.title, this.desc
    let {title, desc, imageUrl, newsUrl, newsKey, author, publishedAt} = props;

    // const datee= new Date(publishedAt.getFullYear(),publishedAt.getMonth())
    // did a bit research for fetching date from utc
    const datee= new Date(publishedAt)

    const hours = datee.getUTCHours()
    const minutes = datee.getUTCMinutes()
    //remember this is date, not datee. date gives number(1-31)
    const date = datee.getUTCDate()
    const month = datee.getUTCMonth()
    // const datee = new Date(2019, 1)
    
    return(
    
        <div>
            <div className="card my-1" key={newsKey} style={{width: "18rem", margin: "auto", padding:'0.1rem', backgroundColor: "rgb(229 229 229 / 63%)"}}>
                <img src={imageUrl?imageUrl:"https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg"} className="card-img-top" alt="..." />

                {/* <img src={props.imageUrl?props.imageUrl:"https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg"} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {desc}</p>
                    
                    <p className="card-text"><small className="text-muted">By {(author ? author : "Unknown")}<br /> Published At: {hours} : {minutes} {(hours<12)? "am." : "pm"} on {date}/{month + 1 }</small></p>
                    
                    {/* {console.log(datee)} */}
                    {/* {console.log(publishedAt.getMonth())} */}
                    {/* {console.log(datee.getFullYear)} */}
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem