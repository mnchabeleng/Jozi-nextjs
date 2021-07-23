import Image from 'next/image'

const Images = ({ images }) => {
    return (
        <div className="listing-images mt-3">
            <div className="row">
                {
                    images.map((img, index) => (
                        <div key={ index } className="col-sm-2">
                            <Image loader={ ({ src }) => src } src={ img.image } alt="..." width="200" height="200" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Images