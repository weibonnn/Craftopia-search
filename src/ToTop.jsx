import React, { useState, useEffect } from "react";

export default function ToTop({initialStyle}) {
    const [isVisible, setIsVisible] = useState(false);
    //原始按鈕位置
    const [buttonStyle, setButtonStyle] = useState(initialStyle);


    const handleScroll = () => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const footer = document.querySelector("footer");
        const footerTop = footer.getBoundingClientRect().top + scrollY;

        setIsVisible(scrollY > 200);

        if (scrollY + viewportHeight > footerTop) {
            // 當滾動位置接近 footer 時，調整按鈕位置
            setButtonStyle({
                ...initialStyle,
                bottom: `${viewportHeight + scrollY - footerTop + 96}px`,
            });
        } else {
            // 恢復原始樣式
            setButtonStyle(initialStyle);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <div className="toTop" style={buttonStyle}>
                <button className="toTop-btn" onClick={scrollToTop}>
                    <svg id="toTop" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">


                        <path
                            d="M62.2775 85.9984H50.3757H38.9782C36.4902 85.7989 30.8688 84.2273 28.2867 79.5364C25.0591 73.6728 25.4219 68.1508 28.2867 63.7406C30.4632 60.3899 36.7592 59.0736 39.8859 59.1933H58.949C65.7069 58.3556 68.531 60.3899 70.3465 62.4243C76.3983 68.8862 73.8768 78.4595 70.3465 82.2888C67.5224 85.3522 63.7905 86.0383 62.2775 85.9984Z"
                            fill="#483D3F" />


                        <path
                            d="M56.5376 67H44.3385C39.5779 67 37.9414 62.9362 37.3463 61.732C36.1562 57.9692 38.239 53.7549 40.4705 51.3467C45.5287 45.0251 57.4302 43.52 60.7031 44.122C75.8776 47.4333 66.0588 54.959 63.6785 57.2167C61.2982 59.4744 63.8273 61.431 62.6371 64.1403C61.685 66.3076 58.1741 66.9498 56.5376 67Z"
                            id="red" fill="#BF6E52">

                            <animate attributeName="d" dur="1s" repeatCount="indefinite"
                                values="M56.5376 67H44.3385C39.5779 67 37.9414 62.9362 37.3463 61.732C36.1562 57.9692 38.239 53.7549 40.4705 51.3467C45.5287 45.0251 57.4302 43.52 60.7031 44.122C75.8776 47.4333 66.0588 54.959 63.6785 57.2167C61.2982 59.4744 63.8273 61.431 62.6371 64.1403C61.685 66.3076 58.1741 66.9498 56.5376 67Z;
            M56.5376 64H44.3385C39.5779 64 37.9414 59.9362 37.3463 58.732C36.1562 54.9692 38.239 50.7549 40.4705 48.3467C45.5287 42.0251 57.4302 40.52 60.7031 41.122C75.8776 44.4333 66.0588 51.959 63.6785 54.2167C61.2982 56.4744 63.8273 58.431 62.6371 61.1403C61.685 63.3076 58.1741 63.9498 56.5376 64Z;
            M56.5376 67H44.3385C39.5779 67 37.9414 62.9362 37.3463 61.732C36.1562 57.9692 38.239 53.7549 40.4705 51.3467C45.5287 45.0251 57.4302 43.52 60.7031 44.122C75.8776 47.4333 66.0588 54.959 63.6785 57.2167C61.2982 59.4744 63.8273 61.431 62.6371 64.1403C61.685 66.3076 58.1741 66.9498 56.5376 67Z;" />
                        </path>


                        <ellipse cx="56" cy="42.5" rx="7" ry="4.5" id="yellow" fill="#ECD8A3">

                            <animate attributeName="cy" from="42.5" to="33" dur="1s" repeatCount="indefinite" />

                            <animate attributeName="ry" from="4.5" to="7" dur="1s" repeatCount="indefinite" />
                        </ellipse>

                        <path opacity="0" d="M28.4531 49.3993C27.5916 49.6087 26.7946 49.6295 26.0622 49.4617C25.3277 49.2849 24.694 48.9106 24.1613 48.3389C23.6376 47.765 23.2568 46.9883 23.0187 46.0088C22.6969 44.6847 22.796 43.5512 23.316 42.6084C23.8339 41.6565 24.7912 41.0109 26.1878 40.6714C26.6776 40.5524 27.176 40.4889 27.6831 40.4809C28.1993 40.4707 28.6958 40.5373 29.1725 40.6808L28.9769 42.5437C28.7262 42.4606 28.4287 42.4224 28.0846 42.4292C27.7383 42.4269 27.4155 42.4621 27.1162 42.5349C26.4088 42.7068 25.913 43.0578 25.6288 43.5879C25.3515 44.1068 25.301 44.729 25.4773 45.4545C25.6713 46.2526 26.0366 46.8073 26.5734 47.1187C27.117 47.4188 27.7379 47.484 28.4363 47.3143C28.8262 47.2195 29.1792 47.0713 29.4952 46.8697C29.8112 46.668 30.0752 46.4501 30.2873 46.2161L31.365 47.5678C31.0911 47.9033 30.7323 48.2451 30.2886 48.593C29.8449 48.941 29.2331 49.2097 28.4531 49.3993ZM39.486 46.8476L35.5816 44.1802L36.3685 47.4179L34.0558 47.98L31.953 39.3279L34.2657 38.7658L35.1022 42.2076L37.1707 37.9733L39.1845 38.9679L37.2106 42.7613L40.7143 44.9066L39.486 46.8476Z" fill="black" />
                        <path opacity="0" d="M7.49092 60.6989L1.89963 54.4114C2.10339 53.9804 2.39008 53.5444 2.75971 53.1033C3.12313 52.6552 3.5071 52.2513 3.91162 51.8916C4.83226 51.0729 5.66848 50.6228 6.42031 50.5412C7.1791 50.4535 7.79728 50.6781 8.27485 51.2151C8.57256 51.5499 8.75517 51.9308 8.8227 52.3579C8.89022 52.785 8.81706 53.1872 8.60322 53.5648C9.04652 53.3329 9.50032 53.2604 9.96462 53.3471C10.4227 53.4268 10.8533 53.6933 11.2565 54.1467C11.5852 54.5163 11.7833 54.9147 11.8508 55.3417C11.9122 55.7618 11.8092 56.2219 11.5419 56.7219C11.2753 57.2087 10.8108 57.7467 10.1482 58.3359L7.49092 60.6989ZM5.69463 55.1396L6.58388 54.3488C6.79312 54.1627 6.90158 53.9476 6.90928 53.7035C6.92396 53.4531 6.84756 53.2338 6.6801 53.0455C6.53125 52.8781 6.32506 52.7867 6.06152 52.7712C5.79876 52.7426 5.48256 52.8926 5.11291 53.2214C5.02224 53.302 4.92382 53.402 4.81766 53.5214C4.71227 53.6276 4.62316 53.7381 4.55033 53.8528L5.69463 55.1396ZM8.05767 57.7969L9.07246 56.8945C9.30262 56.6898 9.43124 56.4692 9.45832 56.2328C9.4854 55.9964 9.4059 55.7736 9.21984 55.5644C9.05238 55.3761 8.85665 55.2753 8.63264 55.2622C8.40244 55.2421 8.16179 55.3437 7.91071 55.567L6.88546 56.4787L8.05767 57.7969ZM14.6213 54.3582L10.9966 45.6473L13.1204 43.7587L21.1703 48.5343L19.2558 50.2368L17.6861 49.2721L15.8029 50.9467L16.5776 52.6184L14.6213 54.3582ZM14.898 49.1286L16.0907 48.068L13.8337 46.6465L13.7918 46.6838L14.898 49.1286Z" fill="black" />
                        <path opacity="0" d="M46.1263 35.6618L45.5499 28.6434L43.2477 28.8325L43.0953 26.9767L50.0718 26.4038L50.2242 28.2595L47.9219 28.4486L48.4983 35.467L46.1263 35.6618ZM57.4022 34.7919C56.472 34.8683 55.6529 34.7577 54.9448 34.46C54.2452 34.1522 53.6866 33.6783 53.2688 33.0384C52.851 32.3984 52.6039 31.6133 52.5275 30.6831C52.4512 29.7529 52.5668 28.9381 52.8746 28.2385C53.1816 27.5297 53.6551 26.9664 54.2951 26.5486C54.9443 26.1301 55.7341 25.8826 56.6643 25.8062C57.5945 25.7298 58.4 25.8463 59.081 26.1556C59.7712 26.4641 60.3163 26.9438 60.7162 27.5946C61.1154 28.236 61.3532 29.0219 61.4296 29.9521C61.5442 31.3474 61.2483 32.4767 60.5419 33.3401C59.8441 34.1934 58.7975 34.6774 57.4022 34.7919ZM57.2372 32.7827C57.8697 32.7308 58.332 32.4868 58.6239 32.0508C58.9244 31.6047 59.0414 30.977 58.975 30.1677C58.9085 29.3584 58.6903 28.7536 58.3203 28.3532C57.9588 27.9427 57.4618 27.7635 56.8293 27.8154C56.1967 27.8674 55.7124 28.1272 55.3762 28.595C55.0486 29.0527 54.918 29.6861 54.9844 30.4954C55.0509 31.3047 55.2827 31.9037 55.6798 32.2925C56.0855 32.6713 56.6047 32.8347 57.2372 32.7827Z" fill="black" />
                        <path opacity="0" d="M69.9715 29.7823L72.8904 23.3738L70.7882 22.4163L71.56 20.7218L77.9304 23.6232L77.1586 25.3178L75.0564 24.3603L72.1374 30.7688L69.9715 29.7823ZM80.2403 34.521C79.3909 34.1341 78.7297 33.6381 78.2567 33.0329C77.796 32.4231 77.5393 31.737 77.4866 30.9746C77.4339 30.2121 77.601 29.4062 77.9878 28.5568C78.3747 27.7075 78.873 27.0524 79.4828 26.5918C80.0965 26.1226 80.7845 25.8617 81.547 25.8089C82.3179 25.7601 83.1281 25.9291 83.9774 26.316C84.8268 26.7028 85.4734 27.1973 85.917 27.7994C86.3692 28.4053 86.6112 29.0899 86.6431 29.853C86.6788 30.6077 86.5033 31.4098 86.1164 32.2592C85.5361 33.5332 84.7271 34.3749 83.6894 34.7843C82.6641 35.1891 81.5144 35.1013 80.2403 34.521ZM81.0759 32.6863C81.6535 32.9494 82.1761 32.9618 82.6436 32.7234C83.1234 32.4805 83.5316 31.9895 83.8682 31.2506C84.2048 30.5116 84.3092 29.8771 84.1814 29.3472C84.0659 28.8125 83.7194 28.4137 83.1418 28.1506C82.5642 27.8876 82.0146 27.8783 81.4931 28.1227C80.9839 28.3626 80.561 28.852 80.2244 29.5909C79.8878 30.3299 79.7981 30.9659 79.9553 31.499C80.1248 32.0275 80.4984 32.4232 81.0759 32.6863ZM86.5673 37.3412L89.846 30.1427C90.1233 30.0742 90.4648 30.0451 90.8703 30.0554C91.2758 30.0658 91.7122 30.1209 92.1794 30.2209C92.6552 30.3248 93.1224 30.4812 93.581 30.6901C94.6343 31.1698 95.3467 31.8123 95.7184 32.6174C96.094 33.4141 96.0593 34.3008 95.6144 35.2776C95.3049 35.9571 94.9013 36.4604 94.4036 36.7876C93.9183 37.1101 93.3833 37.2715 92.7985 37.2718C92.2223 37.276 91.6454 37.1466 91.0678 36.8835C90.762 36.7442 90.508 36.5926 90.3058 36.4287C90.112 36.2687 89.9515 36.1032 89.8242 35.9324L88.7332 38.3277L86.5673 37.3412ZM91.6845 35.0568C92.0327 35.2154 92.3633 35.2326 92.6762 35.1085C92.9976 34.9883 93.2589 34.7073 93.4601 34.2656C93.6497 33.8494 93.6863 33.4764 93.5699 33.1464C93.4574 32.808 93.1633 32.5305 92.6876 32.3139C92.2969 32.1359 91.9266 32.0595 91.5767 32.0848L90.9964 33.3588C90.8145 33.758 90.8042 34.1072 90.9654 34.4062C91.1305 34.6968 91.3702 34.9136 91.6845 35.0568ZM97.2618 38.6586L99.3259 33.3837L101.696 34.463L98.9818 39.442L97.2618 38.6586ZM96.754 42.104C96.3888 41.9377 96.1437 41.6876 96.0188 41.3538C95.9025 41.0239 95.9216 40.689 96.0764 40.3493C96.2311 40.0095 96.4712 39.7753 96.7965 39.6465C97.1217 39.5178 97.467 39.5366 97.8322 39.7029C98.1805 39.8616 98.4232 40.1055 98.5605 40.4346C98.6977 40.7638 98.6851 41.1067 98.5226 41.4635C98.3679 41.8032 98.1278 42.0375 97.8025 42.1662C97.4773 42.295 97.1277 42.2742 96.754 42.104Z" fill="black" />

                    </svg>


                    <svg id="toTopHover" width="100" height="100" viewBox="0 0 100 100" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M62.2775 90.9984H50.3757H38.9782C36.4902 90.7989 30.8688 89.2273 28.2867 84.5364C25.0591 78.6728 25.4219 73.1508 28.2867 68.7406C30.4632 65.3899 36.7592 64.0736 39.8859 64.1933H58.949C65.7069 63.3556 68.531 65.3899 70.3465 67.4243C76.3983 73.8862 73.8768 83.4595 70.3465 87.2888C67.5224 90.3522 63.7905 91.0383 62.2775 90.9984Z"
                            fill="#483D3F" />
                        <path
                            d="M56.5376 69H44.3385C39.5779 69 37.9414 64.9362 37.3463 63.732C36.1562 59.9692 38.239 55.7549 40.4705 53.3467C45.5287 47.0251 57.4302 45.52 60.7031 46.122C75.8776 49.4333 66.0588 56.959 63.6785 59.2167C61.2982 61.4744 63.8273 63.431 62.6371 66.1403C61.685 68.3076 58.1741 68.9498 56.5376 69Z"
                            fill="#BF6E52" />
                        <circle cx="56" cy="27" r="7" fill="#ECD8A3" />
                        <path opacity="1"
                            d="M27.4531 34.3993C26.5916 34.6087 25.7946 34.6295 25.0622 34.4617C24.3277 34.2849 23.694 33.9106 23.1613 33.3389C22.6376 32.765 22.2568 31.9883 22.0187 31.0088C21.6969 29.6847 21.796 28.5512 22.316 27.6084C22.8339 26.6565 23.7912 26.0109 25.1878 25.6714C25.6776 25.5524 26.176 25.4889 26.6831 25.4809C27.1993 25.4707 27.6958 25.5373 28.1725 25.6808L27.9769 27.5437C27.7262 27.4606 27.4287 27.4224 27.0846 27.4292C26.7383 27.4269 26.4155 27.4621 26.1162 27.5349C25.4088 27.7068 24.913 28.0578 24.6288 28.5879C24.3515 29.1068 24.301 29.729 24.4773 30.4545C24.6713 31.2526 25.0366 31.8073 25.5734 32.1187C26.117 32.4188 26.7379 32.484 27.4363 32.3143C27.8262 32.2195 28.1792 32.0713 28.4952 31.8697C28.8112 31.668 29.0752 31.4501 29.2873 31.2161L30.365 32.5678C30.0911 32.9033 29.7323 33.2451 29.2886 33.593C28.8449 33.941 28.2331 34.2097 27.4531 34.3993ZM38.486 31.8476L34.5816 29.1802L35.3685 32.4179L33.0558 32.98L30.953 24.3279L33.2657 23.7658L34.1022 27.2076L36.1707 22.9733L38.1845 23.9679L36.2106 27.7613L39.7143 29.9066L38.486 31.8476Z"
                            fill="black" />
                        <path opacity="1"
                            d="M6.49092 40.6989L0.899632 34.4114C1.10339 33.9804 1.39008 33.5444 1.75971 33.1033C2.12313 32.6552 2.5071 32.2513 2.91162 31.8916C3.83226 31.0729 4.66848 30.6228 5.42031 30.5412C6.1791 30.4535 6.79728 30.6781 7.27485 31.2151C7.57256 31.5499 7.75517 31.9308 7.8227 32.3579C7.89022 32.785 7.81706 33.1872 7.60322 33.5648C8.04652 33.3329 8.50032 33.2604 8.96462 33.3471C9.42271 33.4268 9.85333 33.6933 10.2565 34.1467C10.5852 34.5163 10.7833 34.9147 10.8508 35.3417C10.9122 35.7618 10.8092 36.2219 10.5419 36.7219C10.2753 37.2087 9.81079 37.7467 9.14821 38.3359L6.49092 40.6989ZM4.69463 35.1396L5.58388 34.3488C5.79312 34.1627 5.90158 33.9476 5.90928 33.7035C5.92396 33.4531 5.84756 33.2338 5.6801 33.0455C5.53125 32.8781 5.32506 32.7867 5.06152 32.7712C4.79876 32.7426 4.48256 32.8926 4.11291 33.2214C4.02224 33.302 3.92382 33.402 3.81766 33.5214C3.71227 33.6276 3.62316 33.7381 3.55033 33.8528L4.69463 35.1396ZM7.05767 37.7969L8.07246 36.8945C8.30262 36.6898 8.43124 36.4692 8.45832 36.2328C8.4854 35.9964 8.4059 35.7736 8.21984 35.5644C8.05238 35.3761 7.85665 35.2753 7.63264 35.2622C7.40244 35.2421 7.16179 35.3437 6.91071 35.567L5.88546 36.4787L7.05767 37.7969ZM13.6213 34.3582L9.99664 25.6473L12.1204 23.7587L20.1703 28.5343L18.2558 30.2368L16.6861 29.2721L14.8029 30.9467L15.5776 32.6184L13.6213 34.3582ZM13.898 29.1286L15.0907 28.068L12.8337 26.6465L12.7918 26.6838L13.898 29.1286Z"
                            fill="black" />
                        <path opacity="1"
                            d="M37.9486 13.527L37.3722 6.50864L35.0699 6.6977L34.9175 4.84195L41.894 4.26902L42.0464 6.12477L39.7442 6.31384L40.3206 13.3322L37.9486 13.527ZM49.2245 12.6572C48.2943 12.7336 47.4751 12.6229 46.767 12.3252C46.0675 12.0174 45.5088 11.5436 45.0911 10.9036C44.6733 10.2637 44.4262 9.47858 44.3498 8.54838C44.2734 7.61818 44.3891 6.80331 44.6969 6.10377C45.0039 5.39493 45.4774 4.83162 46.1173 4.41384C46.7666 3.99529 47.5563 3.74782 48.4865 3.67143C49.4167 3.59504 50.2223 3.7115 50.9032 4.0208C51.5935 4.32935 52.1386 4.80901 52.5385 5.45979C52.9377 6.10127 53.1755 6.88711 53.2518 7.81731C53.3664 9.21262 53.0705 10.342 52.3642 11.2053C51.6663 12.0586 50.6198 12.5426 49.2245 12.6572ZM49.0595 10.6479C49.692 10.596 50.1542 10.352 50.4462 9.91599C50.7467 9.4699 50.8637 8.84222 50.7973 8.03294C50.7308 7.22366 50.5126 6.61883 50.1425 6.21844C49.7811 5.80798 49.2841 5.62872 48.6515 5.68067C48.019 5.73262 47.5346 5.99246 47.1985 6.46022C46.8708 6.9179 46.7402 7.55138 46.8067 8.36066C46.8731 9.16993 47.105 9.76897 47.5021 10.1578C47.9078 10.5365 48.4269 10.6999 49.0595 10.6479Z"
                            fill="black" />
                        <path opacity="1"
                            d="M65.9715 11.7823L68.8904 5.37376L66.7882 4.41626L67.56 2.72175L73.9304 5.62325L73.1586 7.31776L71.0564 6.36027L68.1374 12.7688L65.9715 11.7823ZM76.2403 16.521C75.3909 16.1341 74.7297 15.6381 74.2567 15.0329C73.796 14.4231 73.5393 13.737 73.4866 12.9746C73.4339 12.2121 73.601 11.4062 73.9878 10.5568C74.3747 9.70747 74.873 9.05244 75.4828 8.59176C76.0965 8.12259 76.7845 7.86165 77.547 7.80894C78.3179 7.76009 79.1281 7.9291 79.9774 8.31597C80.8268 8.70284 81.4734 9.1973 81.917 9.79937C82.3692 10.4053 82.6112 11.0899 82.6431 11.853C82.6788 12.6077 82.5033 13.4098 82.1164 14.2592C81.5361 15.5332 80.7271 16.3749 79.6894 16.7843C78.6641 17.1891 77.5144 17.1013 76.2403 16.521ZM77.0759 14.6863C77.6535 14.9494 78.1761 14.9618 78.6436 14.7234C79.1234 14.4805 79.5316 13.9895 79.8682 13.2506C80.2048 12.5116 80.3092 11.8771 80.1814 11.3472C80.0659 10.8125 79.7194 10.4137 79.1418 10.1506C78.5642 9.88756 78.0146 9.87826 77.4931 10.1227C76.9839 10.3626 76.561 10.852 76.2244 11.5909C75.8878 12.3299 75.7981 12.9659 75.9553 13.499C76.1248 14.0275 76.4984 14.4232 77.0759 14.6863ZM82.5673 19.3412L85.846 12.1427C86.1233 12.0742 86.4648 12.0451 86.8703 12.0554C87.2758 12.0658 87.7122 12.1209 88.1794 12.2209C88.6552 12.3248 89.1224 12.4812 89.581 12.6901C90.6343 13.1698 91.3467 13.8123 91.7184 14.6174C92.094 15.4141 92.0593 16.3008 91.6144 17.2776C91.3049 17.9571 90.9013 18.4604 90.4036 18.7876C89.9183 19.1101 89.3833 19.2715 88.7985 19.2718C88.2223 19.276 87.6454 19.1466 87.0678 18.8835C86.762 18.7442 86.508 18.5926 86.3058 18.4287C86.112 18.2687 85.9515 18.1032 85.8242 17.9324L84.7332 20.3277L82.5673 19.3412ZM87.6845 17.0568C88.0327 17.2154 88.3633 17.2326 88.6762 17.1085C88.9976 16.9883 89.2589 16.7073 89.4601 16.2656C89.6497 15.8494 89.6863 15.4764 89.5699 15.1464C89.4574 14.808 89.1633 14.5305 88.6876 14.3139C88.2969 14.1359 87.9266 14.0595 87.5767 14.0848L86.9964 15.3588C86.8145 15.758 86.8042 16.1072 86.9654 16.4062C87.1305 16.6968 87.3702 16.9136 87.6845 17.0568ZM93.2618 20.6586L95.3259 15.3837L97.6957 16.463L94.9818 21.442L93.2618 20.6586ZM92.754 24.104C92.3888 23.9377 92.1437 23.6876 92.0188 23.3538C91.9025 23.0239 91.9216 22.689 92.0764 22.3493C92.2311 22.0095 92.4712 21.7753 92.7965 21.6465C93.1217 21.5178 93.467 21.5366 93.8322 21.7029C94.1805 21.8616 94.4232 22.1055 94.5605 22.4346C94.6977 22.7638 94.6851 23.1067 94.5226 23.4635C94.3679 23.8032 94.1278 24.0375 93.8025 24.1662C93.4773 24.295 93.1277 24.2742 92.754 24.104Z"
                            fill="black" />
                    </svg>

                </button>
            </div>
        )
    );
}
