const aws = require('aws-sdk')

const oParams = {
    Destination: { /* required */
        ToAddresses: [
            "sanjanas.3001@gmail.com",
            /* more items */
        ]
    },
    Message: { /* required */
        Body: { /* required */
            Text: {
                Charset: "UTF-8",
                Data: ""
            }
        },
        Subject: {
            Charset: "UTF-8",
            Data: "KPI Alert"
        }
    },
    Source: "sanjanadathathri123+source@gmail.com", /* required */
}

const ses = new aws.SES()

exports.handler = async (event) => {
    console.log(JSON.stringify(event))

    for (let item of event.Records) {

        if (item.eventName === 'REMOVE') return

        /**********************Parsing the params from event object*******************/
        const Name = item.dynamodb.NewImage.Name['S']
        const Convicted = item.dynamodb.NewImage.Convicted['S']
        /*****************************************************************************/

        if (Convicted === "yes" || Convicted === "Yes") {
            try {
                //const msgBody = `${Name} has exceeded the threshold value ${thresholdValue} by ${actualValue - thresholdValue} units for plant ${plant} and line ${line}`
                const msgBody = `${Name} has Convicted ${Convicted}. Has to be noted for future!`
                oParams.Message.Body.Text['Data'] = msgBody
                await ses.sendEmail(oParams).promise()
            } catch (error) {
                return error.message
            }
        }
    }
}