import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../../credentials.json'

const doc = new GoogleSpreadsheet(
  '1dn-7d97-zVk3hv1mz7ntl7A1kGfkR3PXHazHLGU06GI'
)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsById[0]

    await sheet.addRow(JSON.parse(req.body))

    res.end(console.log('deu bom!'))
  } catch (err) {
    res.end(
      JSON.stringify({
        chapterOneLikes: null,
        chapterTwoLikes: null,
        chapterThreeLikes: null
      })
    )
  }
}
