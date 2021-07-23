import { EXT_API_URL } from '../../../config'

export default async (req, res) => {
    const { slug } = req.query
    const listing = await fetch(`${ EXT_API_URL }/listings/${ slug }`)
                          .then(res => res.json())
                          .catch(() => null)
    res.status(200).json(listing ? listing.data : null)
}