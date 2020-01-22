import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AdvertSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    room: {
        type: Number,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    square: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Advert', AdvertSchema);