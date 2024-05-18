import { Link } from "react-router-dom"
import { Gallery } from "./utils/gallery"

export const Navigation = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem', padding: '1.6rem', maxWidth: '1100px', marginInline: 'auto' }}>
            {
                Gallery.map(({ path, img, title }) => (
                    <Link
                        key={path}
                        to={path}
                    >
                        <div className="img-container">
                            <figure>
                                <img src={img} alt={title} />
                                <figcaption style={{ fontSize: '1.5rem', color: 'white' }}>{title}</figcaption>
                            </figure>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
