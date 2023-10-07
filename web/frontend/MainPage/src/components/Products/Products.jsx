import FlashCardBox from "../flashDeals/FlashCardBox";

const Products = ({ prods, addToCart, redeem }) => {
    return (
        <div className="contentCenter">
            <div className='contentWidth'>
                <div className='product-content  grid1'>

                    {prods.map((prod, idx) =>
                        <FlashCardBox key={idx} redeem={redeem} addToCart={addToCart} productItems={prod} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products