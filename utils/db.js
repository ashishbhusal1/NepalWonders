import { connect } from 'mongoose';

export async function connectToDatabase() {
  const { MONGODB_URI } = process.env;

  const connection = await connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return connection;
}
