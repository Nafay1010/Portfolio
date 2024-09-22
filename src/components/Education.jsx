import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import {FaGraduationCap} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
export const Education = () =>{
    return (
    <section className="education" id="education">
        <Container>
            <h1 style={{textAlign:"center", marginBottom:"50px"}}>Education</h1>
            <VerticalTimeline lineColor="#f2f2f2" animate={true}>
                <VerticalTimelineElement className="vertical-timeline-element--education" position={"left"} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{background:"#f2f2f2", color:"black"}} icon={<FaGraduationCap/>} date="2022 – now">
                    <h3 style={{color:"black"}}>Graduated from FAST NUCES, Pakistan</h3>
                    <p style={{color:"black"}}>Silver Medalist (Awarded for 3.90 SGPA in 3rd Semester)</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#f2f2f2">
                <VerticalTimelineElement className="vertical-timeline-element--education" position={"right"} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{background:"#f2f2f2", color:"black"}} icon={<ImBooks/>} date="2018 – 2019">
                    <h3 style={{color:"black"}}>AS & A Levels</h3>
                    <p style={{color:"black"}}>Jawahir Al-Riyadh International School, Riyadh, KSA</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="#f2f2f2">
                <VerticalTimelineElement className="vertical-timeline-element--education" position={"left"}  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{background:"#f2f2f2", color:"black"}} icon={<ImBooks/>} date="2017 – 2018">
                    <h3 style={{color:"black"}}>O Levels</h3>
                    <p style={{color:"black"}}>Jawahir Al-Riyadh International School, Riyadh, KSA</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Container>
    </section>
    );
}