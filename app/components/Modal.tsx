"use client";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import {useEffect, useState} from "react";

function Modal() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {push} = useRouter()



   let modal = searchParams.get("modal")
    useEffect(()=> {
        if(modal){
            document.body.classList.add("overflow-y-hidden")
        }else{
            document.body.classList.remove("overflow-y-hidden")
        }
    },[modal])
    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                        <div  className="bg-white m-auto p-8">
                            <button onClick={()=> push(pathname)} className={"text-4xl block text-black ml-auto"}>X</button>
                            <div className="flex flex-col items-center">
                                <br/>
                                <NewsLatterBox/>
                            </div>
                        </div>


                </dialog>
            }
        </>
    );
}

export default Modal;
