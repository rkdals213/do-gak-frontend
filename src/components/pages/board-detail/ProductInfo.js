import Description from "../../@common/Description/Description"

const ProductInfo = ({productInfo}) => {
    return (
        <>
            {productInfo && (
                <div>
                    <hr/>
                    <br/>
                    <Description>상품명</Description>
                    {productInfo.name} <br/>
                    <Description>가격</Description>
                    {productInfo.price}원<br/>
                    <Description>구매시기</Description>
                    {productInfo.purchaseTime.year}년 {productInfo.purchaseTime.month}월 <br/>
                    <br/>
                    <hr/>
                </div>
            )}
        </>
    )
}

export default ProductInfo