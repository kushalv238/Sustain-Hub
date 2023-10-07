import React from "react"
import './Education.css'
import Video from '../img/Video1.jpeg'
import Video1 from '../img/Video2.jpg'
import Video2 from '../img/Video3.png'
const Education = () => {
  return (
    <>
      <div className="title">
        <h1>Eco-friendly Solution Tutorials</h1>
      </div>

      <div className="edu">

        <div className="youtube">
          <div className="card video"> <a href="https://youtu.be/PEi2IU--ZyY?si=zK9NGFcCVdDbCSCU" target="_blank" >
            <img src={Video2} className="v-image" alt="" />
          </a>

            <div className=" tutorialcard">
              <img className='vimg' alt="" />
              <div className="description">
                <div className="youtuber_img"></div>

                <div className="text-des">


                </div>

              </div>
            </div>
          </div>
          <div className="title-des"> 15 INNOVATIVE SUSTAINABLE & ECO FRIENDLY <br />BUSINESS IDEAS</div>

          <div className="name">Eco Snooki</div>
          <div className="views">41.3K subscribers</div>
        </div>
        <div className="youtube">
          <div className="card video">
            <a href="https://www.youtube.com/watch?v=a3csa3vfbzc">
              <img src={Video} className="v-image" alt="" />
            </a>

            <div className=" tutorialcard">
              <img className='vimg' alt="" />
              <div className="description">
                <div className="youtuber_img"></div>

                <div className="text-des">


                </div>

              </div>
            </div>
          </div>
          <div className="title-des"> Zero Waste & Reusable Products</div>

          <div className="name">mergyle</div>
          <div className="views">117K subscribers</div>
        </div>

        <div className="youtube">
          <div className="card video">
            <a href="https://www.youtube.com/watch?v=vP_VtAXpc2I">
              <img src={Video1} className="v-image" alt="" />
            </a>

            <div className=" tutorialcard">
              <img className='vimg' alt="" />
              <div className="description">
                <div className="youtuber_img"></div>

                <div className="text-des">


                </div>

              </div>
            </div>
          </div>
          <div className="title-des"> The Best Sustainable Products For Zero Waste Living</div>

          <div className="name">Lucie Fink</div>
          <div className="views">505K subscribers</div>
        </div>



      </div>
      <div className="title">
        <h1>Eco-friendly Solution Blogs</h1>
      </div>
      <div className="yt-blogs">
      <div className="blog">
        <div className="content">
          <div className="blog-card card">
            <div className="heading"><h3>Is the Demand for Sustainable & Eco-Friendly Products Rising?</h3></div>
            <div className="heading">Karthikeya Burugula</div>
            <div className="sub-heading">In this article, we will explore the remarkable phenomenon of the rise of sustainable and eco-friendly products. We will begin by examining the factors that have contributed to this trend, including the growing environmental awareness among consumers and their increasing demand for products that align with their values.<hr /> </div>
            <a href="https://medium.com/@accredian/is-the-demand-for-sustainable-eco-friendly-products-rising-9fcca58e1e74"><button className="blog-button" >Read More</button></a>

          </div>



        </div>
      </div>
      <div className="blog">
        <div className="content">
          <div className="blog-card card">
            <div className="heading"><h3>Sustainable Leather Sandals — A Step Towards Ethical Fashion</h3></div>
            <div className="heading">James Williams</div>
            <div className="sub-heading">There has been a rising concern for the environment and a trend toward sustainable living in recent years. With fast fashion and the textile industry is big polluters, many individuals are moving to more environmentally friendly alternatives. Sustainable leather sandals, for example, are not only fashionable but also environmentally responsible.<hr /> </div>
            <a href="https://medium.com/illumination/sustainable-leather-sandals-a-step-towards-ethical-fashion-a66f524c8153"><button className="blog-button" >Read More</button></a>

          </div>



        </div>
      </div>
      <div className="blog">
        <div className="content">
          <div className="blog-card card">
            <div className="heading"><h3>Sustainable Product Spotlight — Adidas Shoes made from Sea Plastic</h3></div>
            <div className="heading">John Forfar</div>
            <div className="sub-heading">In mid-2017 Adidas released 3 editions of their popular UltraBoost running shoes. All of the material used to make these great looking shoes was sourced from floating debris found in the ocean. This is a great example of a producer collaborating with the environmental organisation “Parley for the Oceans” to produce something improves our environment.<hr /> </div>
            <a href="https://medium.com/tradr/sustainable-product-spotlight-adidas-shoes-made-from-sea-plastic-803542e85c46"><button className="blog-button" >Read More</button></a>

          </div>



        </div>
      </div>
      </div>
    </>
  )
}

export default Education
