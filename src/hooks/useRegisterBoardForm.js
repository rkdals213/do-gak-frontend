import {useState} from "react"

export const REGISTER_BOARD_FORM = {
    TITLE: "title",
    CONTENT: "content",
    PRODUCT_INFO_REQUEST: {
        NAME: "productName",
        PRICE: "productPrice",
        PURCHASE_TIME: {
            YEAR: "purchaseYear",
            MONTH: "purchaseMonth"
        }
    }
}

const useRegisterBoardForm = () => {
    const [boardForm, setBoardForm] = useState({
        [REGISTER_BOARD_FORM.TITLE]: "",
        [REGISTER_BOARD_FORM.CONTENT]: "",
        [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.NAME]: "",
        [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.PRICE]: 0,
        [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.PURCHASE_TIME.YEAR]: 1970,
        [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.PURCHASE_TIME.MONTH]: ""
    })

    const handleTitleChange = ({ target }) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.TITLE]: target.value,
        }))
    }

    const handleContentChange = ({ target }) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.CONTENT]: target.value,
        }))
    }

    const handleProductNameChange = ({ target }) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.NAME]: target.value,
        }))
    }

    const handleProductPriceChange = ({ target }) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.PRICE]: target.value,
        }))
    }

    const handleProductPurchaseYearChange = ({ target }) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.PURCHASE_TIME.YEAR]: target.value,
        }))
    }

    const handleProductPurchaseMonthChange = ({ target }) => {
        setBoardForm((prev) => ({
            ...prev,
            [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.PURCHASE_TIME.MONTH]: target.value,
        }))
    }
    return {
        boardForm,
        setBoardForm,
        handleChanges: {
            [REGISTER_BOARD_FORM.TITLE]: handleTitleChange,
            [REGISTER_BOARD_FORM.CONTENT]: handleContentChange,
            [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.NAME]: handleProductNameChange,
            [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.PRICE]: handleProductPriceChange,
            [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.PURCHASE_TIME.YEAR]: handleProductPurchaseYearChange,
            [REGISTER_BOARD_FORM.PRODUCT_INFO_REQUEST.PURCHASE_TIME.MONTH]: handleProductPurchaseMonthChange
        }
    }
}

export default useRegisterBoardForm