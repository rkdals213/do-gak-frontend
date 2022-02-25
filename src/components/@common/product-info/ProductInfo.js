const ProductInfo = (productInfo) => {
    return (
        <div>
            {productInfo && (
                <div>
                    {productInfo.productInfo.name} <br/>
                    {productInfo.productInfo.price}원<br/>
                    {productInfo.productInfo.purchaseTime.year}년 {productInfo.productInfo.purchaseTime.month}월 <br/>
                </div>
            )}
        </div>
    )
}

export default ProductInfo