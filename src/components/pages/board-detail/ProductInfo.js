import Description from "../../@common/Description/Description"
import Container from "../../@common/Container/Container"
import styles from "./BoardDetail.module.css"

const ProductInfo = ({productInfo}) => {
    return (
        <>
            {productInfo && (
                <Container className={styles["inner-box"]}>
                    <Description>상품명</Description>
                    {productInfo.name} <br/>
                    <Description>가격</Description>
                    {productInfo.price}원<br/>
                    <Description>구매시기</Description>
                    {productInfo.purchaseTime.year}년 {productInfo.purchaseTime.month}월 <br/>
                </Container>
            )}
        </>
    )
}

export default ProductInfo