import { EXT_API_URL } from '../../config'

export default async (req, res) => {
    const categories = await fetch(`${ EXT_API_URL }/categories`)
                .then(res => res.json())
    res.status(200).json(categories.data)
}