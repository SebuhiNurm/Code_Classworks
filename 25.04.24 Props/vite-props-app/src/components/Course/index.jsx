
function Course({ product }) {
    return (
        <>
            <div className="card" key={product.id}>
                <img src={product.img} alt="" />
                <span>{product.price}</span>
                <h2>{product.name}</h2>
            </div>
        </>
    )
}

export default Course