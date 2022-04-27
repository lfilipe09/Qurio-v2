import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    const sheet = doc.sheetsById[0]
    await sheet.loadCells('A2:F2')

    const chapterOneLikes = sheet.getCell(1, 1)
    const chapterTwoLikes = sheet.getCell(1, 3)
    const chapterThreeLikes = sheet.getCell(1, 5)
    req.body = JSON.parse(req.body)

    chapterOneLikes.value = req.body.chapterOneLikes

    chapterTwoLikes.value = req.body.chapterTwoLikes

    chapterThreeLikes.value = req.body.chapterThreeLikes

    await sheet.saveUpdatedCells()
  } catch (err) {
    res.status(413).send(err)
  }
}
