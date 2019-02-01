const accountSid = "AC97267a038aa3e5f669573b376e06ac0b"
const authToken = "f3db0e28efedf7396f4beb37c578bef9"

const client = require('twilio')(accountSid, authToken);

client.messages.create({
to: '12897000872',
from:'12898125908',
body: 'Testing'
})
.then((message) => console.log(message.sid));