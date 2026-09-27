"use client";
import LikeButton from "./LikeButton";
import LikeCountBox from "./LikeCountBox";


function Like() {
    return (
        <>
            <section className={`grid grid-cols-1 items-center justify-center`}>
                <div className={`flex items-center justify-center flex-col`}>
                    <LikeButton />
                </div>
                <div className={`flex items-start justify-center gap-5 pt-10 `}>
                    <LikeCountBox />
                </div>
            </section>
        </>
    )
};

export default Like;