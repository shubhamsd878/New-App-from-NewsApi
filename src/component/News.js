// IMPORTANT for converting to function based
// remove {component} import
// change class to funtion and remove extends Component, add props to take parameters
// render not needed
// add const to all declared functions, constructor & variables
// make all fuctions arrow functions
// remove all this.state, this.props
// add useState instead of constructor based state
// use useEffect in place of componentDidMount
// import {useSTate, useEffect} from 'react' in place of {Component}
// done

import React,{useState, useEffect} from 'react'
import Spinner from './Spinner'
import NewsItem from './NewsItem'

function News (props){
    const {country, api_key, pageSize, category} = props;

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(false)
    // const [totalResults, setTotalResults] = useState(0)


    // function for capitalizing first letter
    const capitalize1 = (str) => {
        return  str.charAt(0).toUpperCase() + str.slice(1);
    }
    const capitalize = (str) =>{
        return str.split(' ').map(capitalize1).join(' ');
    }
      

    // push receive == 0 for default, 1 for nextPage, 2 for prevPage
    const fetchApi = async (receive) => {

        setLoading(true)
        setPage((receive === 0)? page : (receive===1)? page + 1 : page - 1)


        document.title = (category === "") ? "News Monkey - get your daily dose of news" : capitalize(category) + " - NewsMonkey"
        

        let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pagesize=${pageSize}&apiKey=${api_key}&page=${(receive === 0) ? 1 : (receive===1) ? page + 1 : page - 1}`;
        
        // ${(receive === 0)? 1 :(receive===1)? page :page - 1}
        let data = await fetch(url);
        let parsedData = await data.json();

        // working correctly, but don't know why total results logging to 0 at console
        // setTotalResults(parsedData.totalResults)
        setTotalPages(Math.ceil(parsedData.totalResults / pageSize))
        setArticles(parsedData.articles)
        setLoading(false)
        

        {receive === 0 ? console.log("Total Results: " + parsedData.totalResults + "\nPage Size: " + pageSize + "\nTotal Pages: " + totalPages) : console.log('\n') }
        // console.log("total pages2: " + totalPages)

    }
    


    // use effect is used instead of componentDidMount, [] is used to run it only once
    useEffect( () =>{
        fetchApi(0)
    },[]
    )

    useEffect(() =>{
        {console.log("Page Number: " + page)}
    }, [articles]
    )
    
    // workig late, speed mismatch
    // useEffect(() => {
    //     console.log("Total Results: " + totalResults + "\nPage Size: " + pageSize + "\nTotal Pages: " + totalPages)
    // }, [category]
    // )
    
    // whenever calling functions in class based type, always use this keyword and without () these parenthesis
    const prevClick = async () =>{

        fetchApi(2)
    }
    
    const nextClick = async () =>{
        
        fetchApi(1);
        
    }       
        
    // props must be inside render
    // let {pageSizee} = props;
    return(
        <div>

            <div className="container">
            <h1 className='my-3 text-center fw-bold ' style={{margin:"30px 0px",color:'#212529' ,border: "2px solid white",borderBottomColor:'#212529', borderRadius:"15px",padding: "10px", backgroundColor: "#d6d6d6"}}>NewsMonkey - top {(category === "")? null : capitalize(category)} headlines</h1>
            
            { loading && <Spinner /> }
            
            <div className="row my-3">

                {/* whenever you iterate with map method, you need to give unique key. like in this case, the url is uinique for every object */}
                {/* the below logic condition to remove content when user clicks on next, previous */}
                {!loading && articles.map((element) => {
                    return(
                        <div key={element.url} className="col-md-4">
                            {/* key showing error while defined in newsItem component, which shouldn't according to logic */}
                            <NewsItem newsKey={element.url} title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                        </div> 
                    )
                })}
            </div>

            <div className='d-flex justify-content-between my-3'>
                
                <button type="button" disabled={ loading || page <= 1} className="btn btn-secondary btn-sm" onClick={prevClick}> &larr; Prev  </button>

                {/* {console.log("skjdflksd " + totalPages)} */}

                <button type="button" disabled={ (loading) || (page >= totalPages) } className="btn btn-secondary btn-sm" onClick={nextClick}> Next  &rarr; </button> 
            

            </div>

            </div>
        </div>
    )
    
}
export default News