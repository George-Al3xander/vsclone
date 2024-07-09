import React from 'react';

import { ImageResponse } from 'next/og';

import { LANGUAGES } from '@/constants/consts';
import { metadata, titles } from '@/constants/data';

//import bg from "../../public/assets/img/bg_macos.jpg";
// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'About Acme';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    // Font
    const interSemiBold = fetch(
        new URL('../../public/assets/fonts/Inter-Bold.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());
    const { title, description } = metadata;
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                className="og-image"
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    color: 'white',
                    background:
                        'radial-gradient(circle at 10% 20%, rgb(3, 235, 255) 0%, rgb(152, 70, 242) 100.2%)',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <svg
                            width="140px"
                            height="140px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M0.228341 8.36915C0.228341 8.36915 -0.356212 7.94324 0.345251 7.37453L1.97956 5.89736C1.97956 5.89736 2.44721 5.40004 2.94164 5.83334L18.0231 17.375V22.9094C18.0231 22.9094 18.0158 23.7785 16.9124 23.6825L0.228341 8.36915Z"
                                    fill="#ffffff"
                                />
                                <path
                                    d="M4.11555 11.9367L0.228273 15.5089C0.228273 15.5089 -0.171172 15.8093 0.228273 16.346L2.03308 18.0053C2.03308 18.0053 2.46175 18.4706 3.09502 17.9413L7.21611 14.7827L4.11555 11.9367Z"
                                    fill="#ffffff"
                                />
                                <path
                                    d="M10.94 11.9661L18.0691 6.46362L18.0228 0.95865C18.0228 0.95865 17.7183 -0.242793 16.7027 0.382548L7.21589 9.11025L10.94 11.9661Z"
                                    fill="#ffffff"
                                />
                                <path
                                    d="M16.9121 23.69C17.3261 24.1183 17.8279 23.978 17.8279 23.978L23.3838 21.2108C24.0951 20.7208 23.9952 20.1127 23.9952 20.1127V3.58803C23.9952 2.86175 23.2596 2.61063 23.2596 2.61063L18.4441 0.264377C17.3919 -0.392968 16.7027 0.382548 16.7027 0.382548C16.7027 0.382548 17.5892 -0.262484 18.0228 0.95865L18.0228 22.8086C18.0228 22.9588 17.9911 23.1065 17.9278 23.2394C17.8011 23.4979 17.5259 23.7392 16.8658 23.6383L16.9121 23.69Z"
                                    fill="#ffffff"
                                />
                            </g>
                        </svg>
                        <h1 style={{ fontSize: 180 }}>{title?.toString()}</h1>
                    </div>
                    <p
                        style={{
                            fontSize: 40,
                            opacity: 0.7,
                            alignSelf: 'flex-end',
                        }}
                    >
                        {description}
                    </p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        opacity: 0.7,
                        marginTop: 'auto',
                        fontSize: 30,
                    }}
                >
                    {LANGUAGES.map((lang) => (
                        <div key={lang}>{titles[lang]}</div>
                    ))}
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
            fonts: [
                {
                    name: 'Inter',
                    data: await interSemiBold,
                    style: 'normal',
                    weight: 400,
                },
            ],
        },
    );
}
