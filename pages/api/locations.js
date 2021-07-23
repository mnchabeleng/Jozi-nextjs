import { EXT_API_URL } from '../../config'

export default async (req, res) => {
    const locations = await fetch(`${ EXT_API_URL }/locations`)
                      .then(res => res.json())
    res.status(200).json(locations.data)
}