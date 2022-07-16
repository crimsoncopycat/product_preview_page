import ImageProduct from '../images/image-product-desktop.jpg';
const CardComponent = () => {
    return (
        <div className="card_wrapper">
            <div className="card_image">
                <img src={ImageProduct} alt="" className="" />
            </div>
            <div className="card_descript_block">
                <div className="product_type">Perfume</div>
                <div className="product_name">Gabrielle Essence eau De Parfum</div>
                <div className="product_descript">
                    <p>A floral, solar and voluptuous
    interpretation composed by Olivier Polge, Perfumer-Creator for the House of
    CHANEL.</p>
                </div>
                <div className="product_price_block">
                    <b>$149.99</b>
                    <s>$169.99</s>
                </div>
                <div className="add_to_card_block">
                     <button>Add to Cart</button>
                </div>
               
            </div>
        </div>
    )
}

export default CardComponent