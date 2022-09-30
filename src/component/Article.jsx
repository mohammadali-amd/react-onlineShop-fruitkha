import { Link } from 'react-router-dom';

const Article = (item) => {
   return (
      <div className="col-lg-4 col-md-6">
         <div className="single-latest-news">
            <Link to="/single-news"><div className="latest-news-bg news-bg-1"></div></Link>
            <div className="news-text-box">
               <h3><Link to="/single-news">{item.title}</Link></h3>
               <p className="blog-meta">
                  <span className="author"><i className="fas fa-user"></i> {item.author}</span>
                  <span className="date"><i className="fas fa-calendar"></i> {item.date}</span>
               </p>
               <p className="excerpt">{item.caption}</p>
               <Link to="/single-news" className="read-more-btn"><span>ادامه مطلب</span> <i className="fas fa-angle-left"></i></Link>
            </div>
         </div>
      </div>)
}

export default Article