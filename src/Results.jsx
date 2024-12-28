import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hearttoggle from "./Hearttoggle";

function Results({ filteredCourses, resultVisible }) {

    const [oderIsOpen, setOderIsOpen] = useState(false);
    const [classifyIsOpen, setClassifyIsOpen] = useState(false);




    /* 分類篩選器選擇 */
    const [selectedFilters, setSelectedFilters] = useState({ price: [], duration: [], level: [] });

    const priceOptions = ["1000元以下", "1000-2000元", "2001-4000元", "4000元以上"];
    const durationOptions = ["0-1hr", "2hr-3hr", "4hr以上"];
    const levelOptions = ["入門", "進階"];

    /* 紀錄分類篩選器選擇的選項 */
    const filtersClicked = (category, value) => {
        setSelectedFilters((prev) => {

            const currentValues = prev[category];  //目前該類別中已經選中的值

            // 檢查該值是否已經存在於陣列中
            if (currentValues.includes(value)) {

                //如果已經存在，則移除該值
                return {
                    ...prev,
                    [category]: currentValues.filter((item) => item !== value), //透過filter篩選出不等於value的值丟進新的陣列
                };
            } else {

                // 如果不存在，則新增該值
                return {
                    ...prev,
                    [category]: [...currentValues, value], //目前已經存在的值再加上新選中的值value
                };
            };


        });

        console.log(selectedFilters);
    };


    /* 課程排序選擇 */
    const [selectedOrderOption, setSelectedOrderOption] = useState("排序");
    const orderOptions = [
        { value: "最新", label: "最新" },
        { value: "最熱門", label: "最熱門" },
        { value: "最低價", label: "最低價" },
        { value: "最高價", label: "最高價" },
    ];



    /* 管理目前選擇的排序方式 */
    const [sortOption, setSortOption] = useState(null);

    // 根據選擇的排序方式改變課程顯示順序
    const sortedCourses = [...filteredCourses].sort((a, b) => {   //把搜尋顯示的課程丟進來重新排序

        if (sortOption === "最新") {
            return new Date(b.releaseDate) - new Date(a.releaseDate); // 最新日期優先
        } else if (sortOption === "最熱門") {
            return b.sales - a.sales; // 最熱門優先
        } else if (sortOption === "最高價") {
            return b.price - a.price; // 價格最高優先
        } else if (sortOption === "最低價") {
            return a.price - b.price; // 價格最低優先
        } else {
            return 0; // 默認無排序
        }

    });




    // 點擊選單時顯示&隱藏
    const toggleDropdown = (dropdownType) => {
        if (dropdownType === "order") {
            setOderIsOpen((prevent) => !prevent);
            setClassifyIsOpen(false);

        } else if (dropdownType === "classify") {
            setClassifyIsOpen((prevent) => !prevent);
            setOderIsOpen(false);

        }
    };

    // 點擊選項後顯示選中的值
    const handleOptionClick = (value, label, e) => {
        e.stopPropagation(); // 阻止事件冒泡

        if (selectedOrderOption === value) {
            setSelectedOrderOption("排序");
            setSortOption(null);

        } else {
            setSelectedOrderOption(label); // 更新顯示的選中值
            setSortOption(value);

            console.log(`選的值：${value}`)
        }
        setOderIsOpen(false);  // 收起選單

    };

    // 點擊外部時收起選單
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.order') && !e.target.closest('.classify')) {
                setClassifyIsOpen(false);
                setOderIsOpen(false);

            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };

    }, []);



    /* 篩選出最新一個月內上架課程 */
    // 取得今天的日期
    const today = new Date();

    // 取得三個月前的日期
    const monthAgo = new Date();
    monthAgo.setMonth(today.getMonth() - 3);  //setMonth 設定月份









    /* AOS 初始化 */

    useEffect(() => {

        AOS.init(); // 初始化

    }, [])


    return (
        <>


            {resultVisible && (

                <section data-aos="fade-up" data-aos-offset="100" id="searchResault" className="courseSection" >

                    <figure className="listTitle">
                        <img src="./images/title-resault.svg" alt="" />
                    </figure>


                    {filteredCourses.length > 0 ? (


                        <>
                            <div data-aos="fade-right" data-aos-offset="80" className="allFilter">
                                <div className={`filter classify  ${classifyIsOpen ? "open" : ""}   ${selectedFilters.price.length !== 0 ||
                                        selectedFilters.duration.length !== 0 ||
                                        selectedFilters.level.length !== 0 ? "active" : ""} `} >
                                    <div className={`select-header`} onClick={() => toggleDropdown("classify")}>
                                        <div>分類</div>
                                        <img className="arrowDown" src="./images/icons-arrowDownR.svg" alt="" />
                                    </div>
                                    <div className='option-container'>
                                        <div className="select-option">
                                            <p className="classify-title">價格</p>
                                            <div className="price">
                                                {priceOptions.map((option) => (
                                                    <p
                                                        key={option}
                                                        className={`classify-content ${selectedFilters.price.includes(option) ? "selected" : ""}`}
                                                        onClick={() => filtersClicked("price", option)}>
                                                        {option}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="select-option">
                                            <p className="classify-title">課程時長</p>
                                            <div className="duration">
                                                {durationOptions.map((option) => (
                                                    <p
                                                        key={option}
                                                        className={`classify-content ${selectedFilters.duration.includes(option) ? "selected" : ""}`}
                                                        onClick={() => filtersClicked("duration", option)}>
                                                        {option}</p>
                                                ))}

                                            </div>
                                        </div>
                                        <div className="select-option">
                                            <p className="classify-title">難易度</p>
                                            <div>
                                                {levelOptions.map((option) => (
                                                    <p
                                                        key={option}
                                                        className={`classify-content ${selectedFilters.level.includes(option) ? "selected" : ""}`}
                                                        onClick={() => filtersClicked("level", option)}>
                                                        {option}</p>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 排序 - 下拉選單顯示選擇區塊 */}
                                <div className={`filter order ${oderIsOpen ? "open" : ""}`} onClick={() => toggleDropdown("order")}>
                                    <div className="select-header">
                                        <div>{selectedOrderOption}</div>
                                        <img className="arrowDown" src="./images/icons-arrowDownR.svg" alt="" />
                                    </div>

                                    {/* 選擇選項區塊 */}
                                    {oderIsOpen && (
                                        <div className='option-container'>
                                            {orderOptions.map((option) => (
                                                <div
                                                    key={option.value}
                                                    className={`select-option ${selectedOrderOption === option.value ? "active" : ""}`}
                                                    onClick={(e) => handleOptionClick(option.value, option.label, e)}>
                                                    <div>{option.label}</div>
                                                </div>
                                            ))}

                                        </div>
                                    )}


                                </div>

                            </div>


                            <div className="classList">
                                {sortedCourses.map((course) => {

                                    const courseDate = new Date(course.releaseDate); // 將課程日期轉為 Date 對象
                                    const newest = courseDate >= monthAgo; // 判斷是否在三個月內

                                    return (
                                        <div data-aos="fade-up" key={course.id} className="classCard">

                                            <figure className="classPhoto">
                                                <a href="#">
                                                    <p>See More <img src="./images/icons-arrowRightBold.svg" alt="" /></p>
                                                    <img className="photo" src={`./images/course/${course.image}`} alt="" />

                                                    <div className="tagHotorNew ">
                                                        {course.sales > 20 && (
                                                            <img src="./images/labels-hot.svg" alt="" />
                                                        )}
                                                        {newest && (
                                                            <img src="./images/labels-new.svg" alt="" />
                                                        )}
                                                    </div>



                                                </a>
                                            </figure>
                                            <div className="classTag">
                                                <p className="classLevel">{course.level}</p>
                                                <p className="classTime">{course.duration}hr</p>
                                            </div>
                                            <div className="classTitle">
                                                <h3><a href="#">{course.courseName}</a></h3>
                                                <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' />
                                            </div>
                                            <div className="classPrice">
                                                <p className="classStoreName"><a href="#">{course.storeName}</a></p>
                                                <p className="price">$ {course.price}</p>
                                            </div>

                                        </div>
                                    )
                                }
                                )}
                            </div>



                        </>


                    ) : (
                        <p className="noresult">沒有符合的課程，換個條件試試看吧！</p>
                    )}



                </section>

            )}
        </>
    )
}

export default Results