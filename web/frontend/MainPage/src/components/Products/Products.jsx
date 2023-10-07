import FlashCardBox from "../flashDeals/FlashCardBox";

const Products = ({ prods, addToCart }) => {
    return (
        <div className="contentCenter">
            <div className='contentWidth'>
                <div className='product-content  grid1'>

                    {prods.map((prod, idx) =>
                        <FlashCardBox key={idx} addToCart={addToCart} productItems={prod} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products