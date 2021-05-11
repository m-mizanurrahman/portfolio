import React from 'react';

const Blogs = () => {
    return (
        <div className="m-5 text-center">
            <h1 className="mt-5 mb-5 text-white">BLOGS</h1>
            <div class="row text-center">
                <div class="col-sm-6">
                    <div class="card m-1">
                        <div class="card-body">
                            <h5 class="card-title">10 things about JS</h5>
                            <p class="card-text">Adding properties to everything!
There are three primitive data types: String, Number, and Boolean. Everything else (if it’s not null or undefined) can...</p>
                            <a target="_blank" href="https://dev.to/mrahman96/10-things-about-js-4p52" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card m-1">
                        <div class="card-body">
                            <h5 class="card-title">10 Basic Methods Of Java Script</h5>
                            <p class="card-text">To know a specific item’s index number, you have to call arrayName.indexOf() method. And put your specific item as a parameter to the indexOf() method.</p>
                            <a target="_blank" href="https://mizan38ju.medium.com/10-js-basic-methods-have-an-easy-explanation-d0a60459def0" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;