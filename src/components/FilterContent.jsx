import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export function FilterContent({children , custom}){
    const [value , setValue] = useState(3);
    const thisEl = useRef(null);

    thisEl.current && (thisEl.current.style.filter = `grayscale(${value})`);

    useEffect(() => {

        const observer = new IntersectionObserver((arr) => {
            if(arr[0].isIntersecting){
                setValue(value - (arr[0].intersectionRatio * value));
            }
        } , {
            threshold : [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]
        })

        observer.observe(thisEl.current);

    } , [])
    return <div className={`${custom} transition-all`} ref={thisEl}>
        {children}
    </div>
}