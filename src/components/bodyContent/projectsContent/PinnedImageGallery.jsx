import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProductImage from '../../../images/aulartshop/Product.png'
import AlchemistProduct from '../../../images/aulartshop/AlchemistProduct.png'
import ArtistCheckout from '../../../images/aulartshop/ArtistCheckout.png'
import Masterclasses from '../../../images/aulartshop/Masterclasses.png'
import Friday2 from '../../../images/aulartshop/Friday2.png'
import LearningPaths from '../../../images/aulartshop/LearningPaths.png'
import AulartBenefits from '../../../images/AulartBenefits.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VideoPlayer from './VideoPlayer';
gsap.registerPlugin(ScrollTrigger);

// The Projects component displays project sections and handles animations based on mouse movements.
function PinnedImageGallery() {

    const { dispatch, display_vide_popup, navbar_location } = useContext(GlobalContext);
    const [value, setValue] = useState(null);
    const workRef = useRef(null); // Reference to the '.work' container

    useEffect(() => {
        // Ensure GSAP and ScrollTrigger are only used once the component is mounted
        const workInfoItems = workRef.current.querySelectorAll('.work_photo-item');
        workInfoItems.forEach((item, index) => {
            item.style.zIndex = workInfoItems.length - index;
        });

        gsap.set('.work_photo-item', { clipPath: "inset(0px 0px 0px 0px)" });

        const animation = gsap.to('.work_photo-item:not(:last-child)', {
            clipPath: "inset(0px 0px 100% 0px)",
            stagger: .4,
            ease: 'none'
        });

        ScrollTrigger.create({
            id: "PinnedImageGallery",
            trigger: workRef.current,
            start: 'top top',
            end: 'bottom bottom',
            animation: animation,
            scrub: 1,
        });

        // Cleanup function to kill animations on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if(trigger.vars.id === "PinnedImageGallery") { // Check the identifier
                  trigger.kill();
                }
              });
        };
    }, []);

    useEffect(() => {
        if(navbar_location === 'aulart-shop'){
            setValue(0)
        } else if(navbar_location === 'aulart-tools'){
            setValue(1)
        } else  if(navbar_location === 'linkinbio'){
            setValue(2)
        }
    },[navbar_location])


    const data = {
        shop: [
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
        tools: [
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            }
        ],
        linkinbio: [
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            },
            {
                number: '01',
                title: 'Product Landing',
                stroke: 'Rik Simpson',
                resume: '',
                image: ProductImage,
                video: 'https://storage.googleapis.com/audio_porftolio/BlackFriday.mov'
            }
        ]
        
    }

    const displayPopUp = (index, image) => {
        dispatch({
            type: 'SET_DISPLAY_VIDEO_POPUP',
            payload: {index: index, value: true, image: image},
        })
    }

    useGSAP(() => {
        gsap.fromTo('.pinned-gallery-container', {
            opacity: 0,
        }, {opacity: 1,
            ease: "power1.inOut",
            duration: 1.5})
    }, [])

    return (
        <div className="pinned-gallery-container">
            <section ref={workRef} className="work">
                <div className="work_left">
                    <div className="work_text">

                        {data.shop.map((content, index) => (
                            <div key={index} className="work_info">
                                <div className="work_left-b1">
                                    <span className="work_num">{content.number}</span>
                                    <h2 className="title-gallery">{content.title}<span className="stroke">{content.stroke}</span></h2>
                                    <p className="resume-gallery">{content.resume}</p>
                                    <button onClick={() => displayPopUp(content.video, content.image)} className="work_link">view video</button>
                                    {display_vide_popup.value && <VideoPlayer/>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="work_right">
                    <div className="work_right-b1">
                        <div className="work_photo">
                            {data.shop.map((content, index) => (
                                <div key={index} className="work_photo-item" title={index + 1}>
                                    <img src={content.image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PinnedImageGallery;