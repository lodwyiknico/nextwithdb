const db = require('../../../lib/db').instance;
// console.log(db,'woi')
export default async (req, res) => {
    try {
        let sql = `
        SELECT * FROM t_mtr_promo
    `;
        
    let result = await db.any(sql)
    return res.status(200).json(result)
    } catch (error) {
       const { response } = error
       return response
         ? res.status(response.status).json({ message: response.statusText })
         : res.status(400).json({ message: error.message })
    }
}
