import { Link } from "react-router-dom"
import { Gallery } from "./utils/gallery"

export const Navigation = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {
                Gallery.map(({ path, img, title }) => (
                    <Link
                        key={path}
                        to={path}
                    >
                        <div className="img-container">
                            <figure>
                                <img src={img} alt={title} />
                                <figcaption style={{ fontSize: '1.5rem' }}>{title}</figcaption>
                            </figure>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
