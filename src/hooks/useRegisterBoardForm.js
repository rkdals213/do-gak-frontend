import {useState} from "react"

export const REGISTER_BOARD_FORM = {
    TITLE: "title",
    CONTENT: "content",
    PRODUCT_INFO: "productInfo"
}

export const REGISTER_PRODUCT_FORM = {
    NAME: "name",
    PRICE: "price",
    PURCHASE_TIME: "purchaseTime"
}

export const REGISTER_PURCHASE_TIME = {
    YEAR: "year",
    MONTH: "month"
}

const useRegisterBoardForm = () => {
    const [boardForm, setBoardForm] = useState({
        [REGISTER_BOARD_FORM.TITLE]: "",
        [REGISTER_BOARD_FORM.CONTENT]: "",
        [REGISTER_BOARD_FORM.PRODUCT_INFO]: {
            [REGISTER_PRODUCT_FORM.NAME]: "",
            [REGISTER_PRODUCT_FORM.PRICE]: 0,
            [REGISTER_PRODUCT_FORM.PURCHASE_TIME]: {
                [REGISTER_PURCHASE_TIME.YEAR]: 1970,
                [REGISTER_PURCHASE_TIME.MONTH]: ""
            }
        }
    })

    const handleTitleChange = ({target}) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.TITLE]: target.value,
        }))
    }

    const handleContentChange = ({target}) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.CONTENT]: target.value,
        }))
    }

    const handleProductNameChange = ({target}) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.PRODUCT_INFO]: {
                ...prev.productInfo,
                [REGISTER_PRODUCT_FORM.NAME]: target.value
            }
        }))
    }

    const handleProductPriceChange = ({target}) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.PRODUCT_INFO]: {
                ...prev.productInfo,
                [REGISTER_PRODUCT_FORM.PRICE]: target.value
            }
        }))
    }

    const handleProductPurchaseYearChange = ({target}) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.PRODUCT_INFO]: {
                ...prev.productInfo,
                [REGISTER_PRODUCT_FORM.PURCHASE_TIME]: {
                    ...prev.productInfo.purchaseTime,
                    [REGISTER_PURCHASE_TIME.YEAR]: target.value
                }
            }
        }))
    }

    const handleProductPurchaseMonthChange = ({target}) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.PRODUCT_INFO]: {
                ...prev.productInfo,
                [REGISTER_PRODUCT_FORM.PURCHASE_TIME]: {
                    ...prev.productInfo.purchaseTime,
                    [REGISTER_PURCHASE_TIME.MONTH]: target.value
                }
            }
        }))
    }

    return {
        boardForm,
        setBoardForm,
        handleChanges: {
            [REGISTER_BOARD_FORM.TITLE]: handleTitleChange,
            [REGISTER_BOARD_FORM.CONTENT]: handleContentChange,
            [REGISTER_BOARD_FORM.PRODUCT_INFO]: {
                [REGISTER_PRODUCT_FORM.NAME]: handleProductNameChange,
                [REGISTER_PRODUCT_FORM.PRICE]: handleProductPriceChange,
                [REGISTER_PRODUCT_FORM.PURCHASE_TIME]: {
                    [REGISTER_PURCHASE_TIME.YEAR]: handleProductPurchaseYearChange,
                    [REGISTER_PURCHASE_TIME.MONTH]: handleProductPurchaseMonthChange
                }
            }
        }
    }
}

export default useRegisterBoardForm