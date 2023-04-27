import { useReveal } from "../hooks/useReveal";

export function RevealContent({children}){
    const [reveal , thisEl] = useReveal();

    return <div className={`${reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} duration-500 transition-[opacity_transform] delay-100`} ref={thisEl}>
        {children}
    </div>
}