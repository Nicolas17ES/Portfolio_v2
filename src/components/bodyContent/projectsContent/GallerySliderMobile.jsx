import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// SHOP IMAGES
import ProductImage from '../../../images/aulartshop/Product.png'
import AlchemistProduct from '../../../images/aulartshop/AlchemistProduct.png'
import ArtistCheckout from '../../../images/aulartshop/ArtistCheckout.png'
import Masterclasses from '../../../images/aulartshop/Masterclasses.png'
import Friday2 from '../../../images/aulartshop/Friday2.png'
import LearningPaths from '../../../images/aulartshop/LearningPaths.png'
import AulartBenefits from '../../../images/AulartBenefits.png'
// TOOLS IMAGES
import HomeToolsWhite from '../../../images/aulartools/1HomeToolsWhite.png'
import LeftMenu from '../../../images/aulartools/2LeftMenu.png'
import CreateVideo from '../../../images/aulartools/3CreateVideo.png'
import TranscriptVideo from '../../../images/aulartools/4TranscriptVideo.png'
import GeneratedVideo from '../../../images/aulartools/5GeneratedVideo.png'
import Editor from '../../../images/aulartools/6Editor.png'
import Translate from '../../../images/aulartools/7Translate.png'
import Translations from '../../../images/aulartools/8Translations.png'
import EditorTranslation from '../../../images/aulartools/9EditorTranslation.png'
import HomeMarketing from '../../../images/aulartools/9.5HomeMarketing.png'
import CreateResume from '../../../images/aulartools/10CreateResume.png'
import ResumedFile from '../../../images/aulartools/11ResumedFile.png'
import GeneratedBlog from '../../../images/aulartools/12GeneratedBlog.png'
import GeneratedLanding from '../../../images/aulartools/13GeneratedLanding.png'

// LINKINBIO
import LeftMenuBio from '../../../images/linkinbio/1LeftMenu.png'
import Access from '../../../images/linkinbio/2Access.png'
import AdminView from '../../../images/linkinbio/2AdminView.png'
import CreateLink from '../../../images/linkinbio/3CreateLink.png'
import EditLink from '../../../images/linkinbio/4EditLink.png'
import LinkinbioComputer from '../../../images/linkinbio/5LinkinbioComputer.png'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { GiBranchArrow } from "react-icons/gi";

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VideoPlayer from './VideoPlayer';
gsap.registerPlugin(ScrollTrigger);

// The Projects component displays project sections and handles animations based on mouse movements.
function GallerySliderMobile() {

    const {screenWidth, navbar_location } = useContext(GlobalContext);
    const [value, setValue] = useState(null);
    const [currentVideo, setCurrentVideo] = useState('');   
    const [viewVideoState, setViewVideoState] = useState(false);       
    const [blockedButton, setBlockButton] = useState(false);   
    const [viewVideoPopUp, setViewVideoPopUp] = useState(false);       
    const [hideVideo, setHideVideo] = useState(false);       
    const [videoSrc, setVideoSrc] = useState(false);       
    const [videoImage, setVideoImage] = useState(false);       
    const videoRef = useRef(null); // Reference to the '.work' container
    const modalRef = useRef(null); // Reference to the '.work' container

    const data = {
        'shop': [
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: 'I developed a dynamic React template, capable of fetching and displaying any masterclass from our database on demand. This solution ensured that users experienced lightning-fast load times and a smooth journey across all our featured masterclasses.',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/ProductRik.mp4'
            },
            {
                number: '02',
                title: 'Product Landing',
                stroke: 'The Alchemist',
                resume: 'To launch a React version of any producg, we implemented a simple redirect mechanism. Upon activation, it sends the masterclass id, prompting our server to retrieve all relevant data, seamlessly populating the React template.',
                image: AlchemistProduct,
                video: 'https://storage.googleapis.com/audio_porftolio/ProductRik.mp4'
            },
            {
                number: '03',
                title: 'BlackFriday Landing:',
                stroke: 'Filter classes',
                resume: 'This React template showcased our full masterclass catalog with dynamic discounts, drawing data from WooCommerce to ensure real-time accuracy. Filters for genre and popularity enhanced user navigation, providing a seamless shopping experience.',
                image: Friday2,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mp4'
            },
            {
                number: '04',
                title: 'BlackFriday Landing:',
                stroke: 'Checkout',
                resume: 'To streamline the Black Friday rush, we implemented a session-based cart system within the React environment, allowing users to seamlessly transfer their selections to the main site for checkout, ensuring no deal was missed.',
                image: ArtistCheckout,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mp4'
            },
            {
                number: '05',
                title: 'Membership Landing:',
                stroke: 'Slider section',
                resume: 'Revitalized the membership landing with React to showcase our extensive catalog, live sessions, and included plugins through intuitive sliders. Users exploring membership options experienced enhanced navigation and filtering capabilities.',
                image: LearningPaths,
                video: 'https://storage.googleapis.com/audio_porftolio/Membership.mp4'
            },
            {
                number: '06',
                title: 'Membership Landing:',
                stroke: 'Filter section',
                resume: 'Upon purchase, users were smoothly redirected from the optimized React landing to the main sites checkout, ensuring a seamless transaction process. This setup not only improved user experience but also streamlined the path to membership enrollment.',
                image: AulartBenefits,
                video: 'https://storage.googleapis.com/audio_porftolio/Membership.mp4'
            },
            {
                number: '07',
                title: 'Masterclasses Landing:',
                stroke: 'Filter section',
                resume: 'Throughout peak times, our Masterclass landing, built in React, offers a comprehensive view of our masterclass catalog. Enhanced with user-friendly filters, it facilitates the exploration of genres and popular picks, ensuring an engaging browsing experience.',
                image: Masterclasses,
                video: 'https://storage.googleapis.com/audio_porftolio/Masterclass.mp4'
            }
        ],
        'tools': [
            {
                number: '01',
                title: 'Home',
                stroke: 'Video Team',
                resume: 'The home landing for the Video Team displays a comprehensive table of all masterclasses awaiting subtitle generation. It shows the languages available for each class, indicated by flags, alongside the creators name and class title. Features include a search bar for efficient navigation and a button for creating new masterclasses.',
                image: HomeToolsWhite,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '02',
                title: 'Menu',
                stroke: 'All Teams Functionalities',
                resume: 'This interface features a navigation menu, tailored to company departments. It serves the Video Team with subtitle functionalities, while also catering to the Marketing departments content creation needs, ensuring department-specific tool access.',
                image: LeftMenu,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '03',
                title: 'Create Subtitles',
                stroke: 'Fill all data',
                resume: 'This interface is where users input essential details to initiate a new masterclass project. Aulart Tools is equipped to transcribe all chapters from a single masterclass in one operation, simplifying the start of the subtitle generation process.',
                image: CreateVideo,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '04',
                title: 'Transcript Video',
                stroke: 'Subtitles creation options',
                resume: 'Enables transcription from local uploads or directly from Dacast, where masterclass videos are hosted. After using NODEJS to extract the audio from these videos, the Whisper API is employed for high-accuracy transcription, streamlining the entire process from video to text conversion.',
                image: TranscriptVideo,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '05',
                title: 'Masterclass',
                stroke: 'Subtitles Functionalities',
                resume: 'Post-transcription, navigate the structured chapters of a masterclass on the landing page. Here, users can download files, extend the transcription scope, or fine-tune subtitles with an integrated editor.',
                image: GeneratedVideo,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '06',
                title: 'Editor',
                stroke: 'Edit subs & save',
                resume: 'Enhance subtitle accuracy with a synchronized audio player that scrolls the text editor as the audio progresses, facilitating a seamless editing experience directly within Aulart Tools.',
                image: Editor,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '07',
                title: 'Translate',
                stroke: 'Generate Translations',
                resume: 'Translate subtitles into multiple languages simultaneously using the powerful DeepL API, streamlining the localization process and ensuring content accessibility on a global scale.',
                image: Translate,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '08',
                title: 'Masterclass Translations',
                stroke: 'Translations Landing',
                resume: 'Manage individual masterclass chapters efficiently. Upload completed subtitles to Dacast with a simple click, utilizing playlist and language IDs to automate file organization and save significant time.',
                image: Translations,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '09',
                title: 'Editor',
                stroke: 'Edit translations',
                resume: 'A dual-pane editor allows users to compare and refine translations against the original subtitles, with synchronized scrolling features to enhance user convenience and editing precision.',
                image: EditorTranslation,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '10',
                title: 'Home',
                stroke: 'Marketing Team',
                resume: 'The Marketing Teams central hub displays masterclasses only after subtitles are fully prepared. This setup is crucial as it kickstarts the content generation process, ensuring that all subsequent creative outputs leverage these prepared subtitles.',
                image: HomeMarketing,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '11',
                title: 'Marketing Resumes',
                stroke: 'Generate Resumes from Landing',
                resume: 'To accurately generate masterclass resumes, Aulart Tools requires specific inputs like title, keywords, and a customized prompt for ChatGPT. Extensive fine-tuning ensures that the resulting vocabulary and style align perfectly with our established content standards.',
                image: CreateResume,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '12',
                title: 'Resume',
                stroke: 'Generated resumes',
                resume: 'Demonstrating Aulart Tools’ capability, this slide presents a sample resume generated for a masterclass. The integrated file editor streamlines content editing, reflecting the tool’s efficiency in producing professional, ready-to-use content.',
                image: ResumedFile,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '13',
                title: 'Editor',
                stroke: 'Generated Blog Post',
                resume: 'Upon generating all resumes, Aulart Tools crafts templates for our blog posts. These templates serve as a foundational guide, significantly accelerating content creation while fostering idea generation within the marketing team.',
                image: GeneratedBlog,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '14',
                title: 'Generated Landing',
                stroke: 'View and Edit landing',
                resume: 'Each new masterclass triggers the creation of a corresponding landing page on our website. Aulart Tools not only automates text generation for these pages but also integrates with the Wordpress API, allowing for direct data uploads and instant webpage updates.',
                image: GeneratedLanding,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
        ],
        'linkinbio': [
            {
                number: '01',
                title: 'Menu Access',
                stroke: 'Via Tools',
                resume: 'Access to the LinkInBio project is streamlined through the Aulart Tools portal, directing users to the social media content management platform efficiently and securely.',
                image: LeftMenuBio,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '02',
                title: 'Log In System',
                stroke: 'Private',
                resume: 'Featuring a secure login system, this interface ensures that only authorized personnel can access the LinkInBio management tools, safeguarding sensitive content and operations.',
                image: Access,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '03',
                title: 'Admin View',
                stroke: 'Funcitonalities',
                resume: 'The admin view supports dual language management, aligning with Aulart bilingual Instagram presence. Users can edit and manage LinkInBio entries for both English and Spanish audiences seamlessly.',
                image: AdminView,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '04',
                title: 'Create Link',
                stroke: 'Post Data',
                resume: 'This form enables the creation of new LinkInBio entries, requiring details like the description, target URL, campaign name for SEO, link positioning, and associated imagery, ensuring comprehensive control over content presentation.',
                image: CreateLink,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '05',
                title: 'Edit Link',
                stroke: 'Update Data',
                resume: 'Provides robust editing options for existing LinkInBio entries, allowing users to modify descriptions, links, campaign details, positioning, and images, maintaining flexibility in content management.',
                image: EditLink,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '06',
                title: 'User View',
                stroke: 'Computer Screen',
                resume: 'Illustrates how users interact with the LinkInBio project from a desktop perspective, showcasing the user-friendly interface and the seamless integration of content accessible through our customized platform.',
                image: LinkinbioComputer,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            }
        ]
        
    }


    // open pop up video
    const viewVideo = (e, value) => {
        e.preventDefault();
        if(currentVideo){
            setViewVideoState(value);
        }
    }


    useEffect(() => {
        if(navbar_location === 'aulart-shop'){
            setValue('shop')
        } else if(navbar_location === 'aulart-tools'){
            setValue('tools')
        } else  if(navbar_location === 'linkinbio'){
            setValue(navbar_location)
        }
    },[navbar_location])
    

    

    useEffect(() => {
        if (modalRef.current && videoRef.current) {
            if (viewVideoPopUp && !hideVideo) {
                // Ensures that the modal and image are ready to be interacted with and visible
                gsap.to(modalRef.current, {
                    duration: 1.5,
                    opacity: 1,
                    pointerEvents: 'all',
                    ease: 'power2.inOut'
                });
                gsap.fromTo(videoRef.current, {
                    scale: 0.35,
                    opacity: 0,
                    x: 50,
                    y: -50,
                }, {
                    duration: 1.5,
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    y: -50,
                    ease: 'power2.out',
                    onComplete: () => setBlockButton(false)
                });
            } else if (hideVideo) {
                // Animate out when closing the zoom
                gsap.to(modalRef.current, {
                    duration: 1,
                    opacity: 0,
                    pointerEvents: 'none',
                    ease: 'power2.inOut',
                    onComplete: () => {
                        setViewVideoPopUp(false)
                        setVideoImage(null)
                        setVideoSrc(null)
                        document.body.style.overflowY = 'auto';
                        setHideVideo(false)
                    }
                });
                gsap.to(videoRef.current, {
                    duration: 0.8,
                    scale: 0.35,
                    x: 50,
                    y: -50,
                    opacity: 0.3,
                    ease: 'power2.in'
                });
            }
        }
    }, [viewVideoPopUp, hideVideo]);

    const displayPopUp = (index, image) => {
        setVideoImage(image)
        setVideoSrc(index)
        setViewVideoPopUp(true)
        document.body.style.overflowY = 'hidden';
    }
    const closeVideoPopUp = () => {
        setHideVideo(true)
    }
  

    if(value === null) return null;
    return (
        <div className="pinned-gallery-container-mobile">
            {viewVideoPopUp && (
                <div ref={modalRef} className="image-zoom-modal" onClick={() => closeVideoPopUp()}>
                             <video
                                ref={videoRef}
                                poster={videoImage}
                                className='video-player'
                                id="myVideo"
                                controls
                                muted
                                controlsList={screenWidth > 480 && 'nofullscreen'}
                            >
                                {videoSrc && <source src={videoSrc} type="video/mp4" />}
                                Your browser does not support the video tag.
                            </video>
                </div> 
            )}
            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                allowTouchMove={true}
                speed={600} // Adjust the speed of the slide transition (in milliseconds)
                effect="slide"
                modules={[Navigation]}
            >
                {data[value].map((content, index) => (
                    <SwiperSlide>
                        <div className="content-gallery-mobile">
                        <div className="gallery-mobile-top">
                            <h2 className="title-gallery-mobile">{content.title}<span className="stroke">{content.stroke}</span></h2>
                            <span className="work_num-mobile">{content.number}</span>
                        </div>
                            <img src={content.image} className='pinned-gallery-image-mobile' alt="" />
                            <p className="resume-gallery-mobile">{content.resume}</p>
                            <div className="gallery-mobile-bottom"><GiBranchArrow style={{rotate: '135deg', marginLeft: '5px'}} className="gallery-arrow swiper-button-prev"/><button onClick={() => displayPopUp(content.video, content.image)} className="work_link-mobile">view video</button><GiBranchArrow style={{rotate: '-45deg', marginRight: '5px'}} className="gallery-arrow swiper-button-next"/></div>
                        </div>
                    </SwiperSlide> 
                ))}
            </Swiper> 
        </div>
    );
}

export default GallerySliderMobile;