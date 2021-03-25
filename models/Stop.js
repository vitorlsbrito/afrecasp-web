const dynamoose = require('dynamoose');
const uuid = require('uuid');

const ddb = new dynamoose.aws.sdk.DynamoDB({
    'accessKeyId': process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    'secretAccessKey': process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
    'region': process.env.NEXT_PUBLIC_REGION,
})

dynamoose.aws.ddb.set(ddb);

const stopSchema = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true,
        default: uuid.v4,
    },
    bus: {
        type: String,
        required: true,
    },
    trip: {
        type: String,
        required: true,
    },
    stop: {
        type: Number,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    hour: {
        type: String,
    },
    lat: {
        type: String,
    },
    lng: {
        type: String,
    }
},
{
    timestamps: true,
});

module.exports = dynamoose.model('Stop', stopSchema);
