import { Row,Container } from "react-bootstrap";

import{FaFacebookSquare, FaInstagram, FaTwitter,FaYoutube} from "react-icons/fa"


const CustomFooter = () => {
    

    return(
        <Container style={{color: 'gray', textAlign: 'left'}} className="py-3 "> 
            <Row style={{fontSize:'25px'}}>
            <FaFacebookSquare className="m-2 ml-3" />
            <FaInstagram className="m-2"/>
            <FaTwitter className="m-2"/>
            <FaYoutube className="m-2"/>
            </Row>
            <Row >
                <div class="col-12 col-sm-6 col-lg-3 ">
                  <div>Audio and Subtitles </div>  
                   <div>Media Center </div> 
                   <div>Privacy</div>  
                   <div>footerButton</div> 
                    
                    
                    </div>

                    <div class="col-12 col-sm-6 col-lg-3 ">
                    Audio Description<br/>
                    Invertor Relations <br/>
                    Legal Notices <br/>

                </div>
                <div class="col-12 col-sm-6 col-lg-3 ">
                    Help Center <br/>
                    Jobs <br/>
                    Cookie Preferences <br/>

                </div>

                <div class="col-12 col-sm-6 col-lg-3 ">
                    Gift Cards <br/>
                    Terms of use <br/>
                    Corporate Information <br/>

                </div>
            </Row>
            <Row><div className="footerButton mt-4 ml-3 py-1 px-2">
                        Service Code
                    </div></Row>
                    <Row>
                        <p>
                            
                        </p>
                    </Row>
            </Container>
       


    )




}


export default CustomFooter