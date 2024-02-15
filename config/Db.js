import { connect } from 'mongoose';
const MOGODB_url =
    "mongodb+srv://keval:keval@flutternotes.nkafc0p.mongodb.net/?retryWrites=true&w=majority";

const Db = () => {
    connect(MOGODB_url).then(() => {
        console.log(`DB connected`)
    }).catch(() => {
        throw `Error while Connecting MongoDB`;
    });
}

export default Db