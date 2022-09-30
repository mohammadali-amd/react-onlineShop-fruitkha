const Breadcrumb = (props) => {
   return (
      <>
         <div className="breadcrumb-section breadcrumb-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-center">
                     <div className="breadcrumb-text">
                        <p>{props.title}</p>
                        <h1>{props.pageName}</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Breadcrumb