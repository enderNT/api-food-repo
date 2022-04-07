//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.`\ _ /`.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js')
const { sequelize } = require('./src/db/models/index.js')
require('dotenv').config()

//const { PORT_APP } = process.env || 4001

server.listen(process.env.PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log(`App is running on port: ${process.env.PORT}`)
  } catch (error) {
    console.clear()
    console.error('Something is wrong...')
    throw new Error (error)
  }
})
