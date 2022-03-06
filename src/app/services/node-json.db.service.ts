import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { IPaymentData } from '../../interfaces'

const json_db = new JsonDB(new Config('jsondb', true, false, '/'))
const pushData = (payment_data: IPaymentData) => json_db.push(`/payment_data/orders[]`, payment_data)
export const db = { pushData }
