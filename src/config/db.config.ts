import mongoose from "mongoose";
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");
import logger from "./logger.config";

class DBConnection {
  private static instance: DBConnection;
  private uri: string;
  private isConnected: boolean;

  private constructor(ATLAS_DB_URL: string) {
    this.uri = ATLAS_DB_URL;
    this.isConnected = false;
  }

  public static getInstance(ATLAS_DB_URL: string): DBConnection {
    if (!DBConnection.instance) {
      DBConnection.instance = new DBConnection(ATLAS_DB_URL);
    }
    return DBConnection.instance;
  }

  public async connect(): Promise<void> {
    if (this.isConnected) {
      throw new Error('DB Connection already exists');
    }
    try {
      if (NODE_ENV === 'development') {
        await mongoose.connect(this.uri);
        this.isConnected = true;
        logger.info('Database connected successfully');
      }
    } catch (error) {
      logger.error('Error connecting to the database', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    if (!this.isConnected) {
      throw new Error('No DB connection exists to disconnect');
    }
    try {
      await mongoose.disconnect();
      this.isConnected = false;
      logger.info('Database disconnected successfully');
    } catch (error) {
      logger.error('Error disconnecting from the database', error);
      throw error;
    }
  }
}

const db = DBConnection.getInstance(ATLAS_DB_URL);
module.exports = db;