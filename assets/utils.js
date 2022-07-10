import moment from 'moment';
import axios from 'axios';
import xml2js from 'xml2js';

function generateUUID (length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export async function createAxiosPetition (type, account) {
  const date = moment().format();
  const resp = await axios.post('api/ProcessTransactionIsoPort', `
           <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
           xmlns:imp="http://implementations.belejanor.switcher.com/">
           <soapenv:Header/>
           <soapenv:Body>
              <imp:processtransaction>
                 <Iso8583>
                    <ISO_BitMap>camt.998.888.A</ISO_BitMap>
                    <ISO_000_Message_Type>1200</ISO_000_Message_Type>
                    <ISO_003_ProcessingCode>${type}</ISO_003_ProcessingCode>
                    <ISO_007_TransDatetime>${date}</ISO_007_TransDatetime>
                    <ISO_011_SysAuditNumber>${generateUUID(10)}</ISO_011_SysAuditNumber>
                    <ISO_012_LocalDatetime>${date}</ISO_012_LocalDatetime>
                    <ISO_015_SettlementDatel>${moment().format('YYYY-MM-DD')}</ISO_015_SettlementDatel>
                    <ISO_018_MerchantType>0004</ISO_018_MerchantType>
                    <ISO_024_NetworkId>555551</ISO_024_NetworkId>
                    <ISO_041_CardAcceptorID>WEBB</ISO_041_CardAcceptorID>
                    <ISO_102_AccountID_1>${account}</ISO_102_AccountID_1>
                 </Iso8583>
              </imp:processtransaction>
           </soapenv:Body>
        </soapenv:Envelope>
                `, {
    headers: { 'Content-Type': 'text/xml' },
  });
  const parser = new xml2js.Parser({
    explicitArray: false,
  });
  let result = await parser.parseStringPromise(resp.data);
  result = result['soap:Envelope']['soap:Body'][
    'ns2:processtransactionResponse'
  ].processtransactionReturn;
  return result;
}
