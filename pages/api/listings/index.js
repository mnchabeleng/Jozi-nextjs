import { EXT_API_URL } from '../../../config'

export default async (req, res) => {
    const category = req.query.category ? req.query.category : ''
    const location = req.query.location ? req.query.location : ''
    const search = req.query.search ? req.query.search : ''
    const page = req.query.page ? req.query.page : 1

    const listings = await fetch(`${ EXT_API_URL }/listings?category=${ category }&location=${ location }&search=${ search }&page=${ page }`)
                      .then(res => res.json())
    res.status(200).json(listings.data)
}