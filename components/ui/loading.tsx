'use client'

import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
    return (
        <div className="flex justify-center my-8">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="300"
                visible={true}
            />
        </div>
    )
}