import { connect } from 'mongoose';

export async function dbConnection() {

    // try {
    await connect(process.env.DB_URl || '').then(() => {
        console.log("DB connected successfully")
    });
    // } catch (error) {
    //     console.log("can't connect to DataBase" , error)
    // }
}

