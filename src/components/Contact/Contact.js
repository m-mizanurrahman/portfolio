import React from 'react';
const Contact = () => {
    return (
       <section className="contact  p-5">        
               
              

                   <form action="">

                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-brand"> Submit </button>
                       </div>
                   </form>
              
       </section>
    );
};

export default Contact;