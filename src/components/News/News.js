import { connect } from "react-redux";


let News = ({article})=>(
    article ?  article.map((news,index)=>{
        return(
            <div key={index}>
                <p>{news.title}</p>
                <p>{news.content}</p>
                <p>{news.description}</p>
                <img src={news.urlToImage}/>
            </div>
        )
    })
    : null );

const mapStateToProps = (state)=>(
    {
        article: state.news
    })

News = connect(mapStateToProps,null)(News);
export default News;