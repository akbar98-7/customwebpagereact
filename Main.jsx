import React from 'react'
import Card from './Card'

// type BlogData ={
//     title: string,
//     img: string,
//     subtitle: string,
//     button: string
// }

const Main = () => {

    const data = [

        {
            title: "Free Blog Training.Learn Blogging with us",
            img: '/Assets/blog1.jpg',
            subtitle: "Some quick example text to build on the card title and make up the bulk of the cards content.",
            button: "Go somewhere"
        },
        {
            title: "Free Blog Training.Learn Blogging with us",
            img: '/Assets/blog.jpg',
            subtitle: "Some quick example text to build on the card title and make up the bulk of the cards content.",
            button: "Go somewhere"
        },
        {
            title: "Free Blog Training.Learn Blogging with us",
            img: '/Assets/bloggy.jpg',
            subtitle: "Some quick example text to build on the card title and make up the bulk of the cards content.",
            button: "Go somewhere"
        },
    ]
    return (
        <>
            <div className='main'>
                <div className='d-flex'>

                    <img src={'/Assets/bloggy.jpg'} alt="" width={600} height={400} />
                    <h1 className='p-5   '>Free Blog Training.Learn Blogging with us
                        <br></br>
                        <br></br>

                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                        <button type="button " class="btn btn-primary">Submit</button>
                    </h1>



                </div>

                <hr></hr>

                <br></br>





            </div>

            <div className='d-flex align-items-center'>
                <div className="row">
                    {data.map((item, index) => (
                        <div className="col-4" key={index}>
                            <Card item={item} />


                        </div>
                    ))}

                </div>
            </div>










        </>
    )
}

export default Main
