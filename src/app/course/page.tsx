import Header from "../(components)/Header/Header"
import ImageCard from "../(components)/ImageCard/ImageCard"
import Textcard from "../(components)/TextCard/textcard"


function Course() {
  return (
 <>
 <Header title = "OUR COURSES"/>
 <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
<Textcard title= "Undergraduate Programs"/>

<Textcard title= "Graduate Programs"/>

<Textcard title= "Adult Learning & Degree Completion"/>
       
     </div>   
       
    </section>

    <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
           <ImageCard source ="/course1.png" title = "Web Development"/>
           <ImageCard source ="/course2.png" title = "Artificial Intelligence"/>
           <ImageCard source ="/course3.png" title = "Data Science"/>
           
        </div>
    </section>
 
 </>
  )
}

export default  Course