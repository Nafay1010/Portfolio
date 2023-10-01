import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import {FaReact} from 'react-icons/fa'
import {FaLaravel} from 'react-icons/fa'
import {DiAndroid} from 'react-icons/di'
import {GrStorage} from 'react-icons/gr'
import {TbBinaryTree} from 'react-icons/tb'

export const Experience = () =>{
    return (
    <section className="experience" id="experience">
        <Container>
            <h1 style={{textAlign:"center", marginBottom:"50px", marginTop:"50px"}}>Experience</h1>
            <VerticalTimeline lineColor="#f2f2f2" animate={true}>
                <VerticalTimelineElement className="vertical-timeline-element--education" position={"right"} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{background:"#f2f2f2", color:"black"}} icon={<FaReact/>}>
                    <h3 style={{color:"black"}}>MERN Stack & React Framework</h3>
                    <p style={{color:"black"}}>Experienced with building AI Based MERN Stack Web Application.</p>
                    <p style={{color:"black"}}>Database administration and website design</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#f2f2f2" animate={true}>
                <VerticalTimelineElement className="vertical-timeline-element--education" position={"left"} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{background:"#f2f2f2", color:"black"}} icon={<FaLaravel/>}>
                    <h3 style={{color:"black"}}>Laravel Framework</h3>
                    <p style={{color:"black"}}>Experienced with WAMP and Laravel Framework</p>
                    <p style={{color:"black"}}>Database administration and website design</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#f2f2f2" animate={true}>
                <VerticalTimelineElement className="vertical-timeline-element--education" position={"right"} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{background:"#f2f2f2", color:"black"}} icon={<DiAndroid/>}>
                    <h3 style={{color:"black"}}>Mobile App Developing</h3>
                    <p style={{color:"black"}}>Basic experience in Android Java Mobile App Development.</p>
                    <p style={{color:"black"}}>Database administration and Mobile app design</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#f2f2f2" animate={true}>
                <VerticalTimelineElement className="vertical-timeline-element--education" position={"left"} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{background:"#f2f2f2", color:"black"}} icon={<TbBinaryTree/>}>
                    <h3 style={{color:"black"}}>Machine Learning & Data Science</h3>
                    <p style={{color:"black"}}>Cleaned & Processed raw datasets for Binary & Multiclass Classification by Applying different Machine Learning Models.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
                        <VerticalTimeline lineColor="#f2f2f2" animate={true}>
                <VerticalTimelineElement className="vertical-timeline-element--education" position={"right"} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{background:"#f2f2f2", color:"black"}} icon={<GrStorage/>}>
                    <h3 style={{color:"black"}}>Database Management</h3>
                    <p style={{color:"black"}}>Building & Management of a MySQL or NOSQL Database.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Container>
    </section>
    );
}