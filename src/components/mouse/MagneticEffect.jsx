import React, { useEffect, useRef } from 'react'

import gsap from 'gsap';

export default function MagneticEffect({children}) {

    const magnetic = useRef(null);

    useEffect( () => {
        const current = magnetic.current;

        const xTo = gsap.quickTo(current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const yTo = gsap.quickTo(current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const mouseMove = (e) => {

            const { clientX, clientY } = e;

            const {height, width, left, top} = current.getBoundingClientRect();

            const x = clientX - (left + width/2)

            const y = clientY - (top + height/2)

            xTo(x);

            yTo(y)

        }

        const mouseLeave = (e) => {

            gsap.to(current, {x: 0, duration: 1})

            gsap.to(current, {y: 0, duration: 1})

            xTo(0);

            yTo(0)

        }

        current.addEventListener("mousemove", mouseMove)

        current.addEventListener("mouseleave", mouseLeave)

        return () => {
            current.removeEventListener("mousemove", mouseMove)

            current.removeEventListener("mouseleave", mouseLeave)
        }

    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )

}