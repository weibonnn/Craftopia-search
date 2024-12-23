import { useEffect, useState } from "react";

function Results({filteredCourses}) {

    const [oderIsOpen, setOderIsOpen] = useState(false);
    const [classifyIsOpen, setClassifyIsOpen] = useState(false);


    /* 課程排序選擇 */
    const [selectedOrderOption, setSelectedOrderOption] = useState("排序");
    const orderOptions = [
        { value: "最新", label: "最新" },
        { value: "最熱門", label: "最熱門" },
        { value: "最低價", label: "最低價" },
        { value: "最高價", label: "最高價" },
    ];


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
        } else {
            setSelectedOrderOption(label); // 更新顯示的選中值

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



    return (
        <>




            <section className="searchResault">

                <figure className="listTitle">
                    <img src="./images/title-resault.svg" alt="" />
                </figure>

                <div className="allFilter">
                    <div className={`filter classify ${classifyIsOpen ? "open" : ""}`} >
                        <div className="select-header" onClick={() => toggleDropdown("classify")}>
                            <div>分類</div>
                            <img className="arrowDown" src="./images/icons-arrowDownR.svg" alt="" />
                        </div>
                        <div className='option-container'>
                            <div className="select-option">
                                <p className="classify-title">價格</p>
                                <div>
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
                                <div>
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

                    
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div className="classCard">

                            <figure className="classPhoto">
                                <a href="#">
                                    <img className="defaultPhoto" src="./images/classphoto-01.jpg" alt="" />
                                    <img className="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                                    <img className="maskLayer" src="./images/classphoto-01.jpg" alt="" />
                                </a>
                            </figure>
                            <div className="classTag">
                                <p className="classLevel">{course.level}</p>
                                <p className="classTime">{course.duration}hr</p>
                            </div>
                            <div className="classTitle">
                                <h3><a href="#">{course.courseName}</a></h3>
                                <img className="icons-heart" src="./images/icons-heart.svg" alt="" />
                            </div>
                            <div className="classPrice">
                                <p className="classStoreName"><a href="#">{course.storeName}</a></p>
                                <p className="classPrice">$ {course.price}</p>
                            </div>
    
                        </div>
                        ))
                      ) : (
                        <p>沒有符合的課程，換個條件試試看吧！</p>
                      )}
                   

                </div>




                <div className="seeMore">

                    <figure><img src="./images/small-circle.svg" alt="" /></figure>
                    <div>
                        <a href="#">
                            <p>See</p>
                            <p>More</p>
                            <img className="icons-arrowDown" src="./images/icons-arrowDown.svg" alt="" />
                        </a>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Results