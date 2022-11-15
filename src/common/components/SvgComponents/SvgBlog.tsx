import React from "react"
import { SVGProps } from "react"

export const SvgBlog = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width}
        height={props.height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d={props.d}
            fill={props.color}
        />
    </svg>
)